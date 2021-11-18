export const createStore = (reducer) => {
  const listeners = []
  let state

  const store = {
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

  store.dispatch({ type: '@@INIT' })

  return store
}
