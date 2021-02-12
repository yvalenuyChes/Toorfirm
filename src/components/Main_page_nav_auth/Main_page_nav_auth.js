import React, { useState } from 'react'
import './Main_page_nav_auth.css'
import Logout from '../Logout/Logout'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

const Main_page_nav_auth = () => {

   const [mouseEnterMainPage, isMouseEnteredMain] = useState(false)
   const [openNav, toggleNavOpen] = useState(false)
   const pageWidth = window.innerWidth


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
                  <span className="nav__link">Главная</span>
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
                              href="#toor__order"
                              className="nav__link"
                              onClick={() => { toggleNavOpen(!openNav) }}
                           >Заказать билет</a>
                        </li>
                        <li className="nav__list_item">
                           <a
                              href="#whyUs"
                              className="nav__link"
                              onClick={() => { toggleNavOpen(!openNav) }}
                           >Преимущества фирмы</a>
                        </li>
                        <li className="nav__list_item">
                           <a
                              href="#info"
                              className="nav__link"
                              onClick={() => { toggleNavOpen(!openNav) }}
                           >Информация</a>
                        </li>
                        <li className="nav__list_item"></li>
                     </ul>
                     : null
                  }
               </div>
               <div className="nav__item">
                  <NavLink
                     to="/ordered_tikets"
                     className="nav__link"
                  >Купленные билеты</NavLink>
               </div>
               <div
                  className="nav__item"
               >

                  <Logout />
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Main_page_nav_auth