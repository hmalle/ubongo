
import React, { Component } from "react";
import css from "./pagestyles.js";
import axios from "axios";

export default class Words  extends Component{
  state={
    words : [],
    recitation: [],
  }
  
  generateNewSession(){
    alert("Generating new session");
  }

  saveSession(){
    if(this.state.words.length <=2){
      alert("Nothing to save");
      return;
    }
    axios({
      method:"post",
      url:"/api/save/session",
      data:{
        username:this.props.username,
        field   :"words",
        datum :JSON.stringify(this.state.words),
      },
    }).then((resp)=>{
      if(resp.status===200){
        console.log(">>> Successiful");
      }else{
        console.log(">>> Unsuccessiful");
      }
    }).catch((err) =>{
      console.log(">>> error: "+ err);
    });
  }  restoreTraining(){
    alert("restoring previous training");
  }
  
  recite(){
    alert("Training in session");
  }

 render(){
    return(
      <div>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a style={css.header}>Words</a>
            </li>
            <li className="nav-item">
              <a style={css.li_a_css} onClick={()=>{this.generateNewSession()}} >Generate</a>
            </li>            
            <li className="nav-item">
              <a style={css.li_a_css} onClick={()=>{this.saveSession()}} >Save</a>
            </li>
            <li className="nav-item">
              <a style={css.li_a_css} onClick={()=>{this.restoreSession()}} >Restore</a>
            </li>            
            <li className="nav-item"> <a style={css.li_a_css} onClick={()=>{this.recite()}} >Recite</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>No content here</h2>
        </div>
      </div>
    )
  };
}

