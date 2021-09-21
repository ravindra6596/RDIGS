import React, { useState } from 'react';
import './Banner.css';
import Button from '../ButtonGroup/Button/button';
import callingb2bnetwork from '../../video/bannervideo.mp4';
import { Modal, ModalBody } from 'react-bootstrap';

const Banner = () => {
    const [modal, setModal] = useState(false);
    return (
        <header>
            <div class="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" >
                <source src={callingb2bnetwork} type="video/mp4" />
            </video>

            <div class="container h-100 w-100"  >
                <div class="d-flex h-100 w-100 text-center align-items-center">
                    <div class="text-box w-100 text-white">
                        <h1 class="heading-primary">
                            <span class="heading-primary-main" >RD INFO GLOBAL SOLUTIONS</span>
                            <span class="heading-primary-sub">BPO</span>
                        </h1>
                       
                    </div>
                </div>
                <Modal className="custom-modal-style" show={modal}>
                    {/* <ModalHeader className="modelhead1" > </ModalHeader> */}
                    <section className="Ppoup-model-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6 col-md-6 text-center modal-head">
                                    <h1>Keep In Touch</h1>
                                    <p>Be the first to receive the latest news on products and promos</p>
                                    <input className="Email-modal" type="text" placeholder="Enter Your Email"></input>
                                    <div className="checkbox-section">
                                        <input className="checkmodal" type="checkbox" required />
                                        <p>I agree to receive marketing and promotional emails by RD info Global Solutions Check our <span>Privacy Policy</span>And<span>Terms and Condition</span></p>
                                        <button className="btn btn-primary text-center dflex justify-content-center modal-submit" onClick={()=>setModal(false)}>Submit</button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </section>
                </Modal>

            </div>
        </header>

    )
}
export default Banner;