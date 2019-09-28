import React from "react";
import { MDBCol } from "mdbreact";

const SearchPage = (props) => {
    console.log(props);
    return (
        <MDBCol md="6">
            <div className="active-pink-3 active-pink-4 mb-4">
                <input className="form-control" type="text" placeholder={props.children} aria-label="Search" />
            </div>
        </MDBCol>
    );
}


export default SearchPage;


// function Search (term) {
    // if db Search Product tbl = null{
    //  Search Business Categories tbl}
        // console.log('Could not find businesses with searched term. Please try a different term')
    // else function findBusiness(term)
// function findBusinesses(term){
    // join tables to get the results then
    // get request
//}

