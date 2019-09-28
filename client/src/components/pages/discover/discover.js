import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
// import testData from "../testdata.json";
// import API from '../../utils/API';
import axios from 'axios';
import Layout from '../../layout';
import SearchPage from './searchbar';
import Map from "./map";

import "../../../styles/discover.css"

const styles = {
    sectionMargin: {
        margin: 20,
        // width: 500
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
//Go here for tutorial https://www.youtube.com/watch?v=Pf7g32CwX_s
const Discover = () => {
    return (
        <Layout>
            {/* add grid */}
            <div style={styles.sectionMargin}>
                <SearchPage>What you're looking for?</SearchPage>
                <SearchPage>Zip Code</SearchPage>
            </div>
            <div className="container" id="map">
                {/* CSS: add Map as fixed position to right side 33% */}
                <WrappedMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_KEY}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        </Layout>
    );
};

export default Discover;