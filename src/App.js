import React from 'react';
import { Switch , BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/login/login"
import HomePage from './components/frontPage/frontPage'
import FormsPage from './components/login/bussregister'
import AboutUs from './components/frontPage/aboutus'
import Footer from './components/frontPage/footer'




function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/frontPage" component={HomePage} /> */}
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/busregister" component={FormsPage} />
          <Route exact path="/aboutus" component={AboutUs}/>


      </Switch>
      
    </Router>
      <Footer />
    </>
  );
}

export default App;
