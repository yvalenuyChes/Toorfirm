import { combineReducers } from 'redux'
import authReducer from './auth'
import onFocus from './input_on_focus'
import ticketsReduser from './tickets'

export default combineReducers({
   auth: authReducer,
   onFocus: onFocus,
   ticketsStore: ticketsReduser,
})