import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import "../../styles/aboutus.css";
import Layout from '../layout';


const AboutUs= () => {
    return (
        <Layout>
        <MDBJumbotron fluid>
            <MDBContainer className="jumbo2">
                <h2 className="display-4">About Us</h2>
                <p className="lead">Tbrixbiz (also bricks and mortar) refers to a physical presence of an organization or business in a building or other structure. The term brick-and-mortar business is often used to refer to a company that possesses or leases retail shops, factory production facilities, or warehouses for its operations. Therefore, Brixbiz is designed to provide an alternative to big corporations and drive consumer traffic to small mom and pop shops shops in local area in effect helping out the little guys. Help save brick and mortar business with Brixbiz</p>
            </MDBContainer>
        </MDBJumbotron>
        </Layout>
    )
}

export default AboutUs;