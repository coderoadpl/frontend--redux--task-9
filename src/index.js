import { store, createActionInc, createActionDec } from './store'

console.log('Hello in headless counter app!')

const inc = () => store.dispatch(createActionInc(1))
const dec = () => store.dispatch(createActionDec(1))

const listener = () => render()

store.subscribe(listener)

const render = () => {
  const currentState = store.getState()
  const { number } = currentState
  console.log(`Current number is ${number}`)
}

window.inc = inc
window.dec = dec

render()
