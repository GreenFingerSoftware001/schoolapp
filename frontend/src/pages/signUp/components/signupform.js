import React from "react";
import ReactDOM from "react-dom";
import "../styles/signupform.css";


class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            UserInfo : {
                name: "",
                lastname: "",
                username: "",
                email: "",
                Student: false,
                Teacher: false,
                image: "",
                password: "",
                conf_psswd: "",
            }
        };
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event){
        this.setState({name: event.target.name})
        this.setState({lastname: event.target.lastname})
        console.log(this.state.name) 
    }

     render(){
        return(
            <div>
              <form method="POST" className="signupform" onSubmit={this.handleSubmit}>
                  <div className="mssg-box">
                      <h1 className="signup-title">Tutor<span className="title-part">Link</span></h1>
                      <p>Registrate para ser parte de nuestra comunidad</p>
                  </div>
                  <div className="part">
                      <input type="text" className="name_field" name="name" placeholder="Nombre" value={this.state.UserInfo.name} onChange={this.handleChange}></input>
                      <input type="text" className="lastname_field" placeholder="Apellido" value={this.state.lastname} onChange={this.handleChange}></input>
                  </div>
                  <div className="part1">
                      <input type="text" className="username_data" placeholder="Nombre de usuario"></input>
                      <input type="text" className="email_field" placeholder="Email"></input>
                  </div>
                  <div className="part3">
                      <input type="password" className="psswd" placeholder="password"></input>
                      <input type="password" className="repeat_psswd" placeholder="confirm password"></input>
                  </div>

                  <span class="condition">
                    Al registrarte, aceptas nuestras Condiciones, 
                    nuestra Política de privacidad y nuestra Política de cookies.
                  </span>
                  <input type="submit" value="Registrarse" className="SubmitButton"></input>  
              </form> 
            </div>
        );
     }
}


export default SignupForm;


