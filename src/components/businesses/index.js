import React from "react";
import List from "./components/List"
import "./style.css";

// This section is for another page having more views and business info for user

const types =[
    {
        id: 1,
        type: "Bakeries"
    },
    {
        id: 2,
        type: "Butcher Shops"
    },
    {
        id: 3,
        type: "Florist"
    },
    {
        id: 4,
        type: "Pharmacy"
    },
    {
        id: 5,
        type: "Grocery Stores"
    }
]

// lecture 8-24-19 3:10
function typesList(){
    return <List types={types} />;
}

function BusinessCard(prop) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={prop.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name: </strong> {props.name}
                    </li>
                    <li>
                        <strong>Type: </strong> {props.type}
                    </li>
                    <li>
                        <strong>Location: </strong> {props.location}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BusinessCard;

