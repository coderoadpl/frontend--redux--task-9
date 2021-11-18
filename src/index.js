import ReactDOM from 'react-dom'
import React from 'react'

import { Provider } from 'react-redux'

import ToDo from './ToDo'

import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <ToDo />
  </Provider>,
  document.getElementById('root')
)
