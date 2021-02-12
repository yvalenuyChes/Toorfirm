import { ON_FOCUS, ON_BLUR } from './actionTypes'


export function onFocus() {
   return {
      type: ON_FOCUS
   }
}

export function onBlur() {
   return {
      type: ON_BLUR
   }
}