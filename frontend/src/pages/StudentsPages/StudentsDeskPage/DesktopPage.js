import React from "react";
import ReactDOM from "react-dom";
import RootPartCont from "./components/RootPartComp";
import Header from "../../TeacherPages/commons/header";
import "./styles/Desktop.css"

class StudentDesktop extends React.Component {
     render(){
        return(
            <div className="DesktopPage">
                <Header/>
                <RootPartCont/>
            </div>
        );
     }
}

export default StudentDesktop;