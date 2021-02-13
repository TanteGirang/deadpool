import React from 'react'
import { Component } from 'react'
import Slider from "react-slick"; 
import omen from './assets/image/omen.png'
import raze from './assets/image/raze.png'
import viper from './assets/image/viper.png'
import reyna from './assets/image/reyna.png'
import phoenix from './assets/image/phoenix.png'
import yoru from './assets/image/yoru.png'




export default class Menu  extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
           
          };
        return (
            <div> 
                <h2> Pick Agent</h2>
               <Slider {...settings}>
                <>
                <img style={{width: "50%"}} src={omen}/>
                </>
                <>
                <img style={{width: "50%"}} src={raze}/>
                </>
                <>
                <img style={{width: "50%"}}src={viper}/>
                </>
                <>
                <img style={{width: "47%"}}src={phoenix}/>
                </>
                <>
                <img style={{width: "55%"}}src={yoru}/>
                </>
                <>
                <img style={{width: "55%"}}src={reyna}/>
                </>

                 
         
                </Slider>

            </div>
        )

    }
   
}
