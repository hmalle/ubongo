
import React, { Component } from "react";
import axios from "axios";
import ImagesDisplay from "../components/ImagesDisplay";

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
      url:"http://127.0.0.1:3001/api/save/session",
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
      url:"http://127.0.0.1:3001/api/retrieve/session",
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
        <h3>Images</h3>
        <div>
          <button style={css.btncss} onClick={()=>{this.generateNewSession()}} >Generate</button>
          <button style={css.btncss} onClick={()=>{this.saveSession()}} >Save</button>
          <button style={css.btncss} onClick={()=>{this.restoreSession()}} >Restore</button>
          <button style={css.btncss} onClick={()=>{this.recite()}} >Recite</button>
        </div>
        <div>
          <ImagesDisplay images={this.state.images} folder={this.state.folder}/>
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
