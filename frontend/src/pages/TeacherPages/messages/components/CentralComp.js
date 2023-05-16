import React from "react";
import ReactDOM from "react-dom";

class CentralComponent extends React.Component{
    render(){
        return(
            <div className="b-holder">
                <div className="divHolder">
                    <div className="holders">
                        <span>Principal</span>
                    </div>
                    <div className="holders">
                        <span>Promociones</span>
                    </div>
                    <div className="holders">
                        <span>Social</span>
                    </div>
                </div>
                <div className="E-cont">
                    
                </div>
            </div>
        );
    }
}

export default CentralComponent;