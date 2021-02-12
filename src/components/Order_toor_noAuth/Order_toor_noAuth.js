import React from 'react'
import classes from './Order_toor_noAuth.module.scss'

const Order_toor_noAuth = () => {

   return (
      <>
         <div className={classes.order_toor_noAuth__body}>
            <span
               className={classes.order_toor_noAuth__text}
            >Чтобы заказать билет вы должны быть авторизированны</span>
         </div>
      </>
   )
}

export default Order_toor_noAuth