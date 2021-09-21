import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/Footer';
 import './CompanyProfile1.css';
const CompanyProfile1=()=>{
    return(
        <>
        <Header/>
        <section className="CompanyProfile-section">
            <div className="container">
                <div className="row">
                    <h2 className="text-center why-chooseus">WHY CHOOSE US</h2>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xs-6">
                            <div className="rounded-company-icon"data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                                <i class="fas fa-award" aria-hidden="true"></i>
                            </div>
                            <div className="company-profile-paragraph">
                                <h5 className="CompanyProfile-icon-heading" data-aos="fade-down">Always Available</h5>
                                <p className="CompanyProfile-para1" data-aos="fade-up">
                                We accept requests and phone calls 24/7 so you could resolve any problem whenever you need.
                                     Our &nbsp;team will be at your place…
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xs-6">
                        <div className="rounded-company-icon" data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                                <i class="fa fa-play" aria-hidden="true"></i>
                            </div>
                            <div className="company-profile-paragraph">
                            <h5 className="CompanyProfile-icon-heading" data-aos="fade-down">Qualified Agents</h5>
                                <p className="CompanyProfile-para1" data-aos="fade-up">
                                All our team members are high-qualified, educated and skilled agents.
                                     All of them are being trained according to the latest technologies.&nbsp;
                                </p>
                                
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xs-6">
                        <div className="rounded-company-icon" data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                                <i class="fas fa-hand-holding-usd" aria-hidden="true"></i>
                            </div>
                            <div className="company-profile-paragraph">
                            <h5 className="CompanyProfile-icon-heading" data-aos="fade-down">Fair Prices</h5>
                                <p className="CompanyProfile-para1" data-aos="fade-up">
                                Our prices are both fair and affordable for all people.
                                     We offer flexible discount system so you could use any service you need.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xs-6">
                            <div className="rounded-company-icon" data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                                <i class="fas fa-thumbs-up" aria-hidden="true"></i>
                            </div>
                            
                            <div className="company-profile-paragraph">
                            <h5 className="CompanyProfile-icon-heading" data-aos="fade-down">Best Offers</h5>
                                <p className="CompanyProfile-para1" data-aos="fade-up">
                                We provide discounts on the most popular services and on the season services,
                                 so you could definitely receive any help without delay.
                                </p>
                            </div>
                        </div>
                   
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default CompanyProfile1;