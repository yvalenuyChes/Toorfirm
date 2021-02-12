import React, { useEffect, useState } from 'react'
import classes from './Main_page.module.scss'
import Header from '../../containers/Header/Header'
import Main_content from '../../containers/Main_content/Main_content'
import Toor_order from '../../containers/Toor_order/Toor_order'
import About_company from '../../containers/About_company/About_company'
import Footer from '../../containers/Footer/Footer'
import Main_nav from '../../components/Main_page_nav_noAuth/Main_page_nav_noAuth'
import Main_page_nav_auth from '../../components/Main_page_nav_auth/Main_page_nav_auth'
import Button_to_top, { updateDashoffset } from '../../components/Button_to_top/Button_to_top'
import Order_toor_noAuth from '../../components/Order_toor_noAuth/Order_toor_noAuth'
import { connect } from 'react-redux'
import { autoLogin } from '../../store/actions/auth'


const Main_page = props => {

   const [scrolling, toggleScrolling] = useState(false)
   let [lastScrolling, toggleLastScrolling] = useState(0)
   const [directionDown, toggleDirectionDown] = useState(false)
   const getTop = () => window.pageYOffset || document.documentElement.scrollTop
   const offset = 100

   useEffect(() => {
      props.autoLogin()
      window.addEventListener('scroll', hendleScroll)
      return () => {
         window.removeEventListener('scroll', hendleScroll)
      }
   })

   const hendleScroll = () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop

      if (scrollTop > lastScrolling && !directionDown) {
         toggleScrolling(true)
         toggleDirectionDown(true)
      } else if (scrollTop < lastScrolling) {
         toggleScrolling(false)
         toggleDirectionDown(false)
      }
      toggleLastScrolling(lastScrolling = scrollTop)
   }

   let build = (
      <>
         <Header />
         {
            scrolling
               ? null
               : <Main_nav />
         }
         {
            getTop() > offset
               ? <Button_to_top />
               : null
         }
         <Main_content />
         <Order_toor_noAuth />
         <About_company />
         <Footer />
      </>
   )

   if (props.isAuthenticated) {
      build = (
         <>
            <Header />
            {
               scrolling
                  ? null
                  : <Main_page_nav_auth />
            }
            {
               getTop() > offset
                  ? <Button_to_top />
                  : null
            }
            <Main_content />
            <Toor_order />
            <About_company />
            <Footer />
         </>
      )
   }




   return (
      <section className={classes.wrapper}>
         { build}
      </section>
   )
}


function mapDispatchToProps(dispatch) {
   return {
      autoLogin: () => dispatch(autoLogin())
   }
}

function mapStateToProps(state) {
   return {
      isAuthenticated: !!state.auth.token
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main_page)