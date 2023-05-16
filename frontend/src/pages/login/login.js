import React from "react";
import ReactDOM from 'react-dom'
import LoginForm from "./components/loginForm";

import "./styles/login.css"

class LoginPage extends React.Component {
     render () {
         return (
            <div className="logForm">
                <LoginForm/>
            </div>
         );
     }
}

export default LoginPage;
