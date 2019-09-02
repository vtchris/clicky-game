import React from "react";
import "./header.css";

const Header = props => (
    <div id="header" className="bg-primary text-light">
        <h3 className="display-4 text-center">World Dominiation: Minion Recruiting</h3>
        <div className="row">
            <div className="col col-md-3 col-sm-12">
                <label>Score: <span>{props.clicks}</span></label>
            </div>
            <div className="col col-md-3 col-sm-12">
                <label>High Score: <span>{props.highScore}</span></label>
            </div>
            <div className="col col-md-3 col-sm-12">
                <label>Wins: <span>{props.wins}</span></label>
            </div>
            <div className="col col-md-3 col-sm-12">
                <label>Losses: <span>{props.losses}</span></label>
            </div>
        </div>

    </div>
);

export default Header;
