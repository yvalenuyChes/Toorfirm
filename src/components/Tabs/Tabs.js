import React, { useState } from 'react'
import classes from './Tabs.module.scss'
import Input from '../newInput/Input'
import classNames from 'classnames'
import './Tabs.css'
import { connect } from 'react-redux'
import { auth } from '../../store/actions/auth'

const Tabs = props => {

   //!

   // const [userName, setUserName] = useState({
   //    value: '',
   //    // errorMessage: 'Введите корректный пароль',
   //    // valid: false,
   //    // touched: false,
   //    // validation: {
   //    //    required: true,
   //    //    minLength: 2
   //    // }
   // })



   const [firstActivateTab, toggleFirstActivateTab] = useState(true)
   const [secondActivateTab, toggleSecondActivateTab] = useState(false)


   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [userName, setUserName] = useState('')

   const onChangeHendlerEmail = event => {
      const emailValue = setEmail(prev => event.target.value)

   }

   const onChangeHendlerPassword = event => {
      const passwordValue = setPassword(prev => event.target.value)
   }

   const onChangeHendlerName = event => {
      const nameValue = setUserName(prev => event.target.value)
   }




   const toggleTab = () => {
      toggleFirstActivateTab(!firstActivateTab)
      toggleSecondActivateTab(!secondActivateTab)
   }

   const classesTab_1 = classNames({
      tab: true,
      active: firstActivateTab
   })

   const classesTab_2 = classNames({
      tab: true,
      active: secondActivateTab
   })

   const registerHendler = () => {
      props.auth(
         email,
         password,
         false
      )
   }

   const loginHendler = () => {
      props.auth(
         email,
         password,
         true
      )
   }

   const submitHendler = event => {
      event.preventDefault()
   }

   const authSuccess = token => {
      return {
         token
      }
   }


   return (
      <div className={classes.block_form}>
         <div className={classes.labels_container}>
            <label
               onClick={toggleTab}
               title="label-first"
               className={classesTab_1}
            >Авторизация</label>
            <label
               onClick={toggleTab}
               title="label-second"
               className={classesTab_2}
            >Регистрация</label>
         </div>
         {
            firstActivateTab
               ? <form
                  className={classes.tab_form}
                  onSubmit={submitHendler}
               >
                  <div className={classes.inputBox}>
                     <Input
                        onChange={onChangeHendlerEmail}
                        value={email}
                        label="Введите e-mail"
                        type="email"
                     />
                  </div>
                  <div className={classes.inputBox}>
                     <Input
                        onChange={onChangeHendlerPassword}
                        label="Введите пароль"
                        type="password"
                        value={password}
                     />
                  </div>
                  <button
                     className={classes.tab_button}
                     onClick={loginHendler}
                  >Войти</button>
                  <a href="##" className={classes.tab_link}>Я забыл e-mail или пароль</a>
               </form>
               : <form
                  className={classes.tab_form}
                  onSubmit={submitHendler}
               >
                  <div className={classes.inputBox}>
                     <Input
                        onChange={onChangeHendlerEmail}
                        label="Введите e-mail "
                        type="email"
                        value={email}
                     />
                  </div>
                  <div className={classes.inputBox}>
                     <Input
                        onChange={onChangeHendlerPassword}
                        label="Введите пароль"
                        type="password"
                        value={password}
                     />
                  </div>
                  {/* <div className={classes.inputBox}>
                     <Input
                        onChange={onChangeHendlerName}
                        label="Введите свое имя"
                        type="text"
                        value={userName.value}
                     />
                  </div> */}
                  <button
                     className={classes.tab_button}
                     onClick={registerHendler}
                  >Регистрация</button>
                  <div className={classes.recover}>
                     <input type="checkbox" id="ckbox" required={true} />
                     <label htmlFor="ckbox">Ознакомлен и принимаю <a href="#">условия регистрации</a></label>
                  </div>
               </form>
         }

      </div>
   )
}

function mapDispatchToProps(dispatch) {
   return {
      auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
   }
}

export default connect(null, mapDispatchToProps)(Tabs)
