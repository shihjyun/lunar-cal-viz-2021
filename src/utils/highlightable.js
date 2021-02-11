import * as d3 from 'd3'
import { getAngle, normalizedSquareCord } from './helper.js'
import { HoveredDate } from '../stores/GraphStore.js'

export function highlightable(node, parm) {

  let mouseDegree = 0
  let normOffsetCord, tickIndex
  const degreeEachTick = 360 / parm.days

  
  function handleMouseenter(e) {
    e.stopPropagation()
    
    node.addEventListener('mousemove', handleMousemove, true)
    node.addEventListener('mouseleave', handleMouseleave)
  }

  function handleTouchstart(e){
    e.stopPropagation()
    e.preventDefault()
    
    node.addEventListener('touchmove', handleTouchmove, true)
    node.addEventListener('touchend', handleMouseleave)
  }
  
  function handleMousemove(e) {
    e.stopPropagation()

    // get hovered tick index
    normOffsetCord = normalizedSquareCord(130, 130, e.offsetX, e.offsetY)
    mouseDegree = getAngle(normOffsetCord[0], normOffsetCord[1])
    tickIndex = Math.round(mouseDegree/degreeEachTick) === parm.days ? 0 : Math.round(mouseDegree/degreeEachTick)
   
    // highlight hovered tick
    d3.select(node).selectAll('.x-axis > *').each(function(d, i){
      if (i === tickIndex) {
        d3.select(this).attr('stroke-width', 5).attr('stroke-opacity', 0.8)
      } else {
        d3.select(this).attr('stroke-width', 1).attr('stroke-opacity', 0.2)
      }
    })

    // update hovered date data to store
    HoveredDate.update(() => {
      return {
        month: parm.month,
        day: tickIndex + 1
      }
    })
    
  }

  function handleTouchmove(e) {
    e.stopPropagation()
    e.preventDefault()

    // get hovered tick index
    const bcr = e.target.getBoundingClientRect();
    normOffsetCord = normalizedSquareCord(130, 130, e.touches[0].clientX - bcr.x, e.touches[0].clientY - bcr.y)
    mouseDegree = getAngle(normOffsetCord[0], normOffsetCord[1])
    tickIndex = Math.round(mouseDegree/degreeEachTick) === parm.days ? 0 : Math.round(mouseDegree/degreeEachTick)
   
    // highlight hovered tick
    d3.select(node).selectAll('.x-axis > *').each(function(d, i){
      if (i === tickIndex) {
        d3.select(this).attr('stroke-width', 5).attr('stroke-opacity', 0.8)
      } else {
        d3.select(this).attr('stroke-width', 1).attr('stroke-opacity', 0.2)
      }
    })

    // update hovered date data to store
    HoveredDate.update(() => {
      return {
        month: parm.month,
        day: tickIndex + 1
      }
    })
    
  }

  function handleMouseleave(e) {
    e.stopPropagation()

    node.removeEventListener('mousemove', handleMousemove)
    node.removeEventListener('touchmove', handleTouchmove)

    // reset tick style
    d3.select(node).selectAll('.x-axis > *').attr('stroke-width', 1).attr('stroke-opacity', 0.2)

    // reset date store
    HoveredDate.update(() => {
      return 'no hovered date'
    })
  }

  node.addEventListener('mouseenter', handleMouseenter)
  node.addEventListener('touchstart', handleTouchstart)
  

  return {
    update() {

    },
    destroy() {
      node.removeEventListener('mouseenter', handleMouseenter)
    }
  }
}