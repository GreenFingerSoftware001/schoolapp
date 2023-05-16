import React from "react";
import LeftColumn from "../leftcomp/left_column";
import CentralColumn from "../center/center";
import RightColumn from "../rightcolumn/right_column";
import "./root.css"


class RootContainer extends React.Component {
     render(){
        return (
               <div className="general_cont">
                   <LeftColumn/>
                   <CentralColumn/>
                   <RightColumn/>
               </div> 
        );
     }
}

export default RootContainer;