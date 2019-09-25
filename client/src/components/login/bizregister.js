import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody } from "mdbreact";
import Layout from '../layout';
import "../../styles/loginCss/bizRegister.css"


class FormsPage extends React.Component {
    state = {
        bizName: "",
        website: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        bizCategory: "",
        tags: ""
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    render() {
        return (
            <Layout>
            <div className="regContainer">
                <MDBContainer>
                    <MDBRow>
                    {/* column below used to center the card */}
                    <MDBCol md="3"></MDBCol>
                        <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">Add Business</p>
                                <div className="grey-text">
                                <MDBInput
                                    label="Business name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                   
                                />
                                <MDBInput
                                    label="Website"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Address"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right" 
                                    outline
                                />
                                <MDBInput
                                    label="City"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right" 
                                    outline
                                />
                                <MDBInput
                                    label="State"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right" 
                                    outline
                                />
                                <MDBInput
                                    label="ZIP"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right" 
                                    outline
                                />
                                <MDBInput
                                    label="Phone Number"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right" 
                                    outline
                                />
                                <MDBInput
                                    label="Type"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right" 
                                    outline
                                />
                                <MDBInput
                                    label="Tags"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right" 
                                    outline
                                />

                                </div>
                                <div className="text-center py-4 mt-3">
                                <MDBBtn color="cyan" type="submit">
                                    Submit
                                </MDBBtn>
                                </div>
                            </form>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
{/*                 
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                                className="black-text">
                                Business Name
                            </label>
                            <input
                                value={this.state.fname}
                                name="fname"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                placeholder="Business name"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterEmailEx2"
                                className="black-text">
                                Website
                            </label>
                            <input
                                value={this.state.lname}
                                name="lname"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterEmailEx2"
                                className="form-control"
                                placeholder="Website"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx3"
                                className="black-text">
                                
                            </label>
                            <input
                                value={this.state.email}
                                onChange={this.changeHandler}
                                type="email"
                                id="defaultFormRegisterConfirmEx3"
                                className="form-control"
                                name="email"
                                placeholder="Contact Phone Number"
                            />
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterPasswordEx4"
                                className="grey-text">
                                City
                            </label>
                            <input
                                value={this.state.city}
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                name="city"
                                placeholder="City"
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterPasswordEx4"
                                    className="grey-text">
                                State
                            </label>
                            <input
                                value={this.state.state}
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                name="state"
                                placeholder="State"
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a valid state.
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterPasswordEx4"
                                className="grey-text">
                                Zip
                            </label>
                            <input
                                value={this.state.zip}
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                name="zip"
                                placeholder="Zip"
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBCol md="4" className="mb-3">
                        <div className="custom-control custom-checkbox pl-3">
                            <input
                                className="custom-control-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                                required
                            />
                            <label className="custom-control-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </MDBCol>
                    <MDBBtn color="primary" type="submit">
                        Submit Form
                </MDBBtn>
                </form> */}
            </div>
        </Layout>
        );
    }
}

export default FormsPage;