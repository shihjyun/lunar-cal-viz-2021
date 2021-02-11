<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import Graph from './Graph.svelte'
  import SelectBox from './SelectBox.svelte'
  import DetailBlock from './DetailBlock.svelte'
  import Footer from './Footer.svelte'
  import { SelectedEvent } from './stores/SelectionStore.js'

  let summaryData
  $: goodDayCount =
    $SelectedEvent !== '請選擇' ? summaryData.filter((d) => d.value === $SelectedEvent)[0].good_count : null
  $: badDayCount =
    $SelectedEvent !== '請選擇' ? summaryData.filter((d) => d.value === $SelectedEvent)[0].bad_count : null

  onMount(async () => {
    const res = await fetch('data/lunar_cal_summary.json')
    summaryData = await res.json().then((raw) =>
      raw.map((d) => {
        // adjust number type
        d.good_count = +d.good_count
        d.bad_count = +d.bad_count

        return d
      })
    )
  })
</script>

<main>
  <h1>🌸 農民曆<span> 2021 改</span> 🌸</h1>
  <DetailBlock />
  <section class="intro">
    {#if summaryData}
      <p>
        萬事皆問農民曆，我想 ...
        <SelectBox options={summaryData.map((d) => d.value)} />！
      </p>
    {/if}
    {#key $SelectedEvent}
      {#if $SelectedEvent !== '請選擇'}
        <p in:fade>2021 年共有 {goodDayCount} 天宜 <strong>{$SelectedEvent}</strong>，{badDayCount} 天不宜。</p>
      {/if}
    {/key}
  </section>
  <section class="charts">
    <Graph />
  </section>
</main>

<Footer />

<style>
  main {
    font-family: 'Noto Serif TC', serif;
    max-width: 1200px;
    margin: 0 auto;
  }
  section.charts {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }

  section.intro > p {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  h1 {
    font-size: 34px;
    font-weight: bold;
    padding: 40px;
    text-align: center;
  }
  strong {
    font-weight: bold;
  }
  h1 > span {
    margin-left: 8px;
    font-size: 12px;
  }

  @media (min-width: 500px) {
    section.charts {
      grid-template-columns: repeat(2, 1fr);
    }

    section.intro > p {
      font-size: 24px;
    }
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 48px;
      font-weight: bold;
    }
    h1 > span {
      font-size: 18px;
    }
    section.charts {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
