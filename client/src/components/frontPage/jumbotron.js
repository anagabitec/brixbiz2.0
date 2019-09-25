import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import backgroundimg from "../../backgroundimg.jpg";
import "../../styles/jumbotron.css";

const JumbotronPage = () => {
    return (
        <div className='view1'>
        <MDBContainer className="jumbo mt-5 text-center">
            <MDBRow >
                {/* <img src={backgroundimg} style={{width:"100%"}}/> */}
                <MDBCol>
                    
                    <MDBJumbotron >
                        
                        <h1 className="display-4">brixbiz</h1>
                        <p className="lead">
                            Discover America's Small Business
                        </p>
                        {/* <hr className="my-2" />
                        <p>
                            Now serving Williamsburg and Greenpoint 
                        </p> */}
                        <div className="active-pink-3 active-pink-4 mb-4 search">
                                <input className="form-control" type="text" placeholder="Search local business inventory" aria-label="Search" />
                        </div>
                        <button type="button" class="btn btn-dark-green">Search brixbiz</button>
                        <button type="button" class="btn btn-dark-green">Discover mode</button>
                        
                    </MDBJumbotron>
                </MDBCol>
                
            </MDBRow>
        </MDBContainer>
        </div>
    )
}

export default JumbotronPage;