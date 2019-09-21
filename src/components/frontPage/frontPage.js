import React from 'react';
import Jumbotron from './jumbotron';
import SearchBar from './searchbar.js';
import Businesses from './businesses';
import AboutUs from './aboutus';
import Register from './register';
import MapField from './mapfield';
import Layout from '../layout';




function HomePage() {
    return (
        <Layout>
            <div className="container">
                <Jumbotron />
                </div>
                <div className="container2">
                <MapField />
                </div>
                <div className="front-page2">
                <Businesses />
                </div>
                {/* <div className="front-page3">
                <AboutUs />
                </div> */}
                <div className="front-page4">
                <Register />
                </div>   
        </Layout>
    );
}

export default HomePage;
