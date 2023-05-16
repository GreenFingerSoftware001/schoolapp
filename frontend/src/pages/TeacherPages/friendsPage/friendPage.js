import React from "react";
import ReactDOM from "react-dom";
import Header from "../commons/header";
import RootPart from "./components/rootside";
import "./styles/friendStyle.css";

class FriendPage extends React.Component {
    render(){
        return(
            <div className="GenCont">
                <Header/>
                <RootPart/>
            </div>
        );
    }
}
                              
export default FriendPage;