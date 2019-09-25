import React from "react";
import { MDBJumbotron, MDBContainer, MDBMedia } from "mdbreact";
import "../../styles/aboutus.css";
import Layout from '../layout';
import bricksandmotar from "./bricksandmotar.png"

const AboutUs= () => {
    return (
        <Layout>    
        <MDBJumbotron fluid className='aboutUsView'>
            <MDBContainer className="jumbo2">
                    <MDBMedia left className="mr-3" href="#">
                    <figure className="figure">
                        <img src={bricksandmotar} className="figure-img img-fluid z-depth-1"
                            alt="" style={{ width: '400px' }} />
                        <figcaption className="figure-caption">
                            A caption for the above image.
                    </figcaption>
                    </figure>
                    </MDBMedia>
                <h2 className="display-4">About Us</h2>
                <p className="lead">
                    Brick and mortar (also bricks and mortar or B&M) refers to a physical presence of an organization or business in a building or other structure. The term brick-and-mortar business is often used to refer to a company that possesses or leases retail shops, factory production facilities, or warehouses for its operations.[1] More specifically, in the jargon of e-commerce businesses in the 2000s, brick-and-mortar businesses are companies that have a physical presence (e.g., a retail shop in a building) and offer face-to-face customer experiences.We are a small group of developers who are making it our business to prop up small business of America. Our inspiration comes from millions of entrepreneurs who are competing against big corporations who are doing everything they can to squeeze them out. brixbiz is designed to bring bricks and mortar shops to the consumer in the new age. Our goal is to provide an alternative to big corporations and drive consumer traffic to small mom and pop shops in local area, in effect helping out the little guys and putting money back into communities. Prop up brick and mortar business with brixbiz</p>
                {/* add an image */}
            </MDBContainer>
        </MDBJumbotron>
        </Layout>
    )
}

export default AboutUs;