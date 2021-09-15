import React, { useState } from "react";
import Header from "../Header/header";
import './contact.css';



const contact =()=>{
    return(
    <>
        <Header/>
        <section className="contactfirst-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6"> 
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6" style={{backgroundColor:'white'}}>
                        <h2 className="contgetin"  data-aos="fade-up">Get in Touch</h2>
                        <form>
                            <div class="form-group">
                                <label className="contactlabel">Your Name</label>
                                <input type="text" class="form-controlall" aria-describedby="emailHelp" placeholder="Enter Your Name"/>
                            </div>
                            <div class="form-group">
                                <label  className="contactlabel">Your Email</label>
                                <input type="email" class="form-controlall" aria-describedby="emailHelp" placeholder="Enter Your Email"/>
                            </div>
                            <div class="form-group">
                                <label className="contactlabel">Your Phone</label>
                                <input type="number" class="form-controlall" aria-describedby="emailHelp" placeholder="Enter Your Phone"/>
                            </div>
                            <div className="row" style={{padding:'4%'}}>
                                <div className="col"> <button type="submit" class="btn btn btnclear">CLEAR</button></div>
                                <div className="col btngetintouch"> <button type="submit" class="btn btn-primary">GET IN TOUCH</button></div>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>        
        </section>
            <div className="container-fluid" style={{marginTop:'3%'}}>
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6" style={{paddingTop:'5%',marginBottom:'3%'}}>
                        <div class="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17990.951722906604!2d73.91312675685437!3d18.56810017841577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f11c307f0415be4!2sRD%20INFO%20GLOBAL%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1631516719617!5m2!1sen!2sin" width="100%" height="450" frameborder="0"
                            style={{border:'0'}} allowFullScreen ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 contactuscols">
                        {/* <div className="conaddresdiv" > */}
                           <h2 className="contacthead"  data-aos="fade-up" >Contact Us</h2>
                            <p className="consubtxt">Get in Touch with us to embark on a path of success</p>
                            <h3  className="conindiaoffice" style={{color:'#30a6e9'}}  data-aos="fade-up">India Office (HQ)</h3>
                            <p className="conIndaddress"> 
                            <span><i class="fa fa-map-marker" style={{fontSize:'25px',color:'#30a6e9',marginRight:'3%'}}></i></span>
                                402, Vascon Garnets Bay,Besides Hotel Four Points By Sheraton,<br/>Viman Nagar, Pune - 411014.
                            </p>
                            <p className="conaddphone">
                                <span><i class="fa fa-phone" style={{color:'#30a6e9',fontSize:'25px',marginRight:'5%'}}></i></span>
                                +91 848-404-0734
                            </p>
                            <p className="conaddphone">
                                <span><i class="fa fa-envelope"style={{fontSize:'20px',color:'#30a6e9',marginRight:'5%'}}></i></span>
                                contact@rdigs.com
                             </p>
                    {/* USA Section */}
                             <h3  className="conUSAoffice" style={{color:'#30a6e9'}}  data-aos="fade-up">USA Office</h3>
                            <p> 
                            <span><i class="fa fa-map-marker" style={{fontSize:'25px',color:'#30a6e9',marginRight:'5%'}}></i></span>      
                            919 North Market Street, Suite 950, Wilmington, Delaware 19801.
                
                            </p>
                            <p className="conaddphone">
                                <span><i class="fa fa-phone" style={{fontSize:'25px',color:'#30a6e9',marginRight:'5%'}}></i></span>
                                 +1 302-261-5312
                            </p>
                            <p className="conaddphone">
                                <span><i class="fa fa-envelope" style={{fontSize:'20px',color:'#30a6e9',marginRight:'5%'}}></i></span>
                                sales@rdigs.com
                             </p>
                        {/* </div> */}

                    </div>
                 
                </div>
            </div>
           
      
    </>
)
}
export default contact;

