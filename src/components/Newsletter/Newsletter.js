import React from 'react';
const Newsletter=()=>{
    return(
        <div class="row ftco-animate fadeInUp ftco-animated">
            <div class="col-md-12">
            <div class="carousel-testimony owl-carousel ftco-owl owl-loaded owl-drag">
            <div class="owl-stage-outer">
                <div class="owl-stage">
                    <div class="owl-item cloned">
                        <div class="item">
                            <div class="testimony-wrap py-4">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="fa fa-quote-left"></span>
                                </div>
                                    <div class="text">
                                        <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <div class="d-flex align-items-center">
                                            <div class="user-img"></div>
                                            <div class="pl-3">
                                            <p class="name">Roger Scott</p>
                                            <span class="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>      
            </div>
        </div>
    </div>
    <div class="owl-nav disabled">
        <button role="presentation" class="owl-prev">
            <span class="ion-ios-arrow-back"></span>
        </button>
        <button role="presentation" class="owl-next">
            <span class="ion-ios-arrow-forward"></span>
        </button>
    </div>
    <div class="owl-dots">
        <button class="owl-dot">
            <span></span>
        </button>
        <button class="owl-dot">
            <span></span>
        </button>
        <button class="owl-dot active">
            <span></span>
        </button>
        <button class="owl-dot">
            <span></span>
        </button>
        <button class="owl-dot">
            <span></span>
        </button>
    </div></div>
  </div>
</div>

    )
}
export default Newsletter;