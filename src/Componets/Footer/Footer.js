import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../ButtonGroup/Button/button';
import ind from '../../img/india.png';
import us from '../../img/united-states.png';
import footenvolep from '../../img/footerenvelop1.jpg';
import './Footer.css';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Footer = () => {
  
    return (
        <>
      
        <section className="media-kit">
            <div className="container">
            <div className="row ">
                    <div className="col-sm-8 col-lg-8 col-md-8 text-light">
                        <h1 className="mediakithead">MEDIA KIT 2021</h1>
                        <p>By focusing on top of the funnel,we arm your sales and marketing team with larger audience of potential leads to keep you ahead in the game.</p>
                    </div>
                    <div className="col-sm-4 col-lg-4 col-md-4" style={{ paddingTop: '5%' }}>
                        <Button text="DOWNLOAD NOW" />
                    </div>
                </div>
            </div>
        </section>
        <section className="footer-cont">
            <div className="container">
                <div className="row footer-row" >
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
                    <div className="col-lg-3 col-md-6" style={{textAlign:'justify'}}>
                        <h5 className="text-light contactus-footer">CONTACT US</h5>
                        <i className="fa fa-map-marker footaddmapicon"> </i> 
                        <span className="footaddvascon">
                         402, Vascon Garnets Bay,Besides Hotel Four Points By Sheraton, Viman Nagar, Pune-411014.
                        </span>
                        <hr className="hr-linecontact" />
                        <img className="footemailimg" src={footenvolep} alt="No" />
                            <span className="Email-info" style={{color:'white'}}> sales@rdigs.com </span>
                        <hr className="hr-linecontact" />
                        <img className="footemailimg" src={footenvolep} alt="No" />  
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
                  
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h5 className="ourservices text-light">OUR SERVICES</h5>
                        <ul className="text-light services">
                            <li><i className="fa fa-chevron-right" id="arrow1"></i> <a className="services-webdevlopment" href="#">Web Design</a></li>
                            <hr className="hr-line" />
                            <li><i className="fa fa-chevron-right" id="arrow2"></i> <a className="services-webdevlopment" href="#">Web Development</a></li>
                            <hr className="hr-line" />
                             <li><i className="fa fa-chevron-right" id="arrow6"></i> <a className="services-webdevlopment" href="#">Demand Generation</a></li>
                            <hr className="hr-line" />
                            <li><i className="fa fa-chevron-right" id="arrow4"></i> <a className="services-webdevlopment" href="#">Graphic Design</a></li>
                            <hr className="hr-line" />
                            <li><i className="fa fa-chevron-right" id="arrow5"></i> <a className="services-webdevlopment" href="#">Lead generation</a></li>
                            <hr className="hr-line" />
                            <li><i className="fa fa-chevron-right" id="arrow3"></i> <a className="services-webdevlopment" href="#">Product Management</a></li>                            
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
            <section className="copyright-section">
            <div className="container">
                <div className="row d-flex justify-space-between">
                    <div className="col-lg-6 col-md-6 col-sm-6 me-md-auto text-center text-md-start">
                        <div id="copyright" className="clr copyright-center" role="contentinfo">
                            Copyright © 2021 | Designed by <Link to="#" style={{textDecoration:'none',color:'#30a6e9'}}>Lead-Tronics</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <span className="copyrighttxt">Privacy Policy</span>
                        <span className="copyrighttxt">Terms And Conditions</span>
                        <span className="copyrighttxt">Unsubscribe</span>
                        <span className="copyrighttxt">Services</span>
                        <span className="copyrighttxt">About</span>
                        <span className="copyrighttxt">Blog</span>
                        <span className="copyrighttxt">Contact</span>




                    </div>
                  
                    <div>
                        <a href="#" class="back-to-top d-flex align-items-center justify-content-center active">
                            <i class="fa fa-arrow-up"></i></a>
                    </div>

                </div>
            </div>
            </section>
        </section>
    </>
    )
}
export default Footer;
