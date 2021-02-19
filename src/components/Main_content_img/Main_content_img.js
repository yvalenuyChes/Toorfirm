import React from 'react'
import { NavLink } from 'react-router-dom'

const Content_img = (props) => {

   return (
      <div className={props.contentCountries__wrapper}>
         <div className={props.img__wrapper}>
            <div className={props.isLimited}>
               <div className={props.blockImg}>
                  <img src={props.imgSrc} className={props.img_countries} alt="toorfirmImg" />
                  <div className={props.block_text}>
                     <h2 className={props.content__title}>{props.title}</h2>
                     <div className={props.content__text}>
                        <div className={props.content__text_title}>Предлагаем Вам посетить...</div>
                        <div className={props.content__text_subtitleClass}>{props.content__text_subtitle}</div>
                     </div>
                  </div>
                  <NavLink
                     exact={false}
                     to={props.countrie}
                     className={props.countrieDesk}
                  >
                     Подробнее о стране
                  </NavLink>
               </div>
            </div>
         </div>
      </div>
   )

}

export default Content_img