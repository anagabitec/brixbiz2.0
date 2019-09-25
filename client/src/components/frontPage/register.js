import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Pills extends Component {
    state = {
        items: {
            default: "1",
        }
    };

    togglePills = (type, tab) => e => {
        e.preventDefault();
        if (this.state.items[type] !== tab) {
            let items = { ...this.state.items };
            items[type] = tab;
            this.setState({
                items
            });
        }
    };

    render() {
        return (
            <MDBContainer className="mt-4">
                <MDBRow>
                    <MDBCol md="12">
                        <h2>Join Us</h2>
                        <MDBNav className="mt-5 nav-pills">
                            <MDBNavItem>
                                <MDBNavLink to="#" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")} >
                                    Join Us
                  </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")} >
                                    Business Owners
                  </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")} >
                                    Carriers
                  </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={this.state.items["default"]}>
                            <MDBTabPane tabId="1">
                                <p>
                                    Join our platform and be able to rate your favorite mom and popshops
                                    Order deliveries with our registered businesses
                                </p>
                            </MDBTabPane>
                            <MDBTabPane tabId="2">
                                <p>
                                    <p>Ready to grow your business? Join our platform</p>
                                    <p>Become a partner and create an online presence</p>
                                    <p>List your inventory online and make it easy for local consumer to find you by what you have in your store</p>
                                    <p>Participate in our mobile order and delivery service</p>
                                </p>
                            </MDBTabPane>
                            <MDBTabPane tabId="3">
                                <p>Become a courier</p>
                                <p>brixbiz couriers have a flexible schedule and the ability to make more per delivery with higher average order fees and multiple stops </p>
                            </MDBTabPane>
                        </MDBTabContent>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Pills;











// // import React from 'react';
// // import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

// // const CardExample = () => {
// //     return (
// //         <MDBRow> 
// //         <MDBCol>
// //             <MDBCard style={{ width: "22rem" }}>
// //                 <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
// //                 <MDBCardBody>
// //                     <MDBCardTitle>Join our platform</MDBCardTitle>
// //                     <MDBCardText>
// //                        Join our platform and be able to rate your favorite mom and popshops
                    
// //                   Place mobile orders with your local shops for pick up
// //                   Order deliveries with our registered businesses
// //           </MDBCardText>
// //                     <MDBBtn href="#">MDBBtn</MDBBtn>
// //                 </MDBCardBody>
// //             </MDBCard>
// //         </MDBCol>
// //         <MDBCol>
// //             <MDBCard style={{ width: "22rem" }}>
// //                 <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
// //                 <MDBCardBody>
// //                         <MDBCardTitle>Ready to grow your business?</MDBCardTitle>
// //                     <MDBCardText>
// //                         Become a partner and create an online presence
// //                         List your inventory online and make it easy for local consumer to find you by what you have in your store
// //                         Participate in our mobile order and delivery service
// //          </MDBCardText>
// //                     <MDBBtn href="#">MDBBtn</MDBBtn>
// //                 </MDBCardBody> 
// //             </MDBCard>
// //         </MDBCol>
// //             <MDBCol>
// //                 <MDBCard style={{ width: "22rem" }}>
// //                     <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
// //                     <MDBCardBody>
// //                         <MDBCardTitle>Become a courier</MDBCardTitle>
// //                         <MDBCardText>
// //                             Become a courier
// //                             brixbiz couriers have a flexible schedule and the ability to make more per delivery with higher average order fees and multiple stops
// //           </MDBCardText>
// //                         <MDBBtn href="#">MDBBtn</MDBBtn>
// //                     </MDBCardBody>
// //                 </MDBCard>
// //             </MDBCol>
// //         </MDBRow>
// //     )
// // }

// // export default CardExample;


// // function Register() {
// //     return (
// // // users
// //         <div>
// //         <div className="container">
// //             <div className="row">
// //                 <div className="col-8">
// //                     <p>Join our platform and be able to rate your favorite mom and popshops
// //                     </p>
// //                     <p>Place mobile orders with your local shops for pick up</p>
// //                     <p>Order deliveries with our registered businesses</p>
// //                     </div>
// //                 <div className="col-4">User Image</div>
// //             </div>
// //         </div>
// // {/* // businesses */} 
// //         <div className="container">
// //             <div className="row">
// //                 <div className="col-4">Business Image</div>
// //                 <div className="col-8">
// //                     <p>Ready to grow your business? Join our platform</p>
// //                     <p>Become a partner and create an online presence</p>
// //                     <p>List your inventory online and make it easy for local consumer to find you by what you have in your store</p>
// //                     <p>Participate in our mobile order and delivery service</p>
// //                 </div>
// //             </div>
// //         </div>
// // {/* // couriers */}
// //         <div className="container">
// //             <div className="row">
// //                 <div className="col-8">
// //                     <p>Become a courier</p>
// //                     <p>brixbiz couriers have a flexible schedule and the ability to make more per delivery with higher average order fees and multiple stops </p>
// //                 </div>
// //                 <div className="col-4">Courier Image</div>
// //             </div>
// //         </div>
// //         </div>
// //     );
// // }

// // export default Register;