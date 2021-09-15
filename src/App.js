import logo from './logo.svg';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Header from "./Componets/Header/header";
import Banner from "./Componets/Banner/banner";
import Homepage from "./Componets/Homepage/homepage";
import Contact from "./Componets/Contact/contact";
import Teams from "./Componets/Teams/teams";
import Careers from './Componets/Careers/careers';

AOS.init({
  duration: 1500
});
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
              <Route path='/' exact={true} component={Homepage}/>
              <Route path='/header' exact={true} component={Header}/>
              <Route path='/banner' exact={true} component={Banner}/>
              <Route path='/homepage' exact={true} component={Homepage}/>
              <Route path='/teams' exact={true} component={Teams}/>
              <Route path='/careers' exact={true} component={Careers}/>
              <Route path='/contact' exact={true} component={Contact}/>

       
             
          </Switch>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
