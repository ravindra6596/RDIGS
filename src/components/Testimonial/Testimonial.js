import React from 'react';
import Banrs from '../../images/Banrs.jpg';
import team from '../../images/team.jpg';
import './Testimonial.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial=()=>{
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
        <section className="ftco-section testimony-section ftco-no-pb" >
            <div class="overlay"></div>
            <div class="testimonil-img"></div>
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-md-7 text-center heading-section heading-section-white ftco-animate testimonial-heading">
                    <span class="subheading">Testimonial</span>
                    <h2 class="mb-3">Kinds Words From Clients</h2>
                    </div>
                </div> 
            </div>
    <div className="container card-leftright">       
        <div className="row card-top"> 
        <Slider {...settings}> 
        <div className="col-sm-4 col-md-12 col-lg-12 testimonial-card">  
            <div class="item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div class="testimony-wrap py-4">
                    <div class="icon d-flex align-items-center justify-content-center item-i"><i class="fa fa-quote-left"/></div>
                        <div class="text">
                            <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div class="d-flex align-items-center">
                              <img className="user-img" src={team} alt="user-img"></img>
                                <div class="pl-3">
                                    <p class="name">Roger Scott</p>
                                    <span class="position">Marketing Manager</span>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="col-sm-4 testimonial-card"> 
            <div class="item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div class="testimony-wrap py-4">
                    <div class="icon d-flex align-items-center justify-content-center  item-i"><i class="fa fa-quote-left"/></div>
                        <div class="text">
                            <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div class="d-flex align-items-center">
                              <img className="user-img" src={team} alt="user-img"></img>
                                <div class="pl-3">
                                    <p class="name">Roger Scott</p>
                                    <span class="position">Marketing Manager</span>
                                </div>
                              </div>
                            </div>
                        </div>
                 </div>
            </div>
            <div className="col-sm-4 testimonial-card"> 
            <div class="item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div class="testimony-wrap py-4">
                    <div class="icon d-flex align-items-center justify-content-center  item-i">
                        <i class="fa fa-quote-left"/>
                        </div>
                        <div class="text">
                            <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div class="d-flex align-items-center">
                            <img className="user-img" src={team} alt="user-img"></img>
                                <div class="pl-3">
                                    <p class="name">Roger Scott</p>
                                    <span class="position">Marketing Manager</span>
                                </div>
                              </div>
                            </div>
                        </div>
                </div> 
            </div> 
             </Slider>
           
            {/* <div className="col-sm-3 mx-2 testimonial-card"> 
            <div class="item">
                <div class="testimony-wrap py-4">
                    <div class="icon d-flex align-items-center justify-content-center  item-i"><i class="fa fa-quote-left"/></div>
                        <div class="text">
                            <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div class="d-flex align-items-center">
                              <img className="user-img" src={team} alt="user-img"></img>
                                <div class="pl-3">
                                    <p class="name">Roger Scott</p>
                                    <span class="position">Marketing Manager</span>
                                </div>
                              </div>
                            </div>
                        </div>
                </div> 
            </div> */}
         </div>
    </div>
</section>
      
    )
}
export default Testimonial;