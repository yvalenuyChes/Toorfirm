import React from 'react'
import classes from './page_404.module.scss'
import { NavLink } from 'react-router-dom'

const Page_404 = () => {

   return (
      <section className={classes.page_404__wrapper}>
         <div className={classes.page_404__img}></div>
         <div className={classes.page_404__text}>
            <span>Страница не найдена либо в разработке</span>
         </div>
         <div className={classes.page_404__button}>
            <NavLink to={"/"}>Вернуться</NavLink>
         </div>
      </section>
   )
}

export default Page_404