import React from "react";
import ReactDOM from "react-dom";
import CentralContainer from "./CentralCompPage";
import LeftComponent from "./LeftFriendColumn";

class RootPart extends React.Component {
     render(){
        return(
            <div className="RootCont">
                <LeftComponent/>
                <CentralContainer/>
            </div>
        );
     }
}

export default RootPart;