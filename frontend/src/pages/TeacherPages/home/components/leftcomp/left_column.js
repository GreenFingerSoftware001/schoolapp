import React from "react";
import ReactDOM from "react-dom";
import UserCardComp from "../usercard/UserCard";
import "./left_column.css";
import NewObjectComponent from '../newObject/NewObject';
import ClassesCardComponent from '../clascard/classesCard';
import OComponent from '../other/other'

class LeftColumn extends React.Component {
   
    render(){
      return (
           <div className="leftColumn">
               <UserCardComp/>
               <NewObjectComponent/>
               <ClassesCardComponent/>
               <OComponent/>
            </div>
         );
    }
}

export default LeftColumn;