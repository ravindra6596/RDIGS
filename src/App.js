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
import Careers from './Componets/Careers/careers';
import Counter from './Componets/Counter/Counter';
import Testimonial from './Componets/Testimonial/Testimonial';
import Footer from './Componets/Footer/Footer';
import Companyslider from './Componets/CompanySlider/Companyslider';
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
              <Route path='/home' exact={true} component={Homepage}/>
              <Route path='/teams' exact={true} component={Teams}/>
              <Route path='/careers' exact={true} component={Careers}/>
              <Route path='/contact' exact={true} component={Contact}/>
              <Route path='/counter' exact={true} component={Counter}/>
              <Route path='/testimonial' exact={true} component={Testimonial}/>
              <Route path='/companyslider' exact={true} component={Companyslider}/>
              <Route path='/footer' exact={true} component={Footer}/>
              

       
             
          </Switch>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
