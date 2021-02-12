import React from 'react'
import classes from './Kanada_img.module.scss'


const Kanada_img = (props) => {



   return (
      <div className={classes.img_box + ' ' + props.sendClass}>
         <span className={classes.border_left_rig}></span>
         <span className={classes.border_top_bot}></span>
         <div className={classes.container_box}>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
         </div>
      </div>
   )
}

export default Kanada_img