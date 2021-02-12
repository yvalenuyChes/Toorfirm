import React from 'react'
import classes from './Header.module.scss'
import Scene from '../../components/Scene/Scene'
import header__squere from '../../img/squere-header.svg'
import wave from '../../img/wave.png'

const Header = () => {

   const pageWidth = window.innerWidth

   return (
      <header className={classes.header}>
         {
            pageWidth > 1000
               ? <>
                  <Scene />
                  <div className={classes.wave}>
                     <img src={wave} alt="wave" />
                  </div>
               </>
               : <div className={classes.fonPhone} />
         }
         <div className={classes.header__text}>
            <div className={classes.header__title}>
               <h2>Мы покажем тебе удивительный мир!
               <br />
               За пределами стен есть то, что может тебя поразить
               </h2>
            </div>
         </div>
         <div className={classes.header__squere}>
            <img src={header__squere} alt="white_squere" />
         </div>
      </header>
   )
}

export default Header