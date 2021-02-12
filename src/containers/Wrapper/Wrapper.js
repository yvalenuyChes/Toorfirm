import React from 'react'
import classes from './Wrapper.module.scss'


class Wrapper extends React.Component {
   render() {
      return (
         <section className={classes.wrapper}>
            <main>
               {this.props.children}
            </main>
         </section>
      )
   }
}

export default Wrapper