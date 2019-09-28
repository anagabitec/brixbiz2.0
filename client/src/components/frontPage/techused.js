import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBMedia } from "mdbreact";
import react from "../frontPage/images/react.png";
import github from "../frontPage/images/github.jpg";
import mongo from "../frontPage/images/mongo.png";
import node from "../frontPage/images/node.png";
import jquery from "../frontPage/images/jquery.png";
// import firebase from "../frontPage/images/firebase.png";
import MDB2 from "../frontPage/images/MDB2.png";

import "../../styles/techused.css"




const gridExamplesPage = () => {
    return (
        <MDBContainer className="containertech">
            <h2>Technology Used</h2>
            <MDBRow className="rowtech d-flex justify-content-center">
                <MDBCol lg="4">
                    <MDBMedia object src={react} alt="React" /></MDBCol>
                <MDBCol lg="4">
                    <MDBMedia object src={github} alt="GitHub" /></MDBCol>
                <MDBCol lg="4">
                    <MDBMedia object src={mongo} alt="Mongo" /></MDBCol>
                
            </MDBRow>
            <MDBRow className="rowtech">
                <MDBCol lg="4">
                    <MDBMedia object src={jquery} alt="JQuery" /></MDBCol>
                <MDBCol lg="4">
                    <MDBMedia object src={node} alt="Node JS" /></MDBCol>
                <MDBCol lg="4">
                    <MDBMedia object src={MDB2} alt="MDB Bootstrap" height="70px"/></MDBCol>
            </MDBRow>
            {/* <MDBRow>
                <MDBCol lg="6">
                    <MDBMedia object src={jquery} alt="" /></MDBCol>
                <MDBCol lg="6">
                    <MDBMedia object src={firebase} alt="" /></MDBCol>
            </MDBRow> */}
            </MDBContainer>
    );
}

export default gridExamplesPage;
