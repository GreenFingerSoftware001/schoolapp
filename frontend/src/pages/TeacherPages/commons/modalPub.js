import React from "react";
import ReactDOM from "react-dom";
import PubComp from "./CompPub";
import "./styles/published.css"

class PublishBox extends React.Component {

     render(){
        return(
          <div className="PublishBox">
              <PubComp/>
          </div>
        );
     }
}

export default PublishBox;