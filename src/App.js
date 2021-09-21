import logo from './logo.svg';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Header from "./Componets/Header/header";
import Banner from "./Componets/Banner/Banner";
import Homepage from "./Componets/Homepage/homepage";
import Contact from "./Componets/Contact/contact";
import Teams from "./Componets/Teams/teams";
import VissionMission from "./Componets/VissionMission/vission";
import Careers from './Componets/Careers/careers';
import Counter from './Componets/Counter/Counter';
import Testimonial from './Componets/Testimonial/Testimonial';
import Footer from './Componets/Footer/Footer';
import Companyslider from './Componets/CompanySlider/Companyslider';
import DemandGeneration from './Componets/DemandGeneration/DemandGeneration';
import LeadGeneration from './Componets/LeadGeneration/LeadGeneration';
import Gallary from './Componets/Gallary/Gallery';
import CompanyProfile1 from './Componets/CompanyProfile1/CompanyProfile1';
import Blog from './Componets/Blog/Blog';


AOS.init({
  duration: 1500
});
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main"  style={{marginTop:"130px", overflow:"hidden"}}>
          <Switch>
              <Route path='/' exact={true} component={Homepage}/>
              <Route path='/header' exact={true} component={Header}/>
              <Route path='/banner' exact={true} component={Banner}/>
              <Route path='/vission' exact={true} component={VissionMission}/>
              <Route path='/home' exact={true} component={Homepage}/>
              <Route path='/teams' exact={true} component={Teams}/>
              <Route path='/careers' exact={true} component={Careers}/>
              <Route path='/contact' exact={true} component={Contact}/>
              <Route path='/counter' exact={true} component={Counter}/>
              <Route path='/testimonial' exact={true} component={Testimonial}/>
              <Route path='/companyslider' exact={true} component={Companyslider}/>
              <Route path='/demandgeneration' exact={true} component={DemandGeneration}/>
              <Route path='/leadgeneration' exact={true} component={LeadGeneration}/>
              <Route path='/gallary' exact={true} component={Gallary}/>
              <Route path='/companyprofile1' exact={true} component={CompanyProfile1}/>
              <Route path='/blog' exact={true} component={Blog}/>



              


              <Route path='/footer' exact={true} component={Footer}/>
              

       
             
          </Switch>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
