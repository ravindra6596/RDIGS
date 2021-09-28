import React, { useState,useRef,useEffect } from 'react';
import {Link} from 'react-router-dom';
import Button from '../ButtonGroup/Button/button';
import ind from '../../img/india.png';
import us from '../../img/united-states.png';
import footenvolep from '../../img/envelop.png';
import './Footer.css';
import Recaptcha from 'react-google-invisible-recaptcha';
import {Modal, ModalHeader, ModalBody,ModalFooter} from 'reactstrap';
import corporatedeskimg from '../../img/corporatedesk.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Footer = () => {
// variable for copy right get system date function
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
// function for corporate disk
      const toggle = () => setModal(!modal);
      const [modal, setModal] = useState(false);
      const recaptchaRef = React.createRef();
      let recaptcha = useRef(null);
  
      const onResolveddata = () => {
          console.log("a" + recaptcha.current.getResponse());
      }
// footer scrollup icons show state
const [upshowicon, setUpshow] = useState(false)

useEffect(() => {
  window.addEventListener("scroll", ()=>{
      if(window.pageYOffset >= 400){
        setUpshow(true)
      }else{
        setUpshow(false)
      }
  })
})

    return (
        <>
        <div>
            <a href="/home" style={{display: upshowicon ? "flex" :"none"}} className="back-to-top d-flex align-items-center justify-content-center active">
            <i class="fa fa-arrow-up"></i></a>
        </div>

      <section className="media-kit">
            <div className="container mediakit-cont">
            <div className="row">
                    <div className="col-sm-8 col-lg-8 col-md-8 text-light">
                        <div className="mediakitdiv">
                        <h1 className="mediakithead">CORPORATE DECK 2021</h1>
                        </div>
                        <div className="mediakit-para slide-right">
                           <p className="mediakit-para" data-aos="flip-left">By focusing on top of the funnel,we arm your sales and marketing team with larger audience of potential leads to keep you ahead in the game.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-lg-4 col-md-4" style={{ paddingTop: '5%' }}>
                        <Button text="DOWNLOAD NOW" fun={()=>setModal(true)}/>
                    </div>
                         <Modal isOpen={modal} toggle={toggle} className="custom-modal-style">
                            <ModalHeader className="modelhead11" toggle={toggle}></ModalHeader>
                                <ModalBody>
                                     <section className="Ppoup-model-COrporateDeck"> 
                                            <div className="container"> 
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                                        <img src={corporatedeskimg} alt="corporate-dec-img" className="corporate-img img-fluid"></img>
                                                    </div>
                                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                                        <h2 className="text-center">Corporate Deck 2021</h2>
                                                        <p>By focusing of the funnel, we arm your sales and marketing team with larger 
                                                            audience of potential leads to keep you ahead in the game.</p>
                                                            <form onSubmit={onResolveddata}>
                                                              <div className="corporate-form-in1">
                                                                <input type="text" class="form-corporateDeck-fname" id="Fname" placeholder="Enter First Name" 
                                                                />
                                                                <i className="fa fa-user"></i>
                                                                </div>
                                                                <div className="corporate-form-in2">
                                                                <input type="text" class="form-corporateDeck-lname" id="Lname" placeholder="Enter Last Name" 
                                                                />
                                                                <i className="fa fa-user"></i>
                                                                </div>
                                                                <div className="corporate-form-in3">
                                                                <input type="number" className="form-corporateDeck-number" id="Pnumber" placeholder="Enter Phone Number"
                                                                 maxLength="10"/>
                                                                <i className="fa fa-phone"></i>
                                                                </div>
                                                                <div className="corporate-form-in4">
                                                                <input type="text" className="form-corporateDeck-email" id="Email" placeholder="Enter Your Email"/>
                                                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                                                </div>
                                                                <div className="corporate-form-in5">
                                                                <input type="text" className="form-corporateDeck-company" id="Company" placeholder="Enter Company Name"/>
                                                                <i class="fa fa-address-book" aria-hidden="true"></i>
                                                                </div>
                                                                <Recaptcha
                                                                    badge="bottomleft"
                                                                    ref={recaptcha}
                                                                    onChange={onResolveddata}
                                                                    onExpired={() => {
                                                                        recaptcha.current.reset();
                                                                    }}
                                                                    sitekey="6Lf2AmsbAAAAAFdfecORFmrsAYstfD4DD4CTyHxE"
                                                                />
                                                            </form>
                                                    </div>
                                                </div> 
                                            </div>
                                    </section>
                                </ModalBody>
                                <ModalFooter>
                                <Link to ="#" className="corporate-submit">
                                    <button className="btn btn-primary downbtn text-light">Submit 
                                    </button>
                                </Link>
                                </ModalFooter>
                        </Modal>               
                </div>
            </div>
        </section>
        <section className="footer-cont">
            <div className="container">
                <div className="row footer-row" >
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                        <div className="footersec-RDInfo">
                            <h5 className="footer-tit text-light">RD INFO GLOBAL SOLUTIONS</h5>
                            <p><a href="#" className="underline"></a></p>
                            <div className="sep"></div>
                            <h6 className="text-footer-info text-light">RDIGS was founded in 2013 formerly known as RD info Solutions.
                                Bootstrapped serving clients for B2C Lead Generation campaigns.It was not too late when we identified the need of lead generation activities for B2B Marketers.
                            </h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  col-sm-6 col-xs-6" style={{textAlign:'justify'}}>
                        <h5 className="text-light contactus-footer">CONTACT US</h5>
                        <i className="fa fa-map-marker footaddmapicon"> </i> 
                        <span className="footaddvascon">
                         402, Vascon Garnets Bay,Besides Hotel Four Points By Sheraton, Viman Nagar, Pune-411014.
                        </span>
                        <div  style={{marginTop:'5px'}}> 
                            <img className="footemailimg" src={footenvolep} alt="No" />
                            <span className="Email-info" style={{color:'white'}}> sales@rdigs.com </span>
                        </div>
                        <div  style={{marginTop:'5px'}}> 
                        <img className="footemailimg" src={footenvolep} alt="No" />  
                        <span className="Email-info" style={{color:'white'}}> hr@rdigs.com  </span>
                        </div>
                        <div  style={{marginTop:'5px'}}> 
                        <span className="ind">
                            <img className="text-light img-us" src={ind} alt="No" />
                            <span className="Email-info" style={{color:'white'}}> +91 848-404-0734  </span>
                        </span>
                        </div>
                        <div style={{marginTop:'5px'}}> 
                        <span className="us">
                            <img className="text-light img-ind" src={us} alt="No" />
                            <span className="Email-info" style={{color:'white'}}> +1 302-261-5312</span>
                        </span>
                        </div>
                    </div>
                  
                    <div className="col-lg-3 col-md-6  col-sm-6 col-xs-6 footer-links">
                        <h5 className="ourservices text-light">OUR SERVICES</h5>
                        <ul className="text-light services">
                            <li> <a className="services-webdevlopment" href="#">Demand Generation</a></li>
                            <li><a className="services-webdevlopment" href="#">Lead generation</a></li>
                            <li> <a className="services-webdevlopment" href="#">Product Management</a></li>  
                            <li><a className="services-webdevlopment" href="#">Privacy Policy</a></li>   
                            <li> <a className="services-webdevlopment" href="#">Terms And Conditions</a></li>   
                            <li><a className="services-webdevlopment" href="#">Unsubscribe</a></li>                             
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6  col-sm-6 col-xs-6 text-light footer-newsletter">
                        <h5 style={{fontSize:'18px'}}>JOIN OUR NEWSLATTER</h5>
                        <p>Subscribe to our newsletter to get latest updates.</p>
                        <div class="inputs">
                            <input maxlength="60" class="webform__form-control" name="email" size="20" type="email" required="" placeholder="Enter Email Address"/>
                            <input type="submit" name="submit" id="eesubmit" class="EWF__subscribe" value="Subscribed"/>
                        </div>
                    </div>
                </div>
                
            </div>
            <section className="copyright-section">
            <div className="container">
                <div className="row d-flex justify-space-between">
                    <div className="col-lg-6 col-md-6 col-sm-6 me-md-auto text-center text-md-start">
                        <div id="copyright" className="clr copyright-center" role="contentinfo">
                            Copyright © <span>{getCurrentYear()}</span> <a href="https://rdigs.com/" target="_blank" className="footerlinkhover">RDIGS Info Global Solution</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div  className="copydesign" >
                           Designed by <a href="http://lead-tronics.com/" target="_blank" className="footerlinkhover">Lead-Tronics</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </section>
    </>
    )
}
export default Footer;
