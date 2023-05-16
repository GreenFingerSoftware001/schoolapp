import React from "react";
import { ReactDOM } from "react";
import LeftColumn from "../../../TeacherPages/home/components/leftcomp/left_column";
import RightComponent from "./rightcolumn/rightColumn";
import SC001 from "./CenterPart";

class RS01 extends React.Component {
     render(){
        return(
          <div className="RSCONT">
              <LeftColumn/>
              <SC001/>
              <RightComponent/>
          </div>
        );
     }
}


export default RS01;