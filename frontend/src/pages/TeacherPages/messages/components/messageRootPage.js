import React from "react";
import ReactDOM  from "react-dom";
import LeftEmailComponet from "./MessageLeftColumn";
import CentralComponent from "./CentralComp";

class RootPage extends React.Component {
     render(){
        return (
            <div className="RootPageCont">
                <LeftEmailComponet/>
                <CentralComponent/>
            </div>
        );
     }
}

export default RootPage;