import React from 'react'
import './Kanada_card.css'
import classNames from 'classnames'

class Kanada_card extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         active: false
      }
   }


   render() {
      return (
         <div
            className={classNames({ card_wrapper: true, active: this.state.active })}
            onClick={() => this.setState({ active: !this.state.active })}
         >
            <div className="card">
               <div
                  className="front"
                  id={this.props.idCard}
               >
                  <div className="card__title">{this.props.title}</div>
               </div>
               <div className="back">
                  <div className="card__subtitle">{this.props.subtitle}</div>
               </div>
            </div>
         </div>
      )
   }

}

export default Kanada_card