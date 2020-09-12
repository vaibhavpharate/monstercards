import React from "react";
import './card.style.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={`https://robohash.org/${props.singleData.id}?set=set1&size=180x180`} alt=""/>
            <h3>Name: {props.singleData.name}</h3>
            <p>Email: {props.singleData.email}</p>
        </div>
    )
}

export default Card;