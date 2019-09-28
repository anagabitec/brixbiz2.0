import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import axios from 'axios';

require("dotenv").config();
class Map extends Component {

    state = {
        selectedMarker: null,
        allJobs: []
    }
    // componentDidMount() {
    //     this.loadJobs();
    // }
    // loadJobs = () => {
    //     API.getJobs()
    //         .then(res =>
    //             this.setState({ allJobs: res.data })
    //         )
    //         .catch(err => console.log(err));
    // };
    setSelectedMarker = (info) => {
        this.setState({ selectedMarker: info })
    };
    convertLoc = (place) => {
        axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + place + "&key=" + process.env.REACT_APP_GOOGLE_KEY)
            .then(res => console.log(res));
        //console.log(this.state.allJobs[0].location.lat);
    };
    toFrom = (origin, destination) => {
        //testing Directions API, can't get it to work yet
    };
    render() {
        return (
            <div>
                <div className="map-page">
                    <GoogleMap
                        defaultZoom={14}
                        defaultCenter={{ lat: 40.695210, lng: -74.001623 }}>
                        {this.state.allJobs.map((loc) => (
                        // console.log(loc),
                    <Marker
                        key={loc._id}
                        position={{ lat: parseFloat(loc.location.lat), lng: parseFloat(loc.location.lng) }}
                        onClick={() => this.setSelectedMarker(loc)}
                        />
                        ))}
                    {this.state.selectedMarker && (
                    <InfoWindow
                        position={{
                        lat: parseFloat(this.state.selectedMarker.location.lat),
                        lng: parseFloat(this.state.selectedMarker.location.lng)
                        }}
                        onCloseClick={() => this.setSelectedMarker(null)}
                    >
                    <div>
                        <h4>{this.state.selectedMarker.title}</h4>
                        <p>{this.state.selectedMarker.description}</p>
                    </div>
                    </InfoWindow>)}
                    </GoogleMap>
                    <div className="row">
                        <div className="col-10">
                        {/* <button type="button" className="btn btn-success" onClick={()=> this.convertLoc("106 Court Street, Brooklyn, NY 11201")}> Location Convert </button>
                        <button type="button" className="btn btn-info" onClick={()=> this.toFrom("106 Court Street, Brooklyn, NY 11201", "West 116 St and Broadway, New York, NY 10027")}> Destination Time, transit </button> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Map;