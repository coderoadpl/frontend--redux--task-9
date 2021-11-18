import { createStore } from './createStore'

export const INC = 'INC'
export const DEC = 'DEC'

export const createActionInc = (delta) => ({
  type: INC,
  payload: delta
})
export const createActionDec = (delta) => ({
  type: DEC,
  payload: delta
})

const initialState = {
  number: 0
}

// transform current state and action in new state
const reducer = (state = initialState, action) => {
  // own logic
  switch (action.type) {
    case INC:
      return {
        ...state,
        number: state.number + action.payload
      }
    case DEC:
      return {
        ...state,
        number: state.number - action.payload
      }
      // by default return the same state
    default:
      return state
  }
}

export const store = createStore(reducer, initialState)
