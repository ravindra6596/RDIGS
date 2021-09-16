import React from 'react';
import './Companyslider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import client1 from '../../img/client/client1.jpg';
import client2 from '../../img/client/client2.jpg';
import client3 from '../../img/client/client3.jpg';
import client4 from '../../img/client/client4.jpg';
import client5 from '../../img/client/client5.jpg';
import client6 from '../../img/client/client6.jpg';
import client7 from '../../img/client/client7.jpg';
import client8 from '../../img/client/client8.jpg';
import client9 from '../../img/client/client9.jpg';
import client10 from '../../img/client/client10.jpg';
import client11 from '../../img/client/client11.jpg';
import client12 from '../../img/client/client12.jpg';
const Companyslider=()=>{  

        

 var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          draggable: true,
          swipeToSlide: true,
          touchMove: true
        }
      }
    ]
  };
    return(
        <>
          
        <section className="clients">
            <Slider {...settings}>

                <div className="image-clientslider">
                        <img src={client1} alt="Client"></img>
                </div>
                <div className="image-clientslider">
                        <img src={client2} alt="Client"></img>
                </div>
                <div className="image-clientslider">
                        <img src={client3} alt="Client"></img>
                </div>
                <div className="image-clientslider">
                        <img src={client4} alt="Client"></img>
                </div>
                <div className="image-clientslider">
                        <img src={client5} alt="Client"></img>
                </div>
                <div className="image-clientslider">
                        <img src={client6} alt="Client"></img>
                </div>
                <div className="image-clientslider">
                        <img src={client7} alt="Client"></img>
                </div>
                <div className="image-clientslider">
                        <img src={client8} alt="Client"></img>
                </div>
                <div className="image-clientslider">
                        <img src={client9} alt="Client"></img>
                </div>
                <div className="image-clientslider">
                        <img src={client10} alt="Client"></img>
                </div>
                <div className="image-clientslider">
                        <img src={client11} alt="Client"></img>
                </div>
                <div className="image-clientslider">
                        <img src={client12} alt="Client"></img>
                </div>
            </Slider>          
        </section>
        </>
    )
}
export default Companyslider;
