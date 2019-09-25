import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../../styles/footer.css";

const FooterPage = () => {
    return (
        <MDBFooter color="#1b5e20 green darken-4" className="myFooter font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">brixbiz</h5>
                        <p>
                            Serving Greenpoint and Williamburg
            </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">About Us</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Sign</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Register</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Business</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Brixbiz</a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;