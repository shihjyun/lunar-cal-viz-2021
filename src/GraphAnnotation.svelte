<script>
  import { cubicOut } from 'svelte/easing'
  import { fade, slide } from 'svelte/transition'
  import { HoveredDate } from './stores/GraphStore.js'

  export let month, idx, monthData

  $: day = $HoveredDate.day
  $: active = $HoveredDate !== 'no hovered date' && $HoveredDate.month === idx + 1
  $: goodAmount = active ? monthData.filter((d) => d.day == day)[0].good.length : null
  $: badAmount = active ? monthData.filter((d) => d.day == day)[0].bad.length : null
</script>

<h3>
  {month}
  月

  {#if active}<span in:fade out:fade={{ delay: 50 }}>{day} 日</span>{/if}
</h3>
{#if active}
  <div in:slide={{ duration: 300, easing: cubicOut }} out:slide={{ delay: 300, easing: cubicOut }}>
    <ul in:fade={{ delay: 200 }} out:fade={{ duration: 150 }}>
      <li><span>宜</span> <strong in:fade>{goodAmount}</strong></li>
      <li><span>忌</span> <strong in:fade>{badAmount === 1 ? badAmount + '*' : badAmount}</strong></li>
    </ul>
    {#if badAmount === 1}
      <p in:slide={{ duration: 300, easing: cubicOut, delay: 400 }} out:slide={{ delay: 300, easing: cubicOut }}>
        *日值<strong class="bad">{monthData.filter((d) => d.day == day)[0].bad}</strong>，宜事少取！
      </p>
    {/if}
  </div>
{/if}

<style>
  h3 {
    font-size: 28px;
    text-align: center;
    margin-bottom: 10px;
  }
  ul {
    display: grid;
    width: 150px;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    margin: 0 auto;
    padding-bottom: 6px;
  }
  li {
    display: inline-block;
    line-height: 1.5;
  }

  li:nth-child(1) > span {
    display: inline-block;
    text-align: center;
    width: 26px;
    height: 26px;
    background-color: #cb3c54;
    border-radius: 50%;
    color: white;
    margin-right: 4px;
  }

  li:nth-child(2) > span {
    display: inline-block;
    text-align: center;
    width: 26px;
    height: 26px;
    background-color: #232627;
    border-radius: 50%;
    color: white;
    margin-right: 4px;
    margin-left: 4px;
  }
  strong {
    font-weight: bold;
    font-size: 20px;
    line-height: 1;
  }
  .bad {
    font-size: 16px;
  }
  p {
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
</style>
