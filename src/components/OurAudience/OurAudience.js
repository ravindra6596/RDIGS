import React from 'react';
import './OurAudience.css';
const OurAudience=()=>{
    return(
        <section className="section section-lg text-center ">
        <div className="container">
          <h3 className="wow-outer">
              <span className="wow slideInUp title-our heading-our">Our Audience</span>
              </h3>
          <p className="wow-outer">
              <span className="text-width-1 wow slideInDown para-our">
                  We provide a variety of marketing and promotion services to enable you and your business with innovative tools and strategies and attract more customers.
              </span>
        </p>
          <div className="row row-50 row-xxl-70 offset-top-2 outerdiv">
            <div className="col-sm-6 col-md-4 col-lg-3 wow-outer card-border">
              {/* Box Ligh  data-aos="fade-right" */}
              <div data-aos="fade-right">
              <article className="box-light wow slideInLeft article-div">
                <i className="fas fa-flag"></i>
                <h4 className="box-light-title title-audience">Branding</h4>
                <p>Whether you’re looking to launch a brand or you just need help clarifying your message, we can help you.</p>
              </article>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 wow-outer card-border">
              {/* Box Ligh */}
              <div data-aos="fade-right">
              <article className="box-light wow slideInLeft article-div" data-wow-delay=".05s">
                <i className="fas fa-sliders-h"></i>
                <h4 className="box-light-title title-audience">Strategy</h4>
                <p>Our experts can help you develop your marketing strategy and integrate it into your advertising campaign.</p>
              </article>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 wow-outer card-border">
              {/* Box Ligh */}
              <div data-aos="fade-right">
              <article className="box-light wow slideInLeft article-div" data-wow-delay=".1s">
                <i className="fas fa-video"></i>
                <h4 className="box-light-title title-audience">Video Production</h4>
                <p>Need a professional advertising video for your campaign? We can offer anything you need.</p>
              </article>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 wow-outer card-border">
              {/* Box Ligh */}
              <div data-aos="fade-right">
              <article className="box-light wow slideInLeft article-div" data-wow-delay=".15s">
                <i className="fas fa-share-alt"></i>
                <h4 className="box-light-title title-audience">Copywriting</h4>
                <p>Our experienced copywriters will gladly provide you with high-quality texts for your websites or advertisements.</p>
              </article>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 wow-outer card-border" data-aos="fade-right">
              {/* Box Ligh */}
    
              <article className="box-light wow slideInLeft article-div">
                <i className="fas fa-flag"></i>
                <h4 className="box-light-title title-audience">SMM</h4>
                <p>We can develop a simple social media marketing plan designed specifically for your business and your needs.</p>
              </article>
            
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 wow-outer card-border">
              {/* Box Ligh */}
              <div data-aos="fade-right">
              <article className="box-light wow slideInLeft article-div" data-wow-delay=".05s">
                <i className="fas fa-flag"></i>
                <h4 className="box-light-title title-audience">Outdoor Advertising</h4>
                <p>If you need to create your next out-of-home campaign or lease your space, we can satisfy your advertising needs.​</p>
              </article>
              </div>
            </div>  
          </div>
        </div>
      </section>
    )
}
export default OurAudience;