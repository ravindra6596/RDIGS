import './about.css';
import aboutimage from '../../img/aboutimg.jpg';

const about =()=>{
    return(
    <>
             <section  style={{marginTop:'3%'}}>
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-right">
                                 <h1 className="aboutwherewe">About Us</h1>
                                <p className="aboutpara">Pellentesque id erat venenatis, rhoncus tellus ac, laoreet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Interdum et malesuada fames ac ante ipsum primis in faucibus.Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                <p className="aboutpara">Pellentesque id erat venenatis, rhoncus tellus ac, laoreet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Interdum et malesuada fames ac ante ipsum primis in faucibus.Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6" data-aos="flip-right">
                                <div class="elementor-image">
                                    <img  src={aboutimage} className="aboutsecimg img-fluid"
                                        alt="" srcset="https://moreno.b-cdn.net/wp-content/uploads/2019/05/front-1.png 1048w" sizes="(max-width: 200px) 100vw, 200pxpx"/>											
                                </div>
                               
                            </div>
                        </div>
                    </div>                   
                </section>  
            
           


    </>
)
}
export default about;

