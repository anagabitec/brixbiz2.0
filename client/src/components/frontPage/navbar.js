import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon} from "mdbreact";
import {Link} from 'react-router-dom';
import "../../styles/navbar.css"

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
                    <MDBNavLink to="/">
                        <strong className="white-text">brixbiz</strong>
                        </MDBNavLink>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            
                            {/* <MDBNavItem active> */}
                                {/* <Link to="/" className="active"> */}
                                {/* <MDBNavLink to="/">Home
                                </MDBNavLink> */}
                                {/* </Link> */}
                            {/* </MDBNavItem> */}
                            
                            <MDBNavItem>
                                <MDBNavLink> <Link to={`/aboutus`} className="active">About</Link>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>

                                <MDBNavLink> <Link to={`/discover`} className="active">Discover </Link>

                                </MDBNavLink>
                            </MDBNavItem>
                           
                            {/* <MDBNavItem>
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
                            </MDBNavItem> */}
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon icon="search" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon far icon="envelope" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user-plus" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu right basic>
                                        <MDBDropdownItem ><Link to={`/login`} className="active">Login/Register</Link>
                                      </MDBDropdownItem>
                                        <MDBDropdownItem> <Link to={`/bizregister`} className="active"> Add Business</Link>
                                        </MDBDropdownItem>
                                        
                                        <MDBDropdownItem href="#!">Farmer's Markets</MDBDropdownItem>
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