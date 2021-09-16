import React from 'react';
import './Counter.css';
import CountUp from 'react-countup';

const Counter =()=>{ 
    return(
        <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
  
          <div className="row gy-4">
          <div className="col-lg-4 col-md-6 col-sm-4 counter-p">
              <div className="count-box">
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <h2>Founded In</h2>
                  <CountUp start={2013} end={2021} duration={5}>
                </CountUp>
                <span className="counter-plus">+</span>
                  <p>YOUR GROWTH IS OUR SUCCESS...</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-2 counter-p">
              <div className="count-box Happy-Clients">
                     <i className="fa fa-smile-o"></i>
                <div className="text-center para-icons">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p className="text-center">Happy Clients</p>
                    <CountUp start={0} end={232} duration={5}>
                    </CountUp>
                    <span className="counter-plus">+</span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-2 counter-p">
              <div className="count-box Projects">
                <i className="fa fa-newspaper-o"></i> 
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p className="text-center">Projects</p>
                  <CountUp start={0} end={521} duration={5}>
                  </CountUp>
                  <span className="counter-plus">+</span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-2 counter-p">
              <div className="count-box Hours-Support">
                <i className="fa fa-headphones"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                  <p className="text-center">Hours Of Support</p>
                  <CountUp start={0} end={1463} duration={5}>
                    </CountUp>
                    <span>+</span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-2 counter-p">
              <div className="count-box Hard-Workers">
                  <i className="fa fa-user"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                  <p className="text-center">Hard Workers</p>
                  <CountUp start={0} end={15} duration={5}>
                    </CountUp>
                    <span className="counter-plus">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Counter;