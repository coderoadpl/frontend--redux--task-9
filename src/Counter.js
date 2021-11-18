import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { createActionInc, createActionDec } from './state/counter'

export const Counter = () => {
  const dispatch = useDispatch()
  const number = useSelector((state) => state.number)

  const incHandler = React.useCallback((delta = 1) => { dispatch(createActionInc(delta)) }, [dispatch])
  const decHandler = React.useCallback((delta = 1) => { dispatch(createActionDec(delta)) }, [dispatch])

  return (
    <div>
      <h1>
        {number}
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
