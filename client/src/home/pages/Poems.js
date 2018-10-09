
import React, { Component } from "react";
import axios from "axios";
import css from "./pagestyles.js";

export default class Poems  extends Component{
  state={
    poems : [],
    recitation: [],
  }
  
  generateNewSession(){
    alert("Generating new session");
  }

  saveSession(){
    if(this.state.poems.length <=2){
      alert("Nothing to save");
      return;
    }
    axios({
      method:"post",
      url:"/api/save/session",
      data:{
        username:this.props.username,
        field   :"poems",
        datum :JSON.stringify(this.state.poems),
      },
    }).then((resp)=>{
      if(resp.status===200){
        console.log("+++ Successiful");
      }else{
        console.log("+++ Unsuccessiful");
      }
    }).catch( (err) =>{
      console.log("+++ error: "+ err);
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
              <a style={css.header}>Poems</a>
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
            <li className="nav-item"> 
              <a style={css.li_a_css} onClick={()=>{this.recite()}} >Recite</a>
            </li>
          </ul>
        </div>
        <div> 
          <p>Reciting Poems Coming maybe soon maybe not</p>
        </div>
      </div>
    )
  };
}

