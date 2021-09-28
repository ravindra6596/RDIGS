import './Services.css';
import service1 from '../../img/services/service1.jpg';
import service2 from '../../img/services/service2.jpg';
import service3 from '../../img/services/service3.jpg';
import service4 from '../../img/services/service4.jpg';
import service6 from '../../img/services/service6.jpg';
import service7 from '../../img/services/service7.jpg';
const Servicess =()=>{
    return(
        <>
        <section id="services" class="portfolio">
            <div class="container" data-aos="fade-up">
            <div class="section-title">
                 <h1 className="services-head" data-aos="fade-down" data-aos-delay="200">Services</h1>
                <p className="service-para">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
            </div>
            <div class="row servicess-row" data-aos="fade-up" data-aos-delay="200">
                <div class="col-lg-4 col-md-4 col-sm-4"style={{marginTop:'3%'}}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={service1} alt="Avatar" className="img-fluid"/>
                            </div>
                            <div class="flip-card-back">
                                <h3 style={{marginTop:'15%'}}>Proof of receipt for each interaction</h3>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div class="col-lg-4 col-md-4 col-sm-4"style={{marginTop:'3%'}}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={service2} alt="Avatar" className="img-fluid"/>
                            </div>
                            <div class="flip-card-back">
                                <h3 style={{marginTop:'15%'}}>Real time delivery On Demand</h3>
                            </div>
                        </div>
                    </div>
                 </div>

                <div class="col-lg-4 col-md-4 col-sm-4"style={{marginTop:'3%'}}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={service3} alt="Avatar" className="img-fluid"/>
                            </div>
                            <div class="flip-card-back">
                                <h3 style={{marginTop:'15%'}}>2 level QA check to ensure 100% intent and contact details</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-4" style={{marginTop:'3%'}}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={service4} alt="Avatar" className="img-fluid"/>
                            </div>
                            <div class="flip-card-back">
                                <h3 style={{marginTop:'15%'}}>100% accurate contact details</h3>
                            </div>
                        </div>
                    </div>
                 </div>
            
                 <div class="col-lg-4 col-md-4 col-sm-4" style={{marginTop:'3%'}}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={service6} alt="Avatar" className="img-fluid"/>
                            </div>
                            <div class="flip-card-back">
                                <h3 style={{marginTop:'15%'}}>Proof of receipt for each interaction</h3>
                            </div>
                        </div>
                    </div>
                 </div>

                <div class="col-lg-4 col-md-4 col-sm-4" style={{marginTop:'3%'}}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={service7} alt="Avatar" className="img-fluid"/>
                            </div>
                            <div class="flip-card-back">
                                <h3 style={{marginTop:'15%'}}>Proof of receipt for each interaction</h3>
                            </div>
                        </div>
                    </div>
                 </div>

            </div>
            </div>
        </section>
        </>
    )
}
export default Servicess;