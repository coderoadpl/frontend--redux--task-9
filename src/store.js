import { createStore, combineReducers } from 'redux'

import counterReducer from './state/counter'
import todoReducer from './state/todo'

const LOCAL_STORAGE_KEY = 'coderaod-redux-task-9'

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer
})

const preloadedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || undefined

export const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
})
