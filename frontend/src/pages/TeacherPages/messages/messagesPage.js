import React from "react";
import ReactDOM from "react-dom";
import Header from "../commons/header";
import RootPage from "./components/messageRootPage";
import ModalContentEdit from "./components/ModalEditComponent";
import "./styles/messages.css";

class MessagePages extends React.Component {
     render(){
         return(
            <div className="page_cont">
                <Header/>
                <RootPage/>
                <ModalContentEdit/>
            </div>
         );
     }
}

export default MessagePages;