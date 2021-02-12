import React, { useState } from 'react'
import './Main_page_nav.css'
import { NavLink } from 'react-router-dom'
import Modal from '@material-ui/core/Modal'
import Tabs from '../Tabs/Tabs'
import classNames from 'classnames'


const Main_nav = () => {

   const [mouseEnterMainPage, isMouseEnteredMain] = useState(false)
   const [popupOpen, isPopupOpen] = useState(false)
   const [openNav, toggleNavOpen] = useState(false)
   const pageWidth = window.innerWidth


   const handleOpen = () => {
      isPopupOpen(prev => !popupOpen)
   }

   const handleClose = () => {
      isPopupOpen(prev => !popupOpen)
   }

   const classesForNav = classNames({
      nav__burger: true,
      open: openNav
   })

   const classesForMenuList = classNames({
      nav__listItems: true,
      open: !openNav
   })



   if (pageWidth < 767) {
      openNav
         ? document.body.style.overflowY = "hidden"
         : document.body.style.overflowY = "scroll"
   }



   const body__popup = (
      <>
         <div className="popup__content">
            <span
               className={"popup__close" + ' ' + "close__popup"}
               onClick={handleClose}
            ></span>
            <div className="popup__title">Добро пожаловать</div>
            <div className="popup__main">
               <Tabs />
            </div>
         </div>
      </>
   )

   return (
      <nav className="nav">
         <div className="nav__wrapper">
            <div className="nav__logo" />
            <div
               className={classesForNav}
               onClick={() => toggleNavOpen(!openNav)}
            >
               <span />
            </div>
            <div className={classesForMenuList}>
               <div
                  className="nav__item"
                  onClick={() => isMouseEnteredMain(!mouseEnterMainPage)}
               >
                  <span>Главная</span>
                  {mouseEnterMainPage
                     ? <ul className="nav__list">
                        <li className="nav__list_item">
                           <a
                              href="#main__content"
                              className="nav__link"
                              onClick={() => { toggleNavOpen(!openNav) }}
                           >Предложения</a>
                        </li>
                        <li className="nav__list_item">
                           <a
                              onClick={() => toggleNavOpen(!openNav)}
                              href="#toor__order"
                              className="nav__link"
                           >Заказать билет</a>
                        </li>
                        <li className="nav__list_item">
                           <a
                              onClick={() => toggleNavOpen(!openNav)}
                              href="#whyUs"
                              className="nav__link"
                           >Преимущества фирмы</a>
                        </li>
                        <li className="nav__list_item">
                           <a
                              onClick={() => toggleNavOpen(!openNav)}
                              href="#info"
                              className="nav__link"
                           >Информация</a>
                        </li>
                        <li className="nav__list_item"></li>
                     </ul>
                     : null
                  }
               </div>
               <div
                  className="nav__item"
               >
                  <p
                     onClick={handleOpen}
                     id="last_item"
                  >Авторизация</p>
                  <Modal
                     open={popupOpen}
                     onClose={handleClose}
                     aria-labelledby="simple-modal-title"
                     aria-describedby="simple-modal-description"
                  >
                     {body__popup}
                  </Modal>
               </div>
            </div>
         </div>
      </nav>
   )
}


export default Main_nav
