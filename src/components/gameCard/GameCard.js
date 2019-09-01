import React from "react";
import "./gameCard.css";

const GameCard = props => (
    <div key={props.id} role="img" className="click-item" onClick={() => props.handleDivClick(props.id)} >
          
        <img alt={props.name} src={props.img} />
    </div>
);

export default GameCard;