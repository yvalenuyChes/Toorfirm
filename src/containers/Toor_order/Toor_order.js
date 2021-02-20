import React, { Component } from 'react'
import classes from './Toor_order.module.scss'
import SimpleSlider from '../../components/Order_toor_slider/Component.slider.2'



class Toor_order extends Component {


   render() {
      return (
         <section className={classes.orderToor__body} id="toor__order">
            <div className={classes.orderToor} id="order">
               <div className={classes.orderToor__title + ' ' + classes.title}>Заказать билет</div>
               <SimpleSlider />
            </div>
         </section>
      )
   }

}


export default Toor_order

