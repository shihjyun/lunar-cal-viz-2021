<script>
  import { onMount } from 'svelte'
  import { highlightable } from './utils/highlightable.js'
  import { SelectedEvent } from './stores/SelectionStore.js'
  import GraphAnnotation from './GraphAnnotation.svelte'
  import * as d3 from 'd3'

  let data, maxGoodDay, maxBadDay
  const dateParser = d3.timeParse('%Y-%m-%d')

  // month data
  const monthSet = [
    { month: 1, days: 31 },
    { month: 2, days: 28 },
    { month: 3, days: 31 },
    { month: 4, days: 30 },
    { month: 5, days: 31 },
    { month: 6, days: 30 },
    { month: 7, days: 31 },
    { month: 8, days: 31 },
    { month: 9, days: 30 },
    { month: 10, days: 31 },
    { month: 11, days: 30 },
    { month: 12, days: 31 },
  ]
  const monthArray = monthSet.map((d) => d.month)

  // render graph after data fetched
  $: if (data) {
    maxGoodDay = d3.max(data.map((d) => d.good.length))
    maxBadDay = d3.max(data.map((d) => d.bad.length))

    for (let i = 0; i < monthArray.length; i++) {
      drawGraph({
        data: data.filter((d) => d.month === i + 1),
        month: i + 1,
        baseRadial: 80,
        areaRadial: 60,
      })
    }
  }

  // udpate whe get new selected event
  $: if ($SelectedEvent === '請選擇') {
    // clear inner cirlce when user select ??
    d3.selectAll('.selected-blur circle').remove()
    d3.selectAll('.selected-events circle').remove()
  } else {
    for (let i = 0; i < monthArray.length; i++) {
      drawEventPoint({
        data: data
          // convert data type
          .map((d) => {
            if (d.good.includes($SelectedEvent)) {
              d.eventType = 'good'
            } else if (d.bad.includes($SelectedEvent)) {
              d.eventType = 'bad'
            } else {
              d.eventType = 'empty'
            }
            return { month: d.month, eventType: d.eventType, date: d.date }
          })
          .filter((d) => d.month === i + 1 && d.eventType !== 'empty'),
        month: i + 1,
        baseRadial: 48,
      })
    }
  }

  onMount(async () => {
    const res = await fetch('data/lunar_cal_data.json')
    data = await res.json().then((raw) =>
      raw.map((d) => {
        // convert single string value to array
        if (!Array.isArray(d.good)) {
          d.good = [d.good]
        }
        if (!Array.isArray(d.bad)) {
          d.bad = [d.bad]
        }
        // adjust number type
        d.day = +d.day
        d.month = +d.month
        d.year = +d.year
        // adjust date format
        d.date = dateParser(d.date)

        return d
      })
    )
  })

  // draw graph
  function drawGraph(config) {
    // get config data
    const { data, month, baseRadial, areaRadial } = config

    // add fake data in the end of month
    data.push(data[0])

    const daily = d3
      .scaleUtc()
      .domain([dateParser(`2021-${month}-01`), dateParser(`2021-${month + 1}-01`)])
      .range([0, 2 * Math.PI])

    const scaleGoodRadius = d3
      .scaleLinear()
      .domain([0, maxGoodDay])
      .range([baseRadial, baseRadial + areaRadial])

    const scaleBadRadius = d3
      .scaleLinear()
      .domain([0, maxBadDay])
      .range([baseRadial, baseRadial - areaRadial * (5 / 6)])

    const goodRadial = d3
      .areaRadial()
      .angle((d) => daily(d.date))
      .innerRadius(baseRadial)
      .outerRadius((d) => scaleGoodRadius(d.good.length))
      .curve(d3.curveCatmullRom)

    const badRadial = d3
      .areaRadial()
      .angle((d) => daily(d.date))
      .innerRadius((d) => scaleBadRadius(d.bad.length))
      .outerRadius(baseRadial)
      .curve(d3.curveCatmullRom)
    // axis generator
    const xAxis = (g) => {
      g.call((g) =>
        g
          .selectAll('path')
          .data(data.slice(0, data.length - 1).map((d) => d.date))
          .join('path')
          .attr('id', (d, i) => 'm' + month + '-' + (i + 1))
          .attr('stroke', '#2d2d2d')
          .attr('stroke-opacity', 0.2)
          .attr('stroke-width', 1)
          .attr(
            'd',
            (d) => `
              M${d3.pointRadial(daily(d), 55)}
              L${d3.pointRadial(daily(d), 65)}
            `
          )
      )
    }

    // draw adorable chart
    const svg = d3.select(`#month-${month}`).append('g').attr('transform', 'translate(130, 130)')

    // generate good area
    svg
      .append('g')
      .attr('class', 'good-area')
      .append('path')
      .attr('d', goodRadial(data))
      .attr('stroke', 'none')
      .attr('fill', 'url(#goodThingsGradient)')

    // generate bad area
    svg
      .append('g')
      .attr('class', 'bad-area')
      .append('path')
      .attr('d', badRadial(data))
      .attr('stroke', 'none')
      .attr('fill', 'url(#badThingsGradient)')

    // generate axis
    svg.append('g').attr('class', 'x-axis').call(xAxis)

    // generate black blur point
    svg
      .append('g')
      .attr('class', 'bad-blur')
      .selectAll('circle')
      .data(
        data
          .slice(0, data.length - 1)
          .filter((d) => d.note)
          .map(({ date, note, bad }) => {
            return { cd: d3.pointRadial(daily(date), baseRadial), note, bad }
          })
      )
      .join('circle')
      .attr('r', 0)
      .attr('fill', 'black')
      .attr('filter', 'url(#blackBlur)')
      .attr('opacity', 1)
      .attr('cx', (d) => d.cd[0])
      .attr('cy', (d) => d.cd[1])
      .attr('data-sp-bad', (d) => d.bad)
      .attr('r', 4)

    // generate bad alert event
    svg
      .append('g')
      .attr('class', 'bad-alert')
      .selectAll('circle')
      .data(
        data
          .slice(0, data.length - 1)
          .filter((d) => d.note)
          .map(({ date, note, bad }) => {
            return { cd: d3.pointRadial(daily(date), baseRadial), note, bad }
          })
      )
      .join('circle')
      .attr('r', 0)
      .attr('fill', '#161519')
      .attr('opacity', 1)
      .attr('cx', (d) => d.cd[0])
      .attr('cy', (d) => d.cd[1])
      .attr('data-sp-bad', (d) => d.bad)
      .attr('r', 4)

    // generate selected event blur circle group for `drawEventPoint()`
    svg.append('g').attr('class', 'selected-blur')

    // generate selected event group for `drawEventPoint()`
    svg.append('g').attr('class', 'selected-events')
  }

  // draw selected event points
  function drawEventPoint(config) {
    // get config data
    const { data, month, baseRadial } = config

    const eventGroup = d3.select(`#month-${month} .selected-events`)
    const blurGroup = d3.select(`#month-${month} .selected-blur`)

    // clear old circle
    eventGroup.selectAll('circle').remove()

    blurGroup.selectAll('circle').remove()

    const daily = d3
      .scaleUtc()
      .domain([dateParser(`2021-${month}-01`), dateParser(`2021-${month + 1}-01`)])
      .range([0, 2 * Math.PI])

    // generate black blur point
    blurGroup
      .selectAll('circle')
      .data(
        data.map(({ date, eventType }) => {
          return { cd: d3.pointRadial(daily(date), baseRadial), eventType }
        })
      )
      .join('circle')
      .attr('fill', '#ffffff')
      .attr('filter', 'url(#blackBlur)')
      .attr('opacity', 0)
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 3)
      .transition()
      .delay(month * 150)
      .duration(400)
      .attr('opacity', 0.8)
      .attr('cx', (d) => d.cd[0])
      .attr('cy', (d) => d.cd[1])
      .attr('r', 3)

    eventGroup
      .selectAll('circle')
      .data(
        data.map(({ date, eventType }) => {
          return { cd: d3.pointRadial(daily(date), baseRadial), eventType }
        })
      )
      .join('circle')
      .attr('fill', (d) => (d.eventType === 'good' ? '#D12440' : '#423147'))
      .attr('opacity', 0)
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 3)
      .transition()
      .delay(month * 150)
      .duration(400)
      .attr('cx', (d) => d.cd[0])
      .attr('cy', (d) => d.cd[1])
      .attr('opacity', 0.9)
  }
