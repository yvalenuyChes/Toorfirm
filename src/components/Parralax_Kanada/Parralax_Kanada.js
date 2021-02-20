import React, { Component } from 'react'
import './Parralax_Kanada.css'

class Parralax_Kanada extends Component {
   render() {
      return (
         <div className="page">
            <div className="parralax">
               <div
                  className={"paralax__montain" + ' ' + "paralax__montain_1"}
                  ref={(firstParralapMountain) => this.firstParralapMountain = firstParralapMountain}
               ></div>
               <div
                  className={"paralax__montain" + ' ' + "paralax__montain_2"}
                  ref={(secondParralapMountain) => this.secondParralapMountain = secondParralapMountain}
               ></div>
               <div
                  className={"paralax__montain" + ' ' + "paralax__montain_3"}
                  ref={(thirdParralapMountain) => this.thirdParralapMountain = thirdParralapMountain}
               ></div>
               <div
                  className={"paralax__montain" + ' ' + "paralax__fog"}
                  ref={(mountainFog) => this.mountainFog = mountainFog}
               ></div>
            </div>
         </div>
      )
   }

}

export default Parralax_Kanada