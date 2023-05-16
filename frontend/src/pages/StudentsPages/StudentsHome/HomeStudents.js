import React from "react";
import ReactDOM from "react-dom";
import Header from "../../TeacherPages/commons/header";
import RS01 from "./components/RootPart";
import "./styles/HomeStudent.css";
import PublishBox from "../../TeacherPages/commons/modalPub";


class HomeStudent extends React.Component {
     render(){
        return(
           <div className="HomeStudentPage">
               <Header/>
               <RS01/>
               <PublishBox/>
           </div>
        );
     }
}

export default HomeStudent;