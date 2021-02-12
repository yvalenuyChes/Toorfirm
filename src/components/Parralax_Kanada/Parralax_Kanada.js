import React, { Component } from 'react'
import './Parralax_Kanada.css'

class Parralax_Kanada extends Component {


   // componentDidMount() {
   //    window.addEventListener('scroll', this.hendleScrollParralax)
   // }

   // componentWillUnmount() {
   //    window.removeEventListener('scroll', this.hendleScrollParralax)
   // }

   // hendleScrollParralax = (e) => {
   //    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
   //    const scrolling = scrollTop,
   //    const windowWidth = document.outerWidth,
   //    const contentHeight = outerHeight(),
   //    const blockHeight = $('.paralax').outerHeight()

   //    const p = scrolling / contentHeight * 100;
   //    const p_b = scrolling / ontentHeight * 100;
   //    const o = 1 - 1 / 100 * p_b;
   //    const z_1 = 1 + (windowWidth / 10000 * p_b);

   //    this.mountainFog.css('transform', 'scale(' + z_1 + ')');

   //    this.mountainFog.css('opacity', o);

   //    //для фоновой горы(очень плавный скрол)
   //    var z_2 = 1 + (windowWidth / 5000000 * p);
   //    this.firstParralapMountain.css('transform', 'scale(' + z_2 + ')')

   //    var hr = windowWidth / 2000 * p_b;
   //    var z_3 = 1 + (windowWidth * 0.000005 * p_b);
   //    this.secondParralapMountain.css('transform', 'translate3d(' + hr + 'px, 0, 0) scale(' + z_3 + ')')

   //    //третья гора
   //    var hr_2 = windowWidth / 1500 * p_b;
   //    var z_4 = 1 + (windowWidth * 0.00001 * p_b);
   //    this.thirdParralapMountain.css('transform', 'translate3d(' + hr_2 + 'px, 0, 0) scale(' + z_4 + ')')

   //    return scrollTop


   // }

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