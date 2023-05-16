import React from "react";
import ReactDOM from "react-dom";
import SignupForm from "./components/signupform";
import "./styles/signup.css"

class SignupPage extends React.Component {
    render() {
        return(
          <div className="general_box">
              <SignupForm/>
          </div>
         
        );
    }
}

export default SignupPage;