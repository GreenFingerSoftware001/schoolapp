import React from "react";
import ReactDOM from "react-dom";
import Header from "../../TeacherPages/commons/header";
import RootHolder from "./components/RootHolder"
import "./styles/page1.css";


class Page1 extends React.Component {
    render(){
        return(
           <div className="Page1Component">
               <Header/>
               <RootHolder/>
           </div>
        );
    }
}

export default Page1;