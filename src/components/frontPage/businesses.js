import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import butcher from "./butcher.jpg";
import florist from "./florist.jpg";
import bakeries from "./bakeries.jpg";

class HoverPage extends React.Component {
    render() {
        return (
            <MDBContainer className="jumbo2 mt-5">
                
                <MDBRow>
                    <MDBCol md="4">
                        <MDBView hover zoom>
                            <img src={butcher} className="img-fluid" alt="Butcher Shop"
                            />
                            <MDBMask className="flex-center">
                                <p className="white-text">Butcher</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBView hover zoom>
                            <img src={bakeries} className="img-fluid" alt="Butcher Shop"
                            />
                            <MDBMask className="flex-center">
                                <p className="Green-text">Backeries</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBView hover zoom>
                            <img src={butcher} className="img-fluid" alt="Butcher Shop"
                            />
                            <MDBMask className="flex-center">
                                <p className="white-text">Butcher</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mt-4">
                    <MDBCol md="4">
                        <MDBView hover zoom>
                            <img src={butcher} className="img-fluid" alt="Butcher Shop"
                            />
                            <MDBMask className="flex-center">
                                <p className="white-text">Butcher</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBView hover zoom>
                            <img src={florist} className="img-fluid" alt="Butcher Shop"
                            />
                            <MDBMask className="flex-center">
                                <p className="white-text">Butcher</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBView hover zoom>
                            <img src={butcher} className="img-fluid" alt="Butcher Shop"
                            />
                            <MDBMask className="flex-center">
                                <p className="white-text">Butcher</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default HoverPage;