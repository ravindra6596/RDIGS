import React, { useState } from "react";
import './homestyle.css';
import provenimg from '../../images/pro1.jfif';
import provenimg2 from '../../images/pro2.jfif';
import leadimg1 from '../../images/pro2.png';
import promoteimg1 from '../../images/prom-brandimg1.jpg';
import promoteimg2 from '../../images/prom-brandimg1.jpg';
import promoteimg3 from '../../images/prom-brandimg3.jpg';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// import { method } from "../../assets/Data/data";
const Home =()=>{

   // for Modal
   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal); 

   const [modal2, setModal2] = useState(false);
   const toggle2 = () => setModal2(!modal2);

   const [modal3, setModal3] = useState(false);
   const toggle3 = () => setModal3(!modal3);

   const [modal4, setModal4] = useState(false);
   const toggle4 = () => setModal4(!modal4);

   const [modal5, setModal5] = useState(false);
   const toggle5 = () => setModal5(!modal5);

   const [modal6, setModal6] = useState(false);
   const toggle6 = () => setModal6(!modal6);


    return(
    <>

        {/* proven Mothod Image  Modals */}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}></ModalHeader>
                    <ModalBody>
                    <img src={provenimg} class="img-fluid" alt="" style={{ width:'100%'}}/>
                    <p>App1</p>
                    </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
            <Modal isOpen={modal2} toggle={toggle2}>
                <ModalHeader toggle={toggle2}></ModalHeader>
                    <ModalBody>
                    <img src={provenimg} class="img-fluid" alt="" style={{ width:'100%'}}/>
                    <p>Web 3</p>
                    </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
            <Modal isOpen={modal3} toggle={toggle3}>
                <ModalHeader toggle={toggle3}></ModalHeader>
                    <ModalBody>
                    <img src={provenimg2} class="img-fluid" alt="" style={{ width:'100%'}}/>
                    <p>App 2</p>
                    </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
            <Modal isOpen={modal4} toggle={toggle4}>
                <ModalHeader toggle={toggle4}></ModalHeader>
                    <ModalBody>
                    <img src={provenimg} class="img-fluid" alt="" style={{ width:'100%'}}/>
                    <p>Card 2</p>
                    </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
            <Modal isOpen={modal5} toggle={toggle5}>
                <ModalHeader toggle={toggle5}></ModalHeader>
                    <ModalBody>
                    <img src={provenimg} class="img-fluid" alt="" style={{ width:'100%'}}/>
                    <p>Web 2</p>
                    </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
            <Modal isOpen={modal6} toggle={toggle6}>
                <ModalHeader toggle={toggle6}></ModalHeader>
                    <ModalBody>
                    <img src={provenimg} class="img-fluid" alt="" style={{ width:'100%'}}/>
                    <p>App 3</p>
                    </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
         
   {/* Homepage Proven section1 coding */}
        <section id="portfolio" class="portfolio">
            <div class="container" data-aos="fade-up">
            <div class="section-title">
                 <h2 className="provmethodtxt">Proven methods to derive guaranteed conversation</h2>
                <p className="prov-methodmagnam">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
            </div>

            <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src={provenimg} class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <div class="portfolio-links">
                        <a onClick={toggle} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                        </div>
                        </div>
                    </div>
                 </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                    <img src={provenimg} class="img-fluid" alt=""/>
                    <div class="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <div class="portfolio-links">
                        <a onClick={toggle2} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                <img src={provenimg2} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                    <a onClick={toggle3} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                <img src={provenimg} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div class="portfolio-links">
                    <a onClick={toggle4} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={provenimg2} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div class="portfolio-links">
                <a onClick={toggle5} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={provenimg2} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div class="portfolio-links">
                <a onClick={toggle6} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>

            </div>
            </div>
        </section>
    {/* End of section1 */}

       
       
   {/* Homepage Were Today section2 coding */}
         <section>
             <div className="container-fluid homepagese2cont"data-aos="fade-up">
             <h2 className="werewetxt">Where We'Re Today's</h2>
                 <div className="row" data-aos="zoom-out">
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div class="embed-responsive embed-responsive-16by9 videose2">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen style={{borderRadius:'20px'}}></iframe>
                    </div>

                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 " style={{padding:'3%'}}>
                        <h1 style={{color:'white'}}>Where We're Today</h1>
                        <p style={{color:'white'}}>Pellentesque id erat venenatis, rhoncus tellus ac, laoreet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        <p style={{color:'white'}}>Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. In tincidunt rutrum ligula, ac cursus arcu elementum quis. Phasellus consectetur sagittis ex vitae porttitor.</p>
                        
                     </div>                   
                 </div>
             </div>                   
        </section>

    {/* Homepage Promote your section3 coding */}
        <section id="portfolio" class="portfolio">
            <div class="container-fluid" data-aos="fade-up">
            <div class="section-title">
                 <h2 className="provmethodtxt">Proven Your branded Content and engage potential buyers across multiple channel</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur exaliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
            </div>
            
            <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                <div class="col-lg-2 col-md-2 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src={promoteimg1} class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <div class="portfolio-links">
                        <a onClick={toggle} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                        </div>
                        </div>
                    </div>
                 </div>

                <div class="col-lg-2 col-md-2 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                    <img src={promoteimg3} class="img-fluid" alt=""/>
                    <div class="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <div class="portfolio-links">
                        <a onClick={toggle2} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

            <div class="col-lg-2 col-md-2 portfolio-item filter-app">
                <div class="portfolio-wrap">
                <img src={promoteimg1} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                         <a onClick={toggle3} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 portfolio-item filter-app">
                <div class="portfolio-wrap">
                <img src={promoteimg3} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                        <a onClick={toggle3} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 portfolio-item filter-app">
                <div class="portfolio-wrap">
                <img src={promoteimg3} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                        <a onClick={toggle3} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 portfolio-item filter-app">
                <div class="portfolio-wrap">
                <img src={promoteimg3} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                        <a onClick={toggle3} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="fa fa-plus" ></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="fa fa-link"></i></a>
                    </div>
                </div>
                </div>
            </div>

            </div>
            </div>
        </section>
     {/* Homepage Promote your section4 coding */}
                <section className="homesec4backimg" >
                    <div className="container-fluid ">
                        <h2 className="provmethodtxt">Offering</h2>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{marginTop:'3%',justifyContent:'center'}} data-aos="zoom-out">
                                <p>BEST SOLUTION FOR YOUR NEXT PROJECT</p>
                                <h1 className="provmethodtxt">Human Resources</h1>
                                <h1>Balancing</h1>
                                <p>Pellentesque id erat venenatis, rhoncus tellus ac, laoreet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-6 " >
                                <img src={leadimg1} className="homesec3img" alt=""/>
                            </div>                   
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                             <img src={leadimg1} className="homesec3img" alt=""/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 " style={{marginTop:'3%',justifyContent:'center'}}>
                                <p>BEST SOLUTION FOR YOUR NEXT PROJECT</p>
                                <h1 className="provmethodtxt">Human Resources</h1>
                                <h1>Balancing</h1>
                                <p>Pellentesque id erat venenatis, rhoncus tellus ac, laoreet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            </div>                   
                        </div>
                    </div>                   
                </section>
 

    </>
)
}
export default Home;

