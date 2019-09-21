import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import googlemaps from "./googlemaps.jpg";


const JumbotronPage = () => {
    return (
        <MDBContainer className="mt-5 text-center">
            <MDBRow>
                
                <MDBCol>
                    <MDBJumbotron className="text-center">
                        <MDBCol md="6">
                            <div className="active-pink-3 active-pink-4 mb-4">
                                <input className="form-control" type="text" placeholder="Search by item or business" aria-label="Search" />
                            </div>
                        </MDBCol>

                        <MDBCardImage
                            src={googlemaps}
                            className="img-fluid"
                        />
                        {/* <MDBCardBody>
                            <MDBCardTitle className="indigo-text h5 m-4">
                                Photography
              </MDBCardTitle>
                            <MDBCardText>
                                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>

                            <MDBCol className="d-flex justify-content-center mt-4" md="12">
                                <MDBCol md="3" className="d-flex justify-content-around">
                                    <a href="#"><MDBIcon
                                        fab
                                        icon="linkedin-in"
                                        className="grey-text"
                                        size="lg"
                                    /></a>
                                    <a href="#"><MDBIcon
                                        fab
                                        icon="twitter"
                                        className="grey-text"
                                        size="lg"
                                    /></a>
                                    <a href="#"><MDBIcon
                                        fab
                                        icon="facebook-f"
                                        className="grey-text"
                                        size="lg"
                                    /></a>
                                </MDBCol>
                            </MDBCol>

                        </MDBCardBody> */}
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronPage;