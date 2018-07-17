
import React, { Component } from "react";
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
        <h3>Words</h3>
        <div>
          <button style={css.btncss} onClick={()=>{this.generateNewSession()}} >Generate</button>
          <button style={css.btncss} onClick={()=>{this.saveSession()}} >Save</button>
          <button style={css.btncss} onClick={()=>{this.restoreSession()}} >Restore</button>
          <button style={css.btncss} onClick={()=>{this.recite()}} >Recite</button>
        </div>
        <div>
          <p>Words</p>
        </div>
      </div>
    )
  };
}

const css={ 
  btncss:{
    border:"1px solid black",
    fontWeight:"600",
    marginLeft: 4,
    fontSize: 20,
    backgroundColor: "#007580",
    borderRadius:5,
  },
}

