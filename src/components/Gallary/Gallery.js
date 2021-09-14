import React,{useState} from "react";
import './Gallery.css';
import {Modal, ModalHeader, ModalBody, ModalFooter,Button} from 'reactstrap';
const Gallery=()=>{
    const [modal, setModal] = useState(false); 
    const toggle = () => setModal(!modal);
    return(
        <section class="elementor-element elementor-element-c28a00a elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="c28a00a" data-element_type="section">
			<div class="elementor-container elementor-column-gap-default">
				<div class="elementor-row">
				   <div class="elementor-element elementor-element-a69a600 elementor-column elementor-col-100 elementor-top-column" data-id="a69a600" data-element_type="column">
			         <div class="elementor-column-wrap  elementor-element-populated">
					   <div class="elementor-widget-wrap">
				         <div class="elementor-element elementor-element-ce83e53 elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="ce83e53" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:250}" data-widget_type="text-editor.default">
				           <div class="elementor-widget-container">
                                <div class="elementor-text-editor elementor-clearfix">
                                <h1 className="text-center heading-gallary">Our Gallery</h1>
                               </div>
				           </div>
				        </div>
                <div className="row gallary-section1">
                    {/* col start */}
                    <div className="col-sm-4">
                      <div class="bdt-gallery-item bdt-transition-toggle">
                        <div class="bdt-advanced-image-gallery-inner">
                            <div class="bdt-gallery-thumbnail bdt-transition-toggle">
                                  <img src="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1-460x410.jpg" alt="img-1-1"/>
                            </div>		
                            <div class="bdt-position-cover bdt-overlay bdt-overlay-default bdt-transition-fade">
                                <div class="bdt-advanced-image-gallery-content">
                                    <div class="bdt-advanced-image-gallery-content-inner">
                                    
                                            <div class="bdt-flex-inline bdt-gallery-item-link-wrapper">
                                                <a class="bdt-gallery-item-link elementor-clickable icon-type-icon" data-elementor-open-lightbox="no" data-caption="" href="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1.jpg" onClick={toggle}>
                                                        <span bdt-icon="icon: plus; ratio: 1.6" class="bdt-icon">
                                                            <svg width="32" height="32" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="plus"><rect x="9" y="1" width="1" height="17"></rect><rect x="1" y="9" width="17" height="1"></rect></svg>
                                                        </span>
                                                </a>
                                            </div>
                        <Modal isOpen={modal} toggle={toggle} className="custom-modal-style">
                                    <section className="Ppoup-model-header">
                                                    <div className="container-fluid"> 
                                                        <div className="row">
                                                                <div className="col-sm-6 col-lg-6 col-md-6 text-center modal-head">
                                                                    <h1>Keep In Touch</h1>
                                                                    <p>Be the first to receive the latest news on products and promos</p>
                                                                    <input  className="Email-modal" type="text" placeholder="Enter Your Email"></input>
                                                                    <div className="checkbox-section">
                                                                    <input className="checkmodal" type="checkbox" required />
                                                                    <p>I agree to receive marketing and promotional emails by RD info Global Solutions Check our <span>Privacy Policy</span>And<span>Terms and Condition</span></p>
                                                                    <button className="btn btn-primary text-center dflex justify-content-center modal-submit" onClick={toggle}>Submit</button>
                                                                </div>
                                                                </div>
                                                        </div> 
                                                            
                                                    </div>
                                    </section>
                        </Modal>
                                    </div>
                                </div>
                            </div>

						</div>
					  </div>
                    </div>
                    {/* col end */}
                    <div className="col-sm-4">
                    <div class="bdt-gallery-item bdt-transition-toggle">
                        <div class="bdt-advanced-image-gallery-inner">
                            <div class="bdt-gallery-thumbnail bdt-transition-toggle">
                                  <img src="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1-460x410.jpg" alt="img-1-1"/>
                            </div>		
                            <div class="bdt-position-cover bdt-overlay bdt-overlay-default bdt-transition-fade">
                                <div class="bdt-advanced-image-gallery-content">
                                    <div class="bdt-advanced-image-gallery-content-inner">
                                    
                                            <div class="bdt-flex-inline bdt-gallery-item-link-wrapper">
                                                <a class="bdt-gallery-item-link elementor-clickable icon-type-icon" data-elementor-open-lightbox="no" data-caption="" href="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1.jpg">
                                                        <span bdt-icon="icon: plus; ratio: 1.6" class="bdt-icon"><svg width="32" height="32" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="plus"><rect x="9" y="1" width="1" height="17"></rect><rect x="1" y="9" width="17" height="1"></rect></svg></span>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>

						</div>
					</div>
                    </div>
                    <div className="col-sm-4">
                    <div class="bdt-gallery-item bdt-transition-toggle">
                        <div class="bdt-advanced-image-gallery-inner">
                            <div class="bdt-gallery-thumbnail bdt-transition-toggle">
                                  <img src="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1-460x410.jpg" alt="img-1-1"/>
                            </div>		
                            <div class="bdt-position-cover bdt-overlay bdt-overlay-default bdt-transition-fade">
                                <div class="bdt-advanced-image-gallery-content">
                                    <div class="bdt-advanced-image-gallery-content-inner">
                                    
                                            <div class="bdt-flex-inline bdt-gallery-item-link-wrapper">
                                                <a class="bdt-gallery-item-link elementor-clickable icon-type-icon" data-elementor-open-lightbox="no" data-caption="" href="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1.jpg">
                                                        <span bdt-icon="icon: plus; ratio: 1.6" class="bdt-icon"><svg width="32" height="32" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="plus"><rect x="9" y="1" width="1" height="17"></rect><rect x="1" y="9" width="17" height="1"></rect></svg></span>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>

						</div>
					</div>
                    </div>
                </div>
                <div className="row gallary-section2">
                <div className="col-sm-4">
                      <div class="bdt-gallery-item bdt-transition-toggle">
                        <div class="bdt-advanced-image-gallery-inner">
                            <div class="bdt-gallery-thumbnail bdt-transition-toggle">
                                  <img src="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1-460x410.jpg" alt="img-1-1"/>
                            </div>		
                            <div class="bdt-position-cover bdt-overlay bdt-overlay-default bdt-transition-fade">
                                <div class="bdt-advanced-image-gallery-content">
                                    <div class="bdt-advanced-image-gallery-content-inner">
                                    
                                            <div class="bdt-flex-inline bdt-gallery-item-link-wrapper">
                                                <a class="bdt-gallery-item-link elementor-clickable icon-type-icon" data-elementor-open-lightbox="no" data-caption="" href="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1.jpg">
                                                        <span bdt-icon="icon: plus; ratio: 1.6" class="bdt-icon"><svg width="32" height="32" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="plus"><rect x="9" y="1" width="1" height="17"></rect><rect x="1" y="9" width="17" height="1"></rect></svg></span>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>

						</div>
					  </div>
                    </div>
                    <div className="col-sm-4">
                      <div class="bdt-gallery-item bdt-transition-toggle">
                        <div class="bdt-advanced-image-gallery-inner">
                            <div class="bdt-gallery-thumbnail bdt-transition-toggle">
                                  <img src="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1-460x410.jpg" alt="img-1-1"/>
                            </div>		
                            <div class="bdt-position-cover bdt-overlay bdt-overlay-default bdt-transition-fade">
                                <div class="bdt-advanced-image-gallery-content">
                                    <div class="bdt-advanced-image-gallery-content-inner">
                                    
                                            <div class="bdt-flex-inline bdt-gallery-item-link-wrapper">
                                                <a class="bdt-gallery-item-link elementor-clickable icon-type-icon" data-elementor-open-lightbox="no" data-caption="" href="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1.jpg">
                                                        <span bdt-icon="icon: plus; ratio: 1.6" class="bdt-icon"><svg width="32" height="32" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="plus"><rect x="9" y="1" width="1" height="17"></rect><rect x="1" y="9" width="17" height="1"></rect></svg></span>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>

						</div>
					  </div>
                    </div>
                    <div className="col-sm-4">
                      <div class="bdt-gallery-item bdt-transition-toggle">
                        <div class="bdt-advanced-image-gallery-inner">
                            <div class="bdt-gallery-thumbnail bdt-transition-toggle">
                                  <img src="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1-460x410.jpg" alt="img-1-1"/>
                            </div>		
                            <div class="bdt-position-cover bdt-overlay bdt-overlay-default bdt-transition-fade">
                                <div class="bdt-advanced-image-gallery-content">
                                    <div class="bdt-advanced-image-gallery-content-inner">
                                    
                                            <div class="bdt-flex-inline bdt-gallery-item-link-wrapper">
                                                <a class="bdt-gallery-item-link elementor-clickable icon-type-icon" data-elementor-open-lightbox="no" data-caption="" href="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1.jpg">
                                                        <span bdt-icon="icon: plus; ratio: 1.6" class="bdt-icon"><svg width="32" height="32" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="plus"><rect x="9" y="1" width="1" height="17"></rect><rect x="1" y="9" width="17" height="1"></rect></svg></span>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>

						</div>
					  </div>
                    </div>
                </div>
				{/* <div class="elementor-element elementor-element-ccf8980 elementor-widget elementor-widget-bdt-advanced-image-gallery animated fadeIn" data-id="ccf8980" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="bdt-advanced-image-gallery.default">
				<div class="elementor-widget-container">
					<div id="bdt-avdg-ccf8980" class="bdt-advanced-image-gallery bdt-skin-default bdt-grid bdt-grid-small bdt-child-width-1-1 bdt-child-width-1-3@s bdt-child-width-1-3@m" bdt-grid="" bdt-lightbox="animation: slide">
		
                    <div class="bdt-gallery-item bdt-transition-toggle">
                        <div class="bdt-advanced-image-gallery-inner">
                            <div class="bdt-gallery-thumbnail bdt-transition-toggle">
                                  <img src="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1-460x410.jpg" alt="img-1-1"/>
                            </div>		
                            <div class="bdt-position-cover bdt-overlay bdt-overlay-default bdt-transition-fade">
                                <div class="bdt-advanced-image-gallery-content">
                                    <div class="bdt-advanced-image-gallery-content-inner">
                                    
                                            <div class="bdt-flex-inline bdt-gallery-item-link-wrapper">
                                                <a class="bdt-gallery-item-link elementor-clickable icon-type-icon" data-elementor-open-lightbox="no" data-caption="" href="https://moreno.b-cdn.net/wp-content/uploads/2019/05/img-1-1.jpg">
                                                        <span bdt-icon="icon: plus; ratio: 1.6" class="bdt-icon"><svg width="32" height="32" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="plus"><rect x="9" y="1" width="1" height="17"></rect><rect x="1" y="9" width="17" height="1"></rect></svg></span>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>

						</div>
					</div>

				</div>
				</div>
				</div> */}
				</div>
			</div>
            </div>
			</div>
			</div>
		</section>
    )
}
export default Gallery;