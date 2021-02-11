import { writable } from 'svelte/store'

let SelectedEvent = writable('請選擇')

export { SelectedEvent }