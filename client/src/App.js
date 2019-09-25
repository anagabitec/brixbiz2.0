import React from 'react';
import { Switch , BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/frontPage/frontPage'
import LoginPage from "./components/login/login"
import FormsPage from './components/login/bizregister'
import AboutUs from './components/frontPage/aboutus'
import Footer from './components/frontPage/footer'
import WrappedMap from './components/frontPage/mapfield'


function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/frontPage" component={HomePage} /> */}
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/bizregister" component={FormsPage} />
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/mapfield" component={WrappedMap} />
          
          {/* <Route exact path="/discover" component={Discover}/> */}


      </Switch>
      
    </Router>
      <Footer />
    </>
  );
}

export default App;
