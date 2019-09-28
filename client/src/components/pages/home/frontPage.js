import React from 'react';
import Jumbotron from '../../frontPage/jumbotron';
// import SearchBar from './searchbar.js';
import Businesses from '../../frontPage/businesses';
// import AboutUs from './aboutus';
import Register from '../../frontPage/register';
// import MapField from '../pages/discover/discover';
import Layout from '../../layout';
import Techused from '../../frontPage/techused';
import "../../../styles/frontpage.css";


// path {Home Page}
function HomePage() {
    return (
        <Layout>
            <div className="container">
                <Jumbotron />
            </div>
            <div className="front-page2">
                <Businesses />
            </div>
            <div clasName="techimgs">
                <Techused />
            </div>
            <div className="front-page4">
                <Register />
            </div>


        </Layout>
    );
}

export default HomePage;

