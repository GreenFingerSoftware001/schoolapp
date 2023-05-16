import React from "react";
import ReactDOM from "react-dom";
import Card1 from "../card1/card1";
import "./central.css"

class CentralColumn extends React.Component {
    render(){
        return(
            <div className="central-container">
                <Card1/>
            </div>
        );
    }
}

export default CentralColumn;