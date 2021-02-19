import React from 'react'
import classes from './About_company.module.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import planet from '../../img/why-img/planet.svg'
import tip from '../../img/why-img/tip.svg'
import hands from '../../img/why-img/hands.svg'



const About_company = () => {
   return (
      <section className={classes.about_company__body}>
         <div className={classes.why} id="whyUs">
            <h2 className={classes.why__title + ' ' + classes.title}>Почему именно наша фирма?</h2>
            <div className={classes.why__container}>
               <ScrollAnimation
                  animateIn='fadeInLeft'
                  className={classes.squeres}
               >
                  {/* <div className={classes.squeres}> */}
                  <div className={classes.why__item}>
                     <h3 className={classes.why__itemTitle}>Огромный выбор</h3>
                     <div className={classes.why__itemSubtitle}>Мы предоставляем широкий <br /> выбор стран и городов</div>
                     <div className={classes.why__itemImg + ' ' + classes.imgPlanet}>
                        <img src={planet} alt="" />
                     </div>
                  </div>
                  {/* </div> */}
               </ScrollAnimation>
               <ScrollAnimation
                  className={classes.squeres}
                  animateIn='fadeInRight'
               >
                  <div className={classes.why__item}>
                     <h3 className={classes.why__itemTitle}>Надежность</h3>
                     <div className={classes.why__itemSubtitle}>С нами вы будете уверенны в <br /> том, что прилетите куда надо</div>
                     <div className={classes.why__itemImg}>
                        <img src={tip} alt="" />
                     </div>
                  </div>
               </ScrollAnimation>
            </div>
            <div className={classes.why__container}>
               <ScrollAnimation
                  className={classes.squeres}
                  animateIn='fadeInLeft'
               >
                  <div className={classes.why__item}>
                     <h3 className={classes.why__itemTitle}>Работаем для вас</h3>
                     <div className={classes.why__itemSubtitle}>Поездка, отель, экскурсии - <br /> никаких переплат</div>
                     <div className={classes.why__itemImg}>
                        <img src={hands} alt="" />
                     </div>
                  </div>
               </ScrollAnimation>
               <ScrollAnimation
                  className={classes.squeres}
                  animateIn='fadeInRight'
               >
                  <div className={classes.why__item}>
                     <h3 className={classes.why__itemTitle}>Стабильность</h3>
                     <div className={classes.why__itemSubtitle}>Наша фирма находится на рынке <br /> уже не первый год</div>
                     <div className={classes.tenYears}>
                        <span>10 Лет</span>
                     </div>
                  </div>
               </ScrollAnimation>
            </div>
         </div>
      </section>
   )
}

export default About_company