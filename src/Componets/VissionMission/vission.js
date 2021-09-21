import './vission.css';
import vissionimage1 from '../../img/vissionimg.jpg';
import missionimgage1 from '../../img/missionimg.jpg';



const vission =()=>{
    return(
    <>
            
		<section className="rd-mission" >
                    <div className="container">
                        <div className="row"  data-aos="fade-up" data-aos-delay="200">
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div class="rd-mission-title" data-aos="fade-right">
									<h3 className="title-mission">Mission</h3>
									<p class="lead-right-margin">
									To provide highest quality added services to our purchasers and delivering measurable results. To provide purchasers with a reliable outsourcing service that gives worth, stability and profit to their operations. Build a strengthen relationships between our purchasers and their individual customers.
									</p>
								</div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
							<img className="backmission img-fluid" src={vissionimage1} alt="" ></img>
                            </div>
                        </div>

						<div className="row vissionrow2"  data-aos="fade-up" data-aos-delay="200">
							<div className="col-lg-6 col-md-6 col-sm-6">
							<img className="mission" src={missionimgage1}/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
								<div class="rd-vision-title" data-aos="fade-right">
									<h3 className="missionhead">Vision</h3>
									<p class="lead-right-margin">
									Our vision is to stay a foremost outsourcing company that gives our clients the simplest services at competitive costs.
									</p>
								</div>
                            </div>

                        </div>

                    </div>                   
                </section> 
        


    </>
)
}
export default vission;

