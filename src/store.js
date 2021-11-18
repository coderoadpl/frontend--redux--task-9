import { createStore, combineReducers } from 'redux'

import counterReducer from './state/counter'
import todoReducer from './state/todo'

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer
})

// const rootInitialState = {
//   counter: counterReducer(undefined, { type: '@@INIT' }),
//   todo: todoReducer(undefined, { type: '@@INIT' })
// }

// const rootReducer = (state = rootInitialState, action) => {
//   return {
//     counter: counterReducer(state.counter, action),
//     todo: todoReducer(state.todo, action)
//   }
// }

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
