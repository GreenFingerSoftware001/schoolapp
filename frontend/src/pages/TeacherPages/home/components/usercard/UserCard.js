import React from 'react';
import "./usercard.css"
class UserCardComp extends React.Component {
     render(){
        return(
            <div id="usercard">
                <div id="backfont">

                </div>
                <div id="UserImage"></div>
                <h3 id="Username">UserName</h3>
                <span id="usertype">Profesor de matematica</span>
            </div>
        );

     }
}

export default UserCardComp;