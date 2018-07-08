
import React, { Component } from "react";
import axios from "axios";
import ImagesDisplay from "../components/ImagesDisplay";

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
      url:"http://127.0.0.1:3001/api/save/session",
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
      url:"http://127.0.0.1:3001/api/retrieve/session",
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
        <h3>Names and Faces</h3>
        <div>
          <button style={css.btncss} onClick={()=>{this.generateNewSession()}} >Generate</button>
          <button style={css.btncss} onClick={()=>{this.saveSession()}} >Save</button>
          <button style={css.btncss} onClick={()=>{this.restoreSession()}} >Restore</button>
          <button style={css.btncss} onClick={()=>{this.recite()}} >Recite</button>
        </div>
        <div>
          <ImagesDisplay images={this.state.people} folder={this.state.folder}/>
        </div>
      </div>
    )
  };
}

const css={ 
  imgcss:{
    width: "150px",
    height:"180px",
    border: "3px solid black",
    float:"left",
    margin: 2,
    borderRadius: 8,
  },
  btncss:{
    border:"1px solid black",
    fontWeight:"600",
    marginLeft: 4,
    fontSize: 20,
    backgroundColor: "#007580",
    borderRadius:5,
  },
} 

