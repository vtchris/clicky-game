import React from "react";
import "./header.css";

const Header = props => (
    <div id="header" className="bg-primary text-light">
       <h3 className="display-4 text-center">World Dominiation: Minion Recruiting</h3>
        <label>Score: {props.clicks}</label>
        <label>High Score: {props.highScore}</label>
        <label>Wins: {props.wins}</label>
        <label>Losses: {props.losses}</label>    
    </div>
);

export default Header;