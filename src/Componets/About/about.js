import './about.css';
import aboutimage from '../../img/aboutimg.jpg';

const about =()=>{
    return(
    <>
             <section className="aboutsecbackimg" >
                    <div className="container" data-aos="fade-up" data-aos-delay="200">
                        <div className="row"  data-aos="fade-left" data-aos-delay="200">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <img src={aboutimage} className="aboutsecimg img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                 <h1 className="aboutwherewe" >About Us</h1>
                                <p className="aboutpara">Pellentesque id erat venenatis, rhoncus tellus ac, laoreet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Interdum et malesuada fames ac ante ipsum primis in faucibus.Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            </div>

                        </div>
                    </div>                   
                </section>  
            
        


    </>
)
}
export default about;

