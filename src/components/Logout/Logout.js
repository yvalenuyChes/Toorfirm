import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/auth'
import { NavLink } from 'react-router-dom'

const Logout = props => {
   return (
      <>
         <NavLink
            to="/"
            onClick={props.logout}
         >Выйти</NavLink>
      </>
   )
}

function mapDispatchToProps(dispatch) {
   return {
      logout: () => dispatch(logout())
   }
}

export default connect(null, mapDispatchToProps)(Logout)