import React from 'react'
import classes from './Scene.module.scss'



const Scene = () => {


   return (
      <div className={classes.scene__body}>
         <div className={classes.layer_bg + ' ' + classes.layer}
         ></div>
         <div
            className={classes.layer_girl + ' ' + classes.layer}
         ></div>
      </div>
   )
}






export default Scene