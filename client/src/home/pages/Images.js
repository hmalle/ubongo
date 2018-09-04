
import React, { Component } from "react";
import axios from "axios";
import ImagesDisplay from "../components/ImagesDisplay";
import css from "./pagestyles.js";

export default class Images  extends Component{
  state={
    folder : "/randomImages/",
    images : [],
    recitation : [],
    recite: false,
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
      images: randArray,
      recite: false,
    });
  }
  saveSession(){
    if(this.state.images.length <=2){
      alert("Nothing to save");
      return;
    }
    axios({
      method:"post",
      url:"/api/save/session",
      data:{
        username:this.props.username,
        field   :"images",
        datum :JSON.stringify(this.state.images),
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
        field   :"images",
      },
    }).then((resp)=>{
      console.log(">>> Response length: "+ JSON.parse(resp.data.data).length);
      this.setState({ 
        images: JSON.parse(resp.data.data),
        recite: false,
      });
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
              <a style={css.header}>Images</a>
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
          <ImagesDisplay images={this.state.images} folder={this.state.folder}/>
        </div>
      </div>
    )
  };
}

