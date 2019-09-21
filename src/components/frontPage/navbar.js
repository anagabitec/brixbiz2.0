import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import {Link} from 'react-router-dom'


class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <>
                <MDBNavbar color="black" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">Brixbiz</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink><Link to={`/frontPage`} className="active">Home</Link>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink> <Link to={`/aboutus`} className="active">About Us</Link>
                                </MDBNavLink>
                            </MDBNavItem>
                           
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">Businessess</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="login.js">Bakeries</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Butcher</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Florist</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Fish Market</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Deli</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Hardware Store</MDBDropdownItem>

                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon fab icon="twitter" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon fab icon="google-plus-g" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="sign-in-alt"/>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem ><Link to={`/login`} className="active">Login</Link>
        ``                              </MDBDropdownItem>
                                        <MDBDropdownItem> <Link to={`/busregister`} className="active"> Business Register</Link>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                    
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </>
        );
    }
}

export default NavbarPage;