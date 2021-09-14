import React from 'react';
import './Counter.css';
import CountUp from 'react-countup';

const Counter =()=>{ 
    return(
        <section id="counts" class="counts">
        <div class="container" data-aos="fade-up">
  
          <div class="row gy-4">
          <div class="col-lg-4 col-md-6 col-sm-4 counter-p">
              <div class="count-box">
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                  <h2>Founded In</h2>
                  <CountUp start={2013} end={2021} duration={5}>
                    {/* {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        <div onClick={start}>Start</button>
                    </div>
                    )} */}
                </CountUp>
                  <p>YOUR GROWTH IS OUR SUCCESS...</p>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-2 counter-p">
              <div class="count-box Happy-Clients">
                     <i class="fas fa-smile-beam "></i>
                <div className="text-center para-icons">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                  <p className="text-center">Happy Clients</p>
                    <CountUp start={0} end={232} duration={5}>
                    </CountUp>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-2 counter-p">
              <div class="count-box Projects">
                <i class="fas fa-newspaper"></i> 
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                  <p className="text-center">Projects</p>
                  <CountUp start={0} end={521} duration={5}>
                    </CountUp>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-2 counter-p">
              <div class="count-box Hours-Support">
                <i class="fas fa-headset"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
                  <p className="text-center">Hours Of Support</p>
                  <CountUp start={0} end={1463} duration={5}>
                    </CountUp>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-2 counter-p">
              <div class="count-box Hard-Workers">
                  <i class="fas fa-user"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                  <p className="text-center">Hard Workers</p>
                  <CountUp start={0} end={15} duration={5}>
                    </CountUp>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Counter;