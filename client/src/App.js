import React from 'react';
import { Switch , BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/pages/home/frontPage'
import LoginPage from "./components/login/login"
import FormsPage from './components/login/bizregister'
import AboutUs from './components/pages/aboutus/aboutus'
import Footer from './components/frontPage/footer'
import WrappedMap from './components/pages/discover/discover.js'


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
          <Route exact path="/discover" component={WrappedMap} />
          
          {/* <Route exact path="/discover" component={Discover}/> */}


      </Switch>
        <Footer />
    </Router>
      
    </>
  );
}

export default App;
