// action types - names for actions
export const INC = 'counter/INC'
export const DEC = 'counter/DEC'

// action creators - utilities to make actions easier
export const createActionInc = (delta) => ({
  type: INC,
  payload: delta
})
export const createActionDec = (delta) => ({
  type: DEC,
  payload: delta
})

// state that will be applied on `@@INIT` action
const initialState = {
  number: 0
}

// transform current state and action in new state
export const reducer = (state = initialState, action) => {
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

export default reducer
