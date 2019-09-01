import React from "react";
import Rules from "../Rules"
import RoundOver from "../RoundOver/RoundOver";

const ResultPanel = props => {
    let message = "";

    switch (props.display) {
        case "rules":
            return <Rules />

        case "win":
            message="You could take over the world, but can you do it again?"
            return <RoundOver src="/images/gru.jpg" header="Congratulations!" msg={message} />

        case "loss":
            message="You need to do MUCH better than that!"
            return <RoundOver src="/images/nefario.jpg" header="Don't over-REACT!" msg={message} />

        default:
            return <Rules />
    }
}

export default ResultPanel;