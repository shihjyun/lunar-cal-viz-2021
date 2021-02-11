import { writable } from 'svelte/store'

let HoveredDate = writable('no hovered date')

export { HoveredDate }