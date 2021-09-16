import React from 'react';
import Button from '../ButtonGroup/Button/button';
import ind from '../../img/india.png';
import us from '../../img/united-states.png';
import './Footer.css';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Footer = () => {
  
    return (
        <>
      
        <section>
            <div className="container-fluid footer-cont">
                <div className="row media-kit">
                    <div className="col-sm-8 col-lg-8 col-md-8 text-light">
                        <h1>MEDIA KIT 2021</h1>
                        <p>By focusing on top of the funnel,we arm your sales and marketing team with larger audience of potential leads to keep you ahead in the game.</p>
                    </div>
                    <div className="col-sm-4 col-lg-4 col-md-4" style={{ paddingTop: '5%' }}>
                        <Button text="DOWNLOAD NOW" />
                    </div>

                </div>
                <div className="row footer-row" >
                    <div className="col-lg-3 col-md-6" style={{textAlign:'justify'}}>
                        <h5 className="text-light contactus-footer">CONTACT US</h5>
                        <i className="fa fa-map-marker footaddmapicon"> </i> 
                        <span className="footaddvascon">
                         402, Vascon Garnets Bay,Besides Hotel Four Points By Sheraton, Viman Nagar, Pune-411014.
                        </span>
                        <hr className="hr-linecontact" />
                        <i className="fa fa-envelope text-light text-email"></i>
                            <span className="Email-info" style={{color:'white'}}> sales@rdigs.com </span>
                        <hr className="hr-linecontact" />
                        <i className="fa fa-envelope text-light text-email"></i>  
                        <span className="Email-info" style={{color:'white'}}> hr@rdigs.com  </span>
                        <hr className="hr-linecontact" />
                        <span className="ind">
                            <img className="text-light img-us" src={ind} alt="No" />
                            <span className="Email-info" style={{color:'white'}}> +91 848-404-0734  </span>
                        </span>
                        <hr className="hr-linecontact" />
                        <span className="us">
                            <img className="text-light img-ind" src={us} alt="No" />
                            <span className="Email-info" style={{color:'white'}}> +1 302-261-5312</span>
                        </span>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footersec-RDInfo">
                            <h5 className="footer-tit text-light">RD INFO GLOBAL SOLUTIONS</h5>
                            <p><a href="#" className="underline"></a></p>
                            <div className="sep"></div>
                            <h6 className="text-footer-info text-light">RDIGS was founded in 2013 formerly known as RD info Solutions.
                                Bootstrapped serving clients for B2C Lead Generation campaigns.It was not too late when we identified the need of lead generation activities for B2B Marketers.
                            </h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h5 className="ourservices text-light">OUR SERVICES</h5>
                        <ul className="text-light services">
                            <li><i className="fa fa-chevron-right" id="arrow1"></i> <a className="services-webdevlopment" href="#">Web Design</a></li>
                            <hr className="hr-line" />
                            <li><i className="fa fa-chevron-right" id="arrow2"></i> <a className="services-webdevlopment" href="#">Web Development</a></li>
                            <hr className="hr-line" />
                            <li><i className="fa fa-chevron-right" id="arrow3"></i> <a className="services-webdevlopment" href="#">Product Management</a></li>
                            <hr className="hr-line" />
                            <li><i className="fa fa-chevron-right" id="arrow4"></i> <a className="services-webdevlopment" href="#">Graphic Design</a></li>
                            <hr className="hr-line" />
                            <li><i className="fa fa-chevron-right" id="arrow5"></i> <a className="services-webdevlopment" href="#">Lead generation</a></li>
                            <hr className="hr-line" />
                            <li><i className="fa fa-chevron-right" id="arrow6"></i> <a className="services-webdevlopment" href="#">Demand Generation</a></li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 text-light footer-newsletter">
                        <h5>JOIN OUR NEWSLATTER</h5>
                        <p>Subscribe to our newsletter to get latest updates.</p>
                        <form action="#" method="" className="footer-newsletter">
                            <input className="newsletter-input1" type="email" name="email" />
                            <input type="submit"  value="SUBSCRIBE" className="subscribe-footer" />
                        </form>
                    </div>
                
                </div>
            </div>
            <div className="container-fluid py-4 copyright-container">
                <div className="row d-flex justify-space-between">
                    <div className="me-md-auto text-center text-md-start">
                        <div id="copyright" className="clr text-center copyright-center" role="contentinfo">
                            Copyright © 2021 | Designed by <a href="http://lead-tronics.com/" target="_blank">RD Info</a>
                        </div>
                    </div>
                    <div className="social-links-footer text-center text-md-end pt-3 pt-md-0">
                        <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="fa fa-skype"></i></a>
                        <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div>
                        <a href="#" class="back-to-top d-flex align-items-center justify-content-center active">
                            <i class="fa fa-arrow-up"></i></a>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
export default Footer;
