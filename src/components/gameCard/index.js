import React from "react";
import "./style.css";

const GameCard = props => (
    <div key={props.id} role="img" className="click-item" onClick={() => props.handleDivClick(props.id)} >
          
        <img alt={props.name} src={props.img} />
    </div>
);

// function GameCard(props){
//     return(
//         <div key={props.id} role="img" className="click-item" onClick={this.props.handleBtnClick}>
//            <img alt={props.name} src={props.img} />
//         </div>
//     )
// }

export default GameCard;