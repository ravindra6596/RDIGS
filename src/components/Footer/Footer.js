import React from 'react';
import us from '../../images/us.png';
import ind from '../../images/ind.png';
import './Footer.css';
const Footer=()=>{
    return(
        <section>
            <div className="container-fluid footer-cont">
                <div className="row media-kit">
                    <div className="col-sm-8 col-lg-8 col-md-8 text-light">
                    <h1>MEDIA KIT 2021</h1>
                    <p>By focusing on top of the funnel,we arm your sales and marketing team with larger audience of potential leads to keep you ahead in the game.</p>
                    </div>
                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <button className="btn btn primary download-button">
                         DOWNLOAD NOW
                        </button>
                    </div>
                   
                </div>
                <div className="row footer-row">
                    <div className="col-lg-2 col-md-6">
                      <h5 className="text-light contactus-footer">CONTACT US</h5>
						<span className="Address-info text-light">
							<i className="fa fa-map-marker text-light"> 402, Vascon Garnets Bay,Besides Hotel Four Points By Sheraton, Viman Nagar, Pune-411014.</i>
						</span>
                        <hr style={{width:' 100%', color:' white', height: '2px'}} />
						<span className="Email-info">
							<i className="fa fa-envelope text-light text-email"> sales@rdigs.com </i>    
						</span>
						<hr style={{width:' 100%', color:' white', height: '2px'}} />
						<span className="Email-info">
							<i className="fa fa-envelope text-light text-email"> hr@rdigs.com </i>   
						</span>
						<hr style={{width:' 100%', color:' white', height:'2px'}} />
						<span className="ind">
							{/* <img className="text-light img-ind" src={ind} alt="No"/> */}
                            <h6 className="text-light ind-no"> +91 848-404-0734 </h6>
						</span>
						<hr style={{width:' 100%', color:' white', height: '2px'}} />
						<span className="us">
							{/* <img className="text-light img-us" src={us} alt="No"/> */}
							<h6 className="text-light us-no"> +1 302-261-5312 </h6>
						</span>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4 className="ourservices text-light">Our Services</h4>
                        <ul className="text-light services">
                            <li><i className="fas fa-chevron-right" id="arrow1"></i> <a className="services-webdevlopment" href="#">Web Design</a></li>
                            <hr style={{width:' 100%', color:'black', height: '0px'}} />
                            <li><i className="fas fa-chevron-right" id="arrow2"></i> <a className="services-webdevlopment" href="#">Web Development</a></li>
                            <hr style={{width:' 100%', color:'black', height: '0px'}} />
                            <li><i className="fas fa-chevron-right" id="arrow3"></i> <a className="services-webdevlopment" href="#">Product Management</a></li>
                            <hr style={{width:' 100%', color:'black', height: '0px'}} />
                            <li><i className="fas fa-chevron-right" id="arrow4"></i> <a className="services-webdevlopment" href="#">Graphic Design</a></li>
                            <hr style={{width:' 100%', color:'black', height: '0px'}} />
                            <li><i className="fas fa-chevron-right" id="arrow5"></i> <a className="services-webdevlopment" href="#">Lead generation</a></li>
                            <hr style={{width:' 100%', color:'black', height: '0px'}} />
                            <li><i className="fas fa-chevron-right" id="arrow6"></i> <a className="services-webdevlopment" href="#">Demand Generation</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 text-light footer-newsletter">
                        <h4>Join Our Newsletter</h4>
                        <p>Subscribe to our newsletter to get latest updates.</p>
                        <form action="" method="post" className="footer-newsletter">
                        <input className="newsletter-input1" type="email" name="email"/><input type="submit" value="Subscribe" className="subscribe-footer"/>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footersec-RDInfo">
							<h5 className="footer-tit text-light">RD INFO GLOBAL SOLUTIONS</h5>
							<p><a href="#" className="underline"></a></p>
							<div className="sep"></div>
							<h6 className="text-footer-info text-light">RDIGS was founded in 2013 - formerly known as RD info Solutions.
							   bootstrapped - serving clients for B2C Lead Generation campaigns. 
							   It was not too late when we identified the need of lead generation activities for B2B Marketers.
							</h6>
						</div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4 copyright-container">
                <div className="row">
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
                        <a href="#" class="back-to-top d-flex align-items-center justify-content-center active">
                        <i class="fas fa-arrow-up"></i></a>
                </div>
            </div>
        </section>    
    )
}
export default Footer;
