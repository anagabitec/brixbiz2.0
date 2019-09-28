import React from "react";

// Styling
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody } from "mdbreact";
import Layout from '../layout';
import "../../styles/loginCss/bizRegister.css";

import api from '../../api';

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

    // submitHandler = event => {
    //     event.preventDefault();
    //     event.target.className += " was-validated";
    // };
    // changeHandler = event => {
    //     this.setState({ [event.target.name]: event.target.value });
    // };

    handleChangeInputName = async event=> {
        const bizName = event.target.value;
        this.setState({ bizName })
    };
    handleChangeInputWebsite = async event => {
        const website = event.target.value;
        this.setState({ website })
    }
    handleChangeInputAddress = async event => {
        const address = event.target.value;
        this.setState({ address })
    }
    handleChangeInputCity = async event => {
        const city = event.target.value;
        this.setState({ city })
    }
    handleChangeInputState = async event => {
        const state = event.target.value;
        this.setState({ state })
    }
    handleChangeInputZip = async event => {
        const zip = event.target.value;
        this.setState({ zip })
    }
    handleChangeInputPhone = async event => {
        const phone = event.target.value;
        this.setState({ phone })
    }
    handleChangeInputBizCategory = async event => {
        const bizCategory = event.target.value;
        this.setState({ bizCategory })
    }
    handleChangeInputTags = async event => {
        const tags = event.target.value;
        this.setState({ tags })
    }
    handleIncludeBusiness = async (event) => {
        event.preventDefault();
        const { bizName, website, address, city, state, zip, phone, bizCategory, tags } = this.state;
        const payload = { bizName, website, address, city, state, zip, phone, bizCategory, tags };
        console.log(payload)

        await api.addBusiness(payload).then(res => {
            window.alert('Business Added Successfully');
            this.setState({
                bizName: '',
                website: '',
                address: '',
                city: '', 
                state: '',
                zip: '',
                phone: '',
                bizCategory: '',
                tags: ''
            })
        })
    }
    

    render() {
        const { bizName, website, address, city, state, zip, phone, bizCategory, tags } = this.state
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
                                    value={bizName}
                                    onChange={this.handleChangeInputName}
                                   
                                />
                                <MDBInput
                                    label="Website"
                                    icon="envelope"
                                    group
                                    // type="website"
                                    validate
                                    error="wrong"
                                    success="right"
                                    value={website}
                                    onChange={this.handleChangeInputWebsite}
                                    
                                />
                                <MDBInput
                                    label="Address"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right" 
                                    value={address}
                                    onChange={this.handleChangeInputAddress}
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
                                    value={city}
                                    onChange={this.handleChangeInputCity}
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
                                    value={state}
                                    onChange={this.handleChangeInputState}
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
                                    value={zip}
                                    onChange={this.handleChangeInputZip}
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
                                    value={phone}
                                    onChange={this.handleChangeInputPhone}
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
                                    value={bizCategory}
                                    onChange={this.handleChangeInputBizCategory}
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
                                    value={tags}
                                    onChange={this.handleChangeInputTags}
                                    outline
                                />

                                </div>
                                <div className="text-center py-4 mt-3">
                                <MDBBtn onClick={this.handleIncludeBusiness} color="cyan" type="submit">
                                    Submit
                                </MDBBtn>
                                </div>
                            </form>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </Layout>
        );
    }
}

export default FormsPage;