</script>

{#each monthSet as { month }, i}
  <div class="graph-container">
    {#if data}
      <GraphAnnotation {month} idx={i} monthData={data.filter((d) => d.month === month)} />
    {/if}
    <svg use:highlightable={{ month, days: monthSet[month - 1].days }} id="month-{month}" width="260" height="260">
      <defs>
        <filter id="blackBlur" x="-50%" y="-50%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <radialGradient
          id="goodThingsGradient"
          cy="0.5"
          cx="0.5"
          gradientTransform="rotate(-7,0.5,0.5) translate(0.995,0) scale(-0.99,1)"
          r="0.54808"
          spreadMethod="pad"
        >
          <stop offset="0" stop-opacity="0.99609" stop-color="#e3e3e3" />
          <stop offset="1" stop-opacity="0.99609" stop-color="#d93965" />
        </radialGradient>
        <radialGradient
          id="badThingsGradient"
          cy="0.5"
          cx="0.5"
          gradientTransform="rotate(-7,0.5,0.5) translate(0.995,0) scale(-0.99,1)"
          r="0.88364"
          spreadMethod="pad"
        >
          <stop offset="0" stop-opacity="0.98828" stop-color="#2d2d2d" />
          <stop offset="1" stop-opacity="0.99219" stop-color="#d7d7d7" />
        </radialGradient>
      </defs></svg>
  </div>
{/each}

<style>
  .graph-container {
    width: 260px;
    height: 300px;
    margin: 30px auto;
  }
</style>
