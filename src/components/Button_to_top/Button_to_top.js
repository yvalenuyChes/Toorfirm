import React from 'react'
import classes from './Button_to_top.module.scss'


class Button_to_top extends React.Component {

   render() {

      return (
         <div
            className={classes.scroll_up}
            ref={(scroll_up) => this.scroll_up = scroll_up}
            onClick={() => {
               window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
               })
            }}
         >
            <svg className={classes.scroll_up__svg} viewBox="-2 -2 52 52">
               <path
                  className={classes.scroll_up__path}
                  ref={(scroll_up__path) => this.scroll_up__path = scroll_up__path}
                  d="
               M24, 0
               a24, 24 0 0, 1 0, 48
               a24, 24 0 0, 1 0, -48
               "
               />
            </svg>
         </div>
      )
   }

}

export default Button_to_top
