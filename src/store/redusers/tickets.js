import { FETCH_TICKETS_START, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_ERROR } from '../actions/actionTypes'

const initialState = {
   tickets: [],
   loading: false,
   error: null
}

export default function ticketsReduser(state = initialState, action) {


   switch (action.type) {
      case FETCH_TICKETS_START:
         return {
            ...state,
            loading: true
         }
      case FETCH_TICKETS_SUCCESS:
         return {
            ...state,
            loading: false,
            tickets: action.tickets
         }
      case FETCH_TICKETS_ERROR:
         return {
            ...state,
            loading: false,
            error: action.error
         }
      default:
         return state
   }
}