import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import {
  userDetailsReducer,
} from './reducers/userReducers'

const rootReducer = combineReducers({
  userDetails: userDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export type State = ReturnType<typeof rootReducer> 

export default store
