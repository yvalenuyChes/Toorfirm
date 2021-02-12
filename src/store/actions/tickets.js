import axios from 'axios'
import { FETCH_TICKETS_START, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_ERROR } from '../actions/actionTypes'

export function fetchTickets() {
   return async dispatch => {
      dispatch(fetchTicketsStart())
      try {
         const response = await axios.get('https://toorfimbase-default-rtdb.firebaseio.com/tickets.json')
         const tickets = []
         const data = response.data
         Object.keys(data).forEach((key, index) => {
            tickets.push({
               id: key,
               name: `Билет номер ${index + 1}`,

            })
         })

         console.log(response.data);

         dispatch(fetchTicketsSuccess(tickets))

      } catch (e) {
         dispatch(fetchTicketsError(e))
      }
   }
}

export function fetchTicketsStart() {
   return {
      type: FETCH_TICKETS_START
   }
}

export function fetchTicketsSuccess(tickets) {
   return {
      type: FETCH_TICKETS_SUCCESS,
      tickets
   }
}

export function fetchTicketsError(e) {
   return {
      type: FETCH_TICKETS_ERROR,
      error: e
   }
}
