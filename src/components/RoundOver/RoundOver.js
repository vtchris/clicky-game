import React from "react";
import "./roundOver.css";

const RoundOver = (props) => (

    <div id="results-div" className="jumbotron text-center">

        <h1 class="display-4">{props.header}</h1>
        <p className="lead">{props.msg}</p>
        <img src={props.src} alt="RoundOver" />        

    </div>

)

export default RoundOver;