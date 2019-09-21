import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import backgroundimg from "../../backgroundimg.jpg";
import "../../styles/jumbotron.css";

const JumbotronPage = () => {
    return (
        <MDBContainer className="jumbo mt-5 text-center">
            <MDBRow >
                {/* <img src={backgroundimg} style={{width:"100%"}}/> */}
                <MDBCol>
                    
                    <MDBJumbotron >
                        
                        <h1 className="display-4">brixbiz</h1>
                        <p className="lead">
                            Re-discover America's Small Business
                        </p>
                        <hr className="my-2" />
                        <p>
                            Now serving Williamsburg and Greenpoint 
                        </p>
                        <p className="lead">
                            
                        </p>
                        
                    </MDBJumbotron>
                </MDBCol>
                
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronPage;