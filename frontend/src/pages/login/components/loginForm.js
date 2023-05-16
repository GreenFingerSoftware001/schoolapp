import React from 'react'
import ReactDOM from 'react-dom';
import "../styles/loginform.css"

class LoginForm extends React.Component {

    render() {
      return(
      <div id='form-holder'>
          <form method="POST" id='loginForm'>
               <h1 className='formtitle'>Tutor<span>Link</span></h1>
               <div className='form-part'>
                  <input type='text' name='field1' formholder='username' className='formfields' id="usernameField"></input>
                  <input type='password' name='field2' formholder='password' className='formfields' id="passwordField"></input>
               </div>
               <input type='submit' value='Login' className='login_btn'></input>
               <div className='form-part'>
                   <button className='btns'>
                         <span>log in using google</span>
                   </button>
                   <button className='btns'>
                         <span>log in using Facebook</span>
                   </button>
               </div>
               <div className='form-part' id="lastpart">
                   <a href="" className='forgotkeys'>Forgot password?</a>
                   <p className='mssg1'>Not user? sign up:<a href='#' className='link1'>Here</a></p>
               </div>
          </form>
      </div>    
    );

    }
  
}

export default LoginForm