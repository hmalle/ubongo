
import React, { Component } from "react";
import axios from "axios";
import ImagesDisplay from "../components/ImagesDisplay";
import css from "./pagestyles.js";

export default class People  extends Component{
  state={
    folder : "/people/",
    people : [],
    recitation: [],
  }
 
  shuffle(array){
    let i=0, j=0, temp=null;
    for( i=array.length-1; i>0;i-=1){
      j = Math.floor(Math.random()*(i+1));
      temp = array[i];
      array[i]= array[j];
      array[j]=  temp;
    }
  }

  generateNewSession(){
    let randArray = [];
    for(let iter=1; iter<=20; iter++){
      randArray.push(iter);
    }
    this.shuffle(randArray);
    this.setState({
      people: randArray,
    });
  }

  saveSession(){
    if(this.state.people.length <=2){
      alert("Nothing to save");
      return;
    }
    axios({
      method:"post",
      url:"/api/save/session",
      data:{
        username:this.props.username,
        field   :"people",
        datum :JSON.stringify(this.state.people),
      },
    }).then((resp)=>{
      if(resp.status===200){
        console.log(">>> Successiful");
      }else{
        console.log(">>> Unsuccessiful");
      }
    }).catch( (err) =>{
      console.log(">>> error: "+ err);
    });
  }  

  restoreSession(){
    axios({
      method:"post",
      url:"/api/retrieve/session",
      data:{
        username:this.props.username,
        field   :"people",
      },
    }).then((resp)=>{
      console.log(">>> Response length: "+ JSON.parse(resp.data.data).length);
      this.setState({ people: JSON.parse(resp.data.data) });
    }).catch( (err) =>{
      console.log(">>> error: "+ err);
    });
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
              <a style={css.header}>Names/Faces</a>
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
          <ImagesDisplay images={this.state.people} folder={this.state.folder}/>
        </div>
      </div>
    )
  };
}

