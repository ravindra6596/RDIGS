import React, { useState } from "react";
import './Headerstyle.css';
import logoimg from '../../img/logo.png';
import { Nav,NavDropdown,Container,Navbar,NavLink } from 'react-bootstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter,Button} from 'reactstrap';
import { Link } from "react-router-dom";
import DemandGeneration from '../DemandGeneration/DemandGeneration';


const Header =()=>{

    // for Modal
     const [modal, setModal] = useState(false);
     const toggle = () => setModal(!modal);


    return(
    <>
        

        {/* Header Modals */}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}></ModalHeader>
                    <ModalBody>
                        <h1>hiiiiiiii</h1>
                    </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
        
         {/* Topnav coding */}
        <section className="fixed-top topnavbar">
        <div className="container ">
            <div className="row headfirstrow">
                <div class="col-lg-9 col-md-9 col-sm-9 topnavcol1">
                    <span className="head-sales"><i  class="fa fa-envelope mailicon"></i>sales@rdigs.com</span>
                    <span className="topnav-phone"><i  class="fa fa-phone topnavphicon"></i>1302-261-5312</span>
                </div>
                <div className=" topnaviconscol col-lg-3 col-md-3 col-sm-3 ">
                        <i class="fa fa-facebook" style={{color:'white'}}></i>
                        <i class="fa fa-twitter headfacebbok" style={{color:'white'}}></i>
                        <i class="fa fa-linkedin headfacebbok" style={{color:'white'}}></i>
                </div>
            </div>
            </div>
            {/* Navbar coding */}
               
            <Navbar  collapseOnSelect expand="lg"  variant="dark" className="mainnavbar ">
            <Container>
            <Navbar.Brand><img src={logoimg} className="headlogo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link ><Link to="/home">HOME</Link></Nav.Link>
                <div class="dropdown">
                 <Nav.Link><span >SERVICES</span></Nav.Link>
                    <div class="dropdown-content dropdownservice">
                        <div className="row">
                            <div className="col">
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-align-justify" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><Link to="/leadgeneration">Lead Generation</Link></p>
                                </span>
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-laptop" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><Link to="/demandgeneration">Demand Generation </Link></p>
                                </span>
                            </div>    
                        </div>
                    </div>
                    </div>

           

                <div class="dropdown">
                 <Nav.Link><span >ABOUT</span></Nav.Link>
                    <div class="dropdown-content dropdownabout">
                        <div className="row">
                            <div className="col">
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-users" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><Link to="/teams">Teams</Link></p>
                                </span>
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-laptop" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><Link to="/careers">Careers</Link></p>
                                </span>
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-align-center"></i>
                                    <p className="blogmodeltxt"><Link to="/gallary">Gallery</Link></p>
                                </span>
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-th" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><Link to="/companyprofile1">Company Profile</Link></p>
                                </span>
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-th" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><Link to="/newslatter">News Latter</Link></p>
                                </span>
                            </div>
                           
                        </div>
                    </div>
                    </div>
                 <Nav.Link><Link to="/blog">BLOG</Link></Nav.Link>
                <Nav.Link ><Link to="/contact"> CONTACT</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
          
        </section>
              

       
       


       


    </>
)
}
export default Header;

