import React from 'react'
import classes from './Kanada_nav.module.scss'
import { NavLink } from 'react-router-dom'

const Kanada_nav = () => {
   return (
      <nav className={classes.nav}>
         <div className={classes.navWrapper}>
            <div className={classes.nav__logo}>
            </div>
            <NavLink to="/" className={classes.linkToHome}>Главная</NavLink>
         </div>
      </nav>
   )
}

export default Kanada_nav