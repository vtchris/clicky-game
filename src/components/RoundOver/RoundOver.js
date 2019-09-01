import React from "react";
import "./roundOver.css";

const RoundOver = (props) => (

    <div id="results-div" className="jumbotron">

        <h1 class="display-4">{props.header}</h1>
        <p><img src={props.src} alt="RoundOver" />{props.msg}</p>

    </div>

)

export default RoundOver;