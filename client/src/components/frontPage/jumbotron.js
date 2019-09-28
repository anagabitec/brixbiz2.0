import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {Link} from 'react-router-dom';
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
                        <div className="active-pink-3 active-pink-4 mb-4 search">
                            <input className="form-control" type="text" placeholder="Search local business inventory" aria-label="Search" />
                        </div>
                        <Link to='/discover'>
                            <button type="button" class="btn btn-dark-green">Search brixbiz</button>
                        </Link>
                        <Link to='/discover'> 
                            <button type="button" class="btn btn-dark-green" >Discover mode</button>
                        </Link>
                    </MDBJumbotron>
                </MDBCol>
                
            </MDBRow>
        </MDBContainer>
        </div>
    )
}

export default JumbotronPage;