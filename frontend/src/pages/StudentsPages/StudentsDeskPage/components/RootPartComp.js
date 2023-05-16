import React from "react";
import ReactDOM from "react-dom";
import LeftPartComponent from "../components/LeftPartDesk";
import CenterCompPart from "./centerPart";
import RightComponent from "./RightPartDesk";


class RootPartCont extends React.Component {
     render(){
        return(
           <div className="RootPartContainer">
               <LeftPartComponent/>
               <CenterCompPart/>
               <RightComponent/>
           </div>
        );
     }
}

export default RootPartCont;