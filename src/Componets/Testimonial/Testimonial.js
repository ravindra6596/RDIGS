import React from 'react';
import team from '../../img/testimonial/testimonial1.png';
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
    //     responsive: [
            
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             infinite: true,
    //             dots: true
    //           }
    //         },
    //         {
    //           breakpoint: 600,
    //           settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //           }
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //           }
              
    //         },
    //         {
    //             breakpoint: 320,
    //              settings: {
    //               slidesToShow: 1,
    //                slidesToScroll: 1
    //                 }    
    //         }
          
    // ]
      };
 

  
    return(
        <>

        <section className="ftco-section testimony-section ftco-no-pb" >
            <div className="testimonil-img">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section heading-section-white ftco-animate testimonial-heading">
                    <span className="subheading">Testimonial</span>
                    <h2 className=" testimonialkinds mb-3">Kinds Words From Clients</h2>
                    </div>
                </div> 
            </div>
        </section>
        <section className="card-top">
            <Slider {...settings} className="newtestislider">
             <div className="container">
                 <div className="row">
                 <div className="col">
                    <div className="  testimonial-card"> 
                        <div className="testitem" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >
                            <div className="testimony-wrap py-4">
                                <div className="icon d-flex align-items-center justify-content-center  item-i">
                                    <i className="fa fa-quote-left"/>
                                    </div>
                                    <div className="text">
                                        <p className="testcardtxt mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <div className="d-flex align-items-center">
                                        <img className="testuser-img" src={team} alt="user-img"></img>
                                            <div className="testproinfodiv pl-3">
                                                <p className="testproname">Roger Scott</p>
                                                <span className="testprodesi">Marketing Manager</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                            </div> 
                        </div> 
                    </div>   
                 </div>
             </div>
             <div className="container">
                 <div className="row">
                    <div className="col">
                        <div className="  testimonial-card"> 
                        <div className="item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <div className="testimony-wrap py-4">
                                <div className="icon d-flex align-items-center justify-content-center  item-i">
                                    <i className="fa fa-quote-left"/>
                                    </div>
                                    <div className="text">
                                        <p className="testcardtxt mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <div className="d-flex align-items-center">
                                        <img className="testuser-img" src={team} alt="user-img"></img>
                                            <div className="testproinfodiv pl-3">
                                                <p className="testproname">Roger Scott</p>
                                                <span className="testprodesi">Marketing Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container">
                 <div className="row">
                    <div className="col">
                        <div className="  testimonial-card"> 
                        <div className="item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <div className="testimony-wrap py-4">
                                <div className="icon d-flex align-items-center justify-content-center  item-i">
                                    <i className="fa fa-quote-left"/>
                                    </div>
                                    <div className="text">
                                        <p className="testcardtxt mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <div className="d-flex align-items-center">
                                        <img className="testuser-img" src={team} alt="user-img"></img>
                                            <div className="testproinfodiv pl-3">
                                                <p className="testproname">Roger Scott</p>
                                                <span className="testprodesi">Marketing Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
               
            </Slider>          
        </section>
       

      
    </> 
    )
}
export default Testimonial;