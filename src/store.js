const createStore = () => {
  const listeners = []
  let state = {
    number: 0
  }

  // transform current state and action in new state
  const reducer = (state, action) => {
    // own logic
    switch (action.type) {
      case 'INC':
        return {
          ...state,
          number: state.number + action.payload
        }
      case 'DEC':
        return {
          ...state,
          number: state.number - action.payload
        }
        // by default return the same state
      default:
        return state
    }
  }

  return {
    // accessing the state without possibility to mutate it directly
    getState: () => state,
    // accepting incoming actions
    dispatch: (action) => {
      const newState = reducer(state, action)
      const stateChanged = state !== newState
      if (stateChanged) {
        state = newState
        listeners.forEach((listener) => { listener() })
      }
    },
    // notifying about state changes
    subscribe: (listener) => {
      listeners.push(listener)
    }
  }
}

export const store = createStore()
