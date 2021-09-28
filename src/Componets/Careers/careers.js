import React, { useState } from "react";
import './careers.css';
import Footer from "../Footer/Footer";
import CareerAccordian from "../Careers/CareerAccordian/careeraccordian";
import Headers from "../Header/header";
import career1 from "../../img/career/career-1.png";
import career2 from "../../img/career/career-2.png";
import career3 from "../../img/career/career-3.png";



const careers =()=>{
    return(
    <>
              <Headers/> 
            <section style={{marginTop:'8%'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h1 style={{color:'#30a6e9'}}>Benefits of joining our Team</h1>
                    </div>
                </div>

                <div className="row" style={{marginTop:'10%'}} data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-4 col-md-4 col-sm-4"  >
                        <div className="carbox" >
                        <img src={career1} className="carboximg"/>
                            <h4 data-aos="fade-right" data-aos-delay="200">Diversified Work Culture</h4>
                            <p data-aos="fade-right" data-aos-delay="200">We are all equals and respect individuality. We don't believe in hierarchy</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4"  >
                        <div className="carbox" >
                        <img src={career2} className="carboximg"/>
                            <h4 data-aos="fade-right" data-aos-delay="200" >Diversified Work Culture</h4>
                            <p  data-aos="fade-right" data-aos-delay="200">We are all equals and respect individuality. We don't believe in hierarchy</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4"  >
                        <div className="carbox" >
                        <img src={career3} className="carboximg"/>
                            <h4 data-aos="fade-right" data-aos-delay="200" >Diversified Work Culture</h4>
                            <p data-aos="fade-right" data-aos-delay="200">We are all equals and respect individuality. We don't believe in hierarchy</p>
                        </div>
                    </div> 
                </div>

                <div className="row" style={{marginTop:'10%',marginBottom:'5%'}} data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-4 col-md-4 col-sm-4"  >
                        <div className="carbox" >
                        <img src={career1} className="carboximg"/>
                        <h4 data-aos="fade-right" data-aos-delay="200" >Diversified Work Culture</h4>
                            <p  data-aos="fade-right" data-aos-delay="200">We are all equals and respect individuality. We don't believe in hierarchy</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4"  >
                        <div className="carbox" >
                        <img src={career2} className="carboximg"/>
                        <h4 data-aos="fade-right" data-aos-delay="200" >Diversified Work Culture</h4>
                            <p  data-aos="fade-right" data-aos-delay="200">We are all equals and respect individuality. We don't believe in hierarchy</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4"  >
                        <div className="carbox" >
                        <img src={career3} className="carboximg"/>
                        <h4 data-aos="fade-right" data-aos-delay="200" >Diversified Work Culture</h4>
                            <p  data-aos="fade-right" data-aos-delay="200">We are all equals and respect individuality. We don't believe in hierarchy</p>
                        </div>
                    </div> 
                </div>
            </div>
            </section>
        <CareerAccordian/>          
    <Footer/> 


</>
)
}
export default careers;

