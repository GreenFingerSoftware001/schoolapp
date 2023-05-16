import React from "react";
import ReactDOM from "react-dom";
import Header from "../commons/header";
import RootContainer from "./components/rootpage/rootCont"
import "./styles/teacherHome.css";
import AccountManage from "../commons/accountManage";
import PublishBox from "../commons/modalPub";


class Home extends React.Component {
     render(){
        return (
           <div className="HomeContainer-t1">
             <Header/>
             <RootContainer/>
             <AccountManage/>
             <PublishBox/>
           </div>
        );
     }
}

export default Home;