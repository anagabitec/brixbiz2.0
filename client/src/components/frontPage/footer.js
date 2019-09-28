import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../../styles/footer.css";
import jquery from "../frontPage/images/jquery.png";
import Mat from "../frontPage/images/Mat.jpg";
import Gabi from "../frontPage/images/Gabi.jpg";

const FooterPage = () => {
    return (
        <MDBFooter className="myFooter font-small pt-4 mt-4">
            <MDBContainer fluid className="text-md-center">
                <MDBRow>
                    <MDBCol md="4">
                        <h5 className="title">brixbiz</h5>
                        <p>
                            Serving Greenpoint and Williamburg
            </p>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title">Join Us</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Sign In</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Register</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Business</a>
                            </li>
                            
                        </ul>
                    </MDBCol>
                    
                    
                    
                    <MDBCol className="footerpic md-4 align-center">
                        <h5 className="OurTeam">Our Team</h5>
                     <MDBRow className="ourteam">  
                        
                            <a href="https://www.linkedin.com/in/matbednara/"><img src={Mat} className="img1 rounded-circle" alt="Mat Badnara" width="100" height="100"/>
                            <figcaption>Mat Bednara</figcaption></a>
                        
                        
                        <a href="https://www.linkedin.com/in/ana-gabriela-menezes-19b11194/"><img src={Gabi} className="img2 rounded-circle" alt="Gabi Menezes" width="100" height="100" />
                         <figcaption>Gabi Menezes</figcaption></a>
                    
                </MDBRow>
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