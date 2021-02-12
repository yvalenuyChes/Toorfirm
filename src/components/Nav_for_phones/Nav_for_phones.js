import React from 'react'
import classes from './Nav_for_phones.scss'


const Nav_for_phones = () => {


   return (
      <nav>
         <div className={classes.nav__body}>
            <a href="" className={classes.nav__logo}>
               <img src="img/logo-top.png" alt="" />
            </a>
            <div className={nav__burger + ' ' + close}>
               <span />
            </div>
            <div className={classes.nav__menu + ' ' + classes.close}>
               <ul className={classes.nav__list + ' ' + classes.menu__list}>
                  <li className={classes.mainLi}><a href="#header" className={classes.nav__link + ' ' + classes.menu__link}>Главная</a>
                     <span className={classes.menu__arrow + ' ' + classes.arrow} />
                     <ul className={classes.sub_menu__list + ' ' + classes.sub_menu__listMain}>
                        <li>
                           <li>
                              <a href="#content" className={classes.sub_menu__link}>Предложения</a>
                           </li>
                           <li>
                              <a href="#order" className={classes.sub_menu__link}>Заказать билет</a>
                           </li>
                           <li>
                              <a href="#whyUs" className={classes.sub_menu__link}>Преимущества фирмы</a>
                           </li>
                           <li>
                              <a href="#info" className={classes.sub_menu__link + ' ' + classes.closeNavLink}>Информация</a>
                           </li>
                        </li>
                     </ul>
                  </li>
                  <li className={classes.mainLi}><a href="" className={classes.nav__link}>Выбор стран</a>
                     <span className={classes.menu__arrow + ' ' + classes.arrow} />
                     <ul className={classes.sub_menu__list + ' ' + classes.sub_menu__listSecondary}>
                        <li>
                           <a href="" className={classes.sub_menu__link}>Нидерланды</a>
                        </li>
                        <li>
                           <a href="" className={classes.sub_menu__link}>Мальдивы</a>
                        </li>
                        <li>
                           <a href="" className={classes.sub_menu__link}>Венгрия</a>
                        </li>
                        <li>
                           <a href="" className={classes.sub_menu__link}>Мраморный каньон</a>
                        </li>
                        <li>
                           <a href="" className={classes.sub_menu__link}>Нью-Йорк</a>
                        </li>
                        <li>
                           <a href="countries/kanada/index.html" className={sub_menu__link}>Канада</a>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default Nav_for_phones