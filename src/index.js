console.log('Hello in headless counter app!')

const state = {
  number: 0
}

const inc = () => {
  state.number = state.number + 1
  render()
}
const dec = () => {
  state.number = state.number - 1
  render()
}

const render = () => {
  console.log(`Current number is ${state.number}`)
}

window.inc = inc
window.dec = dec

render()
