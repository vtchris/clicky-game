import React from "react";
import Card from "../GameCard";
import "./gameBoard.css"

const GameBoard = props =>

    (
        <div id="gameBoard">{
            props.Minions.map(minion => <Card key={minion.id} name={minion.name} img={process.env.PUBLIC_URL + minion.image} handleDivClick={props.handleDivClick} id={minion.id} />)}
        </div>

    )

export default GameBoard;        