import { createStore } from 'redux'

import { reducer } from './state/counter'

export const store = createStore(reducer)
