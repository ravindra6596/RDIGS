import React from 'react';
import './LeadGeneration.css';
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import Button from '../ButtonGroup/Button/button';
import Leadimg1 from '../../img/services/Leadimg1.png';

import v1 from '../../img/services/v1.png';
import v2 from '../../img/services/v2.jpg';
import v3 from '../../img/services/v3.png';
import v4 from '../../img/services/v4.png';
import v5 from '../../img/services/v5.png';
import service1 from '../../img/services/service1.jpg';
import service2 from '../../img/services/service2.jpg';
import service3 from '../../img/services/service3.jpg';
import service4 from '../../img/services/service4.jpg';
import service5 from '../../img/services/service5.jpg';
import service6 from '../../img/services/service6.jpg';
import service7 from '../../img/services/service7.jpg';
import service8 from '../../img/services/service8.jpg';
const LeadGeneration=()=>{
    return(
        <>
        <Header/>
         <section className="Lead-Generation-Sec">
            <div className="container">
                <div className="text-center Lead-heading-top">
                     <h3 className="text-center">Lead Generation</h3>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div class="lead-title aos-init aos-animate" data-aos="fade-right">
                            <h4 className="Lead-subhead" data-aos="fade-down">Identify your Target Accounts</h4>
                            <p class="lead-right" data-aos="fade-down">
                                We run account-based marketing (ABM) campaigns for targeting the accounts by professional 
                                demographics to drive more conversions. We generate target accounts and nurture them based
                                 on content, relevant communications and contextual marketing.
                            </p>
                                <Button text="Drive Excess Conversion" data-aos="fade-left"></Button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div class="text-center lg-img aos-init aos-animate" data-aos="fade-left">
                            <img src={Leadimg1} alt="Lead Generation" className="Lead-img1" data-aos="fade-down"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div class="text-center lg-img aos-init aos-animate" data-aos="fade-left">
                            <img src={Leadimg1} alt="Lead Generation" className="Lead-img1" data-aos="fade-up"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="lead-title aos-init aos-animate" data-aos="fade-up">
                            <h4 className="Lead-subhead" data-aos="fade-up">Reach your Target Audience</h4>
                            <p class="lead-right" data-aos="fade-up">
                                We run account-based marketing (ABM) campaigns for targeting the accounts 
                                by professional demographics to drive more conversions. We generate target 
                                accounts and nurture them based on content, relevant communications and contextual marketing.
                            </p>
                                <Button text="Drive Excess Conversion" data-aos="fade-left">Strengthen your ABM Strategy</Button>
                            <br></br>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
        {/* <section class="lead-section2">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 Lead-icon-col">   
                        <div class="section-content text-center">
                            <div class="row">
                                <div class="col-sm-6 col-md-4">
                                    <div class="border-2px bg-white pt-30 pb-30 mb-sm-30 aos-init aos-animate">
                                        <div class="icon-box iconbox-theme-colored mb-0">
                                            <a class="icon icon-dark icon-bordered icon-circled icon-border-effect effect-circled" href="#">
                                            <img src={v1} alt="Account Based Marketing" className="Lead-round-img" data-aos="fade-down"/>
                                            </a>
                                            <br></br>
                                            <p class="text-gray pr-15 pl-15 lead-img-p">Account Based Marketing</p>    
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4">
                                    <div class="border-2px bg-white pt-30 pb-30 mb-sm-30 aos-init aos-animate" >
                                            <div class="icon-box iconbox-theme-colored mb-0">
                                                <a class="icon icon-dark icon-bordered icon-circled icon-border-effect effect-circled" href="#">
                                                <img src={v2} alt="BANT Qualification" className="Lead-round-img" data-aos="fade-down"/>
                                                </a>
                                                <br></br>
                                                <p class="text-gray pr-15 pl-15 lead-img-p"> BANT Qualification</p>
                                            </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4">
                                    <div class="border-2px bg-white pt-30 pb-30 mb-sm-30 aos-init aos-animate">
                                            <div class="icon-box iconbox-theme-colored mb-0">
                                                <a class="icon icon-dark icon-bordered icon-circled icon-border-effect effect-circled" href="#">
                                                <img src={v3} alt="Market Qualified Leads" className="Lead-round-img" data-aos="fade-down"/>
                                                </a>
                                                <p class="text-gray pr-15 pl-15 lead-img-p">Market Qualified Leads</p>
                                            </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div class="col-sm-6 col-md-6 col-lg-6">
                                    <div class="border-2px bg-white pt-30 pb-30 mb-sm-30 aos-init aos-animate">
                                        <div class="icon-box iconbox-theme-colored mb-0 lead-img-m">
                                            <a class="icon icon-dark icon-bordered icon-circled icon-border-effect effect-circled" href="#">
                                            </a>
                                        <center>
                                            <a class="icon icon-dark icon-bordered icon-circled icon-border-effect effect-circled" href="#">
                                                <img src={v4} alt="Highly Qualified Leads" className="Lead-round-img2" data-aos="fade-up"/>
                                            </a> 
                                            <p class="text-gray pr-15 pl-15 lead-img-p2">Highly Qualified Leads</p>
                                        </center>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6 col-lg-6">
                                    <div class="border-2px bg-white pt-30 pb-30 mb-sm-30 aos-init aos-animate">
                                        <div class="icon-box iconbox-theme-colored mb-0">
                                            <a class="icon icon-dark icon-bordered icon-circled icon-border-effect effect-circled" href="#">
                                            </a>
                                            <center>
                                                    <a class="icon icon-dark icon-bordered icon-circled icon-border-effect effect-circled" href="#">
                                                    <img src={v5} alt="Sales Qualified Leads" className="Lead-round-img3" data-aos="fade-up"/>
                                                    </a>
                                                    <p class="text-gray pr-15 pl-15 lead-img-p3">Sales Qualified Leads</p>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                          </div>
                       <div>        
                    </div>   
                  </div>
                </div>
            </div>  
        </section> */}
        <section class="section-services text-center">
        <div class="container">
          <h3 className="heading-services" data-aos="fade-down">Services</h3>
          <p>
              <span class="text-width-1"data-aos="fade-down">As the most qualified accounting services provider, we offer an amazing variety of financial solutions designed to help you solve all bookkeeping issues, no matter big or small.
              </span>
          </p>
          <div class="row row-50 row-xxl-70 offset-top-2 services-row">
            <div class="col-sm-6 col-lg-3">
                    <img class="thumbnail-light-image" src={service1} alt="" />
                    <h5 class="thumbnail-light-title" data-aos="fade-left">Cash Management</h5>
            </div>
            <div class="col-sm-6 col-lg-3">
                    <img class="thumbnail-light-image" src={service2} alt="" />
                    <h5 class="thumbnail-light-title" data-aos="fade-left">Payments</h5>
            </div>
            <div class="col-sm-6 col-lg-3">
                    <img class="thumbnail-light-image" src={service3} alt="" />
                    <h5 class="thumbnail-light-title" data-aos="fade-left">M &amp; A Assistance</h5>
            </div>
            <div class="col-sm-6 col-lg-3">
                    <img class="thumbnail-light-image" src={service4} alt="" />
                    <h5 class="thumbnail-light-title" data-aos="fade-left">Local Expertise</h5>
            </div>
        <div class="row row-50 row-xxl-70 offset-top-2 services-row">
                <div class="col-sm-6 col-lg-3">
                        <img class="thumbnail-light-image" src={service5} alt="" />
                        <h5 class="thumbnail-light-title" data-aos="fade-left">Video &amp; Photo Production</h5> 
                </div>
                <div class="col-sm-6 col-lg-3">  
                        <img class="thumbnail-light-image" src={service6} alt=""/>
                        <h5 class="thumbnail-light-title" data-aos="fade-left">Graphic designed</h5>
                
                </div>
                <div class="col-sm-6 col-lg-3">
                        <img class="thumbnail-light-image" src={service7} alt=""/>
                        <h5 class="thumbnail-light-title" data-aos="fade-left">Strategy</h5>
                </div>
                <div class="col-sm-6 col-lg-3">
                        <img class="thumbnail-light-image" src={service8} alt=""/>
                        <h5 class="thumbnail-light-title" data-aos="fade-left">Branding</h5>
                </div>
            </div>
            <div class="row row-50 row-xxl-70 offset-top-2 services-row">
            </div>
          </div>
        </div>
      </section>
      <Footer/>
        </>
    )
}
export default LeadGeneration;