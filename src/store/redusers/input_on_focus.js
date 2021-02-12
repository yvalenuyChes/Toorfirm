import { ON_FOCUS, ON_BLUR } from '../actions/actionTypes'

const initialState = null

export default function toggleOnFocus(state = initialState, action) {
   switch (action.type) {
      case ON_FOCUS:
         return {
            onFocus: ''
         }
      case ON_BLUR:
         return null
      default:
         return state
   }
}