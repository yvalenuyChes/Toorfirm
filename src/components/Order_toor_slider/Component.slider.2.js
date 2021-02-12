import React, { useState } from "react"
import Slider from "react-slick"
import classes from './Order_toor_slider.module.scss'
import Input_for_order_ticket from '../Input_for_order_ticket/Input_for_order_ticket'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style_buttons.css'
import axios from 'axios'



export default function SimpleSlider() {
   const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: classes.slider__wrapper,
      draggable: false
   }

   const submitHendler = event => {
      event.preventDefault()
   }

   const orderTicketHendlerBus = async event => {
      event.preventDefault()

      const ticketItem = {
         params: [
            // {country: countrieBus,
            { label: "Откуда отправляетесь", value: placeOfDepartureBus },
            { label: "Отбытие", value: departureBus },
            { label: "Прибытие", value: arrivedBus },
            { label: "Сколько взрослых", value: numberAdultBus },
            { label: "Сколько детей", value: nubmerKidsBus }
         ]
      }

      try {
         await axios.post("https://toorfimbase-default-rtdb.firebaseio.com/tickets.json", ticketItem)
         changePlaceOfDepartureBus('')
         changeDepartureBus('')
         changeArrivedBus('')
         changeNumberAdultBus('')
         changeNumberKidsBus('')
      } catch (e) {
         console.log(e)
      }
   }

   const showTickets = () => {
      return Object.keys()
   }

   //{showTickets()} это добавь в личный кабинет

   const [ticketList, addTicketOnList] = useState([])

   const [placeOfDepartureBus, changePlaceOfDepartureBus] = useState('')
   const [departureBus, changeDepartureBus] = useState('')
   const [arrivedBus, changeArrivedBus] = useState('')
   const [numberAdultBus, changeNumberAdultBus] = useState('')
   const [nubmerKidsBus, changeNumberKidsBus] = useState('')
   const [placeOfDepartureTrain, changeplaceOfDepartureTrain] = useState('')
   const [departureTrain, changeDepartureTrain] = useState('')
   const [arrivedTrain, changeArrivedTrain] = useState('')
   const [numberAdultTrain, changeNumberAdultTrain] = useState('')
   const [numberKidsTrain, changeNumberKidsTrain] = useState('')
   const [placeOfDeparturePlane, changePlaceOfDeparturePlane] = useState('')
   const [departurePlain, changeDeparturePlain] = useState('')
   const [arrivedPlane, changeArrivedPlane] = useState('')
   const [numberAdultPlane, changeNumberAdultPlane] = useState('')
   const [nubmerKidsPlane, changeNumberKidsPlane] = useState('')


   const onChangeHendlerPlaceOfDepartureBus = event => {
      const placeOfDepartureBus = changePlaceOfDepartureBus(prev => event.target.value)

   }

   const onChangeHendlerDepartureBus = event => {
      const departureBus = changeDepartureBus(prev => event.target.value)

   }

   const onChangeHendlerArrivedBus = event => {
      const arrivedBus = changeArrivedBus(prev => event.target.value)

   }

   const onChangeHendlerNumberAdultBus = event => {
      const numberAdultBus = changeNumberAdultBus(prev => event.target.value)

   }

   const onChangeHendlerNubmerKidsBus = event => {
      const nubmerKidsBus = changeNumberKidsBus(prev => event.target.value)

   }

   const onChangeHendlerPlaceOfDepartureTrain = event => {
      const placeOfDepartureTrain = changeplaceOfDepartureTrain(prev => event.target.value)

   }

   const onChangeHendlerDepartureTrain = event => {
      const departureTrain = changeDepartureTrain(prev => event.target.value)

   }

   const onChangeHendlerArrivedTrain = event => {
      const arrivedTrain = changeArrivedTrain(prev => event.target.value)

   }

   const onChangeHendlerNumberAdultTrain = event => {
      const numberAdultTrain = changeNumberAdultTrain(prev => event.target.value)

   }

   const onChangeHendlerNumberKidsTrain = event => {
      const numberKidsTrain = changeNumberKidsTrain(prev => event.target.value)

   }

   const onChangeHendlerPlaceOfDeparturePlane = event => {
      const placeOfDeparturePlane = changePlaceOfDeparturePlane(prev => event.target.value)

   }

   const onChangeHendlerDeparturePlain = event => {
      const departurePlain = changeDeparturePlain(prev => event.target.value)

   }

   const onChangeHendlerArrivedPlane = event => {
      const arrivedPlane = changeArrivedPlane(prev => event.target.value)

   }

   const onChangeHendlerNumberAdultPlane = event => {
      const numberAdultPlane = changeNumberAdultPlane(prev => event.target.value)

   }

   const onChangeHendlerNubmerKidsPlane = event => {
      const nubmerKidsPlane = changeNumberKidsPlane(prev => event.target.value)

   }

   return (
      // <div className={classes.bookAnim + ' ' + classes._animItems}>
      //    <div className={classes.bookAnim__content}>
      //       <div className={classes.orderToor__body}>
      <div className={classes.slider}>
         <Slider {...settings}>
            <form
               className={classes.slider__item + ' ' + classes.slider__itemFirst}
               onSubmit={submitHendler}
            >
               <div className={classes.container}>
                  <h2 className={classes.slider__title + ' ' + classes.titleBus}>Автобус</h2>
                  <div className={classes.selectCountrie}>
                     <label>Выберете место прибытия</label>
                     <select>
                        <option value="Нидерланды">Нидерланды</option>
                        <option value="Мальдивы">Мальдивы</option>
                        <option value="Венгрия">Венгрия</option>
                        <option value="Мрамрный каньон">Мрамрный каньон</option>
                        <option value="Нью-Йорк">Нью-Йорк</option>
                        <option value="Канада">Канада</option>
                     </select>
                  </div>
                  <div className={classes.orderToorBlock}>
                     <Input_for_order_ticket
                        onChange={onChangeHendlerPlaceOfDepartureBus}
                        value={placeOfDepartureBus}
                        type="text"
                        label="Откуда отправляетесь"
                     />
                     <Input_for_order_ticket
                        onChange={onChangeHendlerDepartureBus}
                        value={departureBus}
                        type="text"
                        label="Отбытие"
                     />
                     <Input_for_order_ticket
                        onChange={onChangeHendlerArrivedBus}
                        value={arrivedBus}
                        type="text"
                        label="Когда вернетесь"
                     />
                  </div>
                  <div className={classes.orderToorBlock}>
                     <Input_for_order_ticket
                        onChange={onChangeHendlerNumberAdultBus}
                        value={numberAdultBus}
                        type="text"
                        label="Сколько взрослых"
                     />
                     <Input_for_order_ticket
                        onChange={onChangeHendlerNubmerKidsBus}
                        value={nubmerKidsBus}
                        type="text"
                        label="Сколько детей"
                     />
                  </div>
                  <div className={classes.tabButton + ' ' + classes.orderButton}>
                     <button
                        onClick={orderTicketHendlerBus}
                     >Заказать билет</button>
                  </div>
               </div>
            </form>
            <form
               className={classes.slider__item + ' ' + classes.slider__itemSecond}
               onSubmit={submitHendler}
            >
               <div className={classes.container}>
                  <h2 className={classes.slider__title + ' ' + classes.slider__titleTrain}>Поезд</h2>
                  <div className={classes.selectCountrie}>
                     <label>Выберете место прибытия</label>
                     <select>
                        <option value="Нидерланды">Нидерланды</option>
                        <option value="Мальдивы">Мальдивы</option>
                        <option value="Венгрия">Венгрия</option>
                        <option value="Мрамрный каньон">Мрамрный каньон</option>
                        <option value="Нью-Йорк">Нью-Йорк</option>
                        <option value="Канада">Канада</option>
                     </select>
                  </div>
                  <div className={classes.orderToorBlock}>
                     <Input_for_order_ticket
                        onChange={onChangeHendlerPlaceOfDepartureTrain}
                        value={placeOfDepartureTrain}
                        label="Откуда отправляетесь"
                     />
                     <Input_for_order_ticket
                        onChange={onChangeHendlerDepartureTrain}
                        value={departureTrain}
                        label="Отбытие"
                     />
                     <Input_for_order_ticket
                        onChange={onChangeHendlerArrivedTrain}
                        value={arrivedTrain}
                        label="Когда вернетесь"
                     />
                  </div>
                  <div className={classes.orderToorBlock}>
                     <Input_for_order_ticket
                        onChange={onChangeHendlerNumberAdultTrain}
                        value={numberAdultTrain}
                        label="Сколько взрослых (18+)"
                     />
                     <Input_for_order_ticket
                        onChange={onChangeHendlerNumberKidsTrain}
                        value={numberKidsTrain}
                        label="Сколько детей (0-17)"
                     />
                  </div>
                  <div className={classes.tabButton + ' ' + classes.orderButton}><button>Заказать билет</button></div>
               </div>
            </form>
            <form
               className={classes.slider__item + ' ' + classes.slider__itemThird}
               onSubmit={submitHendler}
            >
               <div className={classes.container}>
                  <h2 className={classes.slider__title}>Самолет</h2>
                  <div className={classes.selectCountrie}>
                     <label>Выберете место прибытия</label>
                     <select>
                        <option value="Нидерланды">Нидерланды</option>
                        <option value="Мальдивы">Мальдивы</option>
                        <option value="Венгрия">Венгрия</option>
                        <option value="Мрамрный каньон">Мрамрный каньон</option>
                        <option value="Нью-Йорк">Нью-Йорк</option>
                        <option value="Канада">Канада</option>
                     </select>
                  </div>
                  <div className={classes.orderToorBlock}>
                     <Input_for_order_ticket
                        onChange={onChangeHendlerPlaceOfDeparturePlane}
                        value={placeOfDeparturePlane}
                        label="Откуда отправляетесь"
                     />
                     <Input_for_order_ticket
                        onChange={onChangeHendlerDeparturePlain}
                        value={departurePlain}
                        label="Отбытие"
                     />
                     <Input_for_order_ticket
                        onChange={onChangeHendlerArrivedPlane}
                        value={arrivedPlane}
                        label="Когда вернетесь"
                     />
                  </div>
                  <div className={classes.orderToorBlock}>
                     <Input_for_order_ticket
                        onChange={onChangeHendlerNumberAdultPlane}
                        value={numberAdultPlane}
                        label="Сколько взрослых (18+)"
                     />
                     <Input_for_order_ticket
                        onChange={onChangeHendlerNubmerKidsPlane}
                        value={nubmerKidsPlane}
                        label="Сколько детей (0-17)"
                     />
                  </div>
                  <div className={classes.tabButton + ' ' + classes.orderButton}><button>Заказать билет</button></div>
               </div>
            </form>
         </Slider>
      </div>
      //       </div>
      //    </div>
      // </div>

   )
}