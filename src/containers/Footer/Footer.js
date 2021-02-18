import React from 'react'
import classes from './Footer.module.scss'
import Accordion from '@material-ui/core/Accordion'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import play_market from '../../img/apps/play market.png'
import apple from '../../img/apps/apple.png'
import './Footer_accardion.css'
import './footer_social_links.css'

const Footer = () => {

   const pageWidth = window.innerWidth

   return (
      <footer className={classes.footer} id="info">
         <div className={classes.block_spoilers}>
            {
               pageWidth > 1000
                  ? <div className={classes.footer__toorists}>
                     <h3 className={classes.footer__title + ' ' + classes.tooristsTitle}>Туристам</h3>
                     <ul className={classes.footer__list + ' ' + classes.tooristsText}>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>Пользовательское соглашение</a>
                        </li>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>Правила покупки</a>
                        </li>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>Частые вопросы</a>
                        </li>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>Туры в рассрочку</a>
                        </li>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>Страхование</a>
                        </li>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>Правила распространения и <br />использования промокодов и/или купонов</a>
                        </li>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>Соглашение о конфиденциальности</a>
                        </li>
                     </ul>
                  </div>
                  : <Accordion>
                     <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                     >
                        Туристам
                     </AccordionSummary>
                     <AccordionDetails>
                        <ul className={classes.footer__list + ' ' + classes.tooristsText}>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>Пользовательское соглашение</a>
                           </li>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>Правила покупки</a>
                           </li>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>Частые вопросы</a>
                           </li>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>Туры в рассрочку</a>
                           </li>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>Страхование</a>
                           </li>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>Правила распространения и <br />использования промокодов и/или купонов</a>
                           </li>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>Соглашение о конфиденциальности</a>
                           </li>
                        </ul>
                     </AccordionDetails>
                  </Accordion>
            }
            {
               pageWidth > 1000
                  ? <div className={classes.footer__company}>
                     <h3 className={classes.footer__title + ' ' + classes.companyTitle}>О компании</h3>
                     <ul className={classes.footer__list + ' ' + classes.companyText}>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>Офисы продаж</a>
                        </li>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>О нас</a>
                        </li>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>Отзывы о нас</a>
                        </li>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>Наши партнеры</a>
                        </li>
                        <li className={classes.footer__links}>
                           <a href="##" className={classes.footer__link}>Контакты</a>
                        </li>
                     </ul>
                  </div>
                  : <Accordion>
                     <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                     >
                        О компании
                     </AccordionSummary>
                     <AccordionDetails>
                        <ul className={classes.footer__list + ' ' + classes.companyText}>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>Офисы продаж</a>
                           </li>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>О нас</a>
                           </li>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>Отзывы о нас</a>
                           </li>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>Наши партнеры</a>
                           </li>
                           <li className={classes.footer__links}>
                              <a href="##" className={classes.footer__link}>Контакты</a>
                           </li>
                        </ul>
                     </AccordionDetails>
                  </Accordion>
            }
         </div>
         <div className={classes.footer__app}>
            <div className={classes.footer__appTitle + ' ' + classes.footer__title}>Скачайте наше приложение</div>
            <div className={classes.appStore + ' ' + classes.app}>
               <img src={play_market} alt="" />
            </div>
            <div className={classes.appleStore + ' ' + classes.app}>
               <img src={apple} alt="" />
            </div>
         </div>
         <div className={classes.footer__etc}>
            <div className={classes.footer__logo}></div>
            <div className={classes.footer__text}>
               <h4> <span>Alice in Wonderland</span> — туристическая компания, <br /> которая сделает всё максимально быстро, <br /> удобно и качественно!</h4>
               <p>Наш офис находится по адресу: Г. Санкт-Петербург улица Бессовая, дом 13 корпус 6</p>
               <div className={classes.footer__telephone}>
                  <h3>+7 911 911 11 11</h3>
                  <h3>+7 922 922 22 22</h3>
               </div>
            </div>
            <div className={classes.footer__bottom}>
               <h3 className={classes.copyraiting}>2019-2020 © Alise in Wonderland</h3>
               <div className={classes.footer__socialLinks}>
                  <div className={classes.vk + ' ' + classes.socialLink}>
                     <a href="##"><i className="fab fa-vk"></i></a>
                  </div>
                  <div className={classes.twitter + ' ' + classes.socialLink}>
                     <a href="##"><i className="fa-twitter fab"></i></a>
                  </div>
                  <div className={classes.insta + ' ' + classes.sociaLlink}>
                     <a href="##"><i className="fab fa-instagram"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </footer >
   )
}

export default Footer