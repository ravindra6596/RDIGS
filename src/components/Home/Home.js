import React from 'react';

import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Testimonial from '../Testimonial/Testimonial';
import Clientslider from '../Companyslider/Companyslider';
import Header from '../Header/header';
import Sections from '../Sections/homepage';
import Footer from '../Footer/Footer';
import OurAudience from '../OurAudience/OurAudience';
const Home=()=>{
    return(
        <>
            <Header/>
            <Banner/>
            <Sections/>
            <OurAudience/>
            <Counter/>
           <Testimonial/>
           <Clientslider/>
           <Footer/>
        </>   
    )
    
}
export default Home;