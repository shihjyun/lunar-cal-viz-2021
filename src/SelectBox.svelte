<script>
  import { SelectedEvent } from './stores/SelectionStore.js'

  export let options

  let selected

  function handleChange() {
    SelectedEvent.update(() => {
      return selected
    })
  }
</script>

<select bind:value={selected} on:change={handleChange}>
  <option value="請選擇">🤔🤔</option>
  {#each options as option}
    <option {option}>{option}</option>
  {/each}
</select>

<style>
  select {
    text-rendering: auto;
    color: black;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    text-align-last: center;
    -moz-text-align-last: center;
    appearance: none;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border: none;
    outline: none;
    border-bottom: 4px solid #db597d;
    padding: 0 1.5px 2px 1.5px;
    width: 58px;
  }

  select:focus {
    outline: none;
  }
</style>
