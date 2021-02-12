import React from 'react'
import './Input.css'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { onFocus, onBlur } from '../../store/actions/input_on_focus'

const Input = props => {

   const isFocus = props.onFocus

   const toggleOnFocusInput = classNames({
      'input__box': true,
      'focus': isFocus || props.value !== ''
   })
   return (
      <>
         <div
            className={toggleOnFocusInput}
         >
            <label className="label"> {props.label} </label>
            <input
               onChange={props.onChange}
               value={props.value}
               onFocus={props.onFocusInput}
               onBlur={props.onBlurInput}
               className="input"
               type={props.type}
               required={true}
            />
         </div>
      </>
   )

}

function mapStateToProps(state) {
   return {
      onFocus: state.onFocus,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      onFocusInput: () => dispatch(onFocus()),
      onBlurInput: () => dispatch(onBlur())
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input)