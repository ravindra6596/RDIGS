import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './components/Home/Home';
// import Footer from './components/Footer/Footer';
// import Banner from './components/Banner/Banner';
// import Counter from './components/Counter/Counter';
// import Testimonial from './components/Testimonial/Testimonial';
// import Newsletter from './components/Newsletter/Newsletter';
// import Companyslider from './components/Companyslider/Companyslider';
import CompanyProfie from './components/CompanyProfile/CompanyProfile';
import OurAudience from './components/OurAudience/OurAudience';
import Gallery from './components/Gallary/Gallery';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/OurAudience' exact={true} component={OurAudience}/>
              <Route path='/companyprofile' exact={true} component={CompanyProfie}/>
              <Route path='/gallery' exact={true} component={Gallery}/>
          </Switch>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
