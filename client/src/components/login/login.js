import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from "mdbreact";
import Layout from '../layout';
import "../../styles/loginCss/login.css"
// import "../../styles/jumbotron.css";

const LoginPage = () => {
    return (
        <Layout>
            <MDBContainer fluid className="backgroundlogin">
                <MDBContainer>
                    <MDBRow className='loginForm'>
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                        <h3 className="my-3">
                                            <MDBIcon icon="lock" /> Login
                                        </h3>
                                    </MDBCardHeader>
                                    <form>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Type your email"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Type your password"
                                                icon="lock"
                                                group
                                                type="password"
                                                validate
                                            />
                                        </div>

                                        <div className="text-center mt-4">
                                            <MDBBtn
                                                color="light-blue"
                                                className="mb-3"
                                                type="submit">
                                                Login
                                            </MDBBtn>
                                        </div>
                                    </form>
                                    <MDBModalFooter>
                                        <div className="font-weight-light">
                                            <p>Not a member? Sign Up</p>
                                            <p>Forgot Password?</p>
                                        </div>
                                    </MDBModalFooter>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer> 
            </MDBContainer>
        </Layout>
    );
};

export default LoginPage;