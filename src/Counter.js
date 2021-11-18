import React from 'react'

import { store } from './store'
import { createActionInc, createActionDec } from './state/counter'

const incHandler = (delta = 1) => { store.dispatch(createActionInc(delta)) }
const decHandler = (delta = 1) => { store.dispatch(createActionDec(delta)) }

export const Counter = () => {
  const [, forceUpdate] = React.useState(false)

  const currentState = store.getState()
  const { number } = currentState

  React.useEffect(() => {
    const listener = () => forceUpdate((prevState) => !prevState)

    store.subscribe(listener)
  }, [])

  return (
    <div>
      <h1>
        { number }
      </h1>
      <button
        onClick={() => incHandler()}
      >
        +
      </button>
      <button
        onClick={() => decHandler()}
      >
        -
      </button>
    </div>
  )
}

export default Counter
