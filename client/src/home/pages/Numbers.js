
import React, { Component } from "react";
import axios from "axios";
import NumbersRecite from "../components/NumbersRecite";
import css from "./pagestyles.js";

export default class Numbers  extends Component{
  state={
    numbers : [],
    numbersSet: false,
    reciting: false,
  }

  //This function will generate 500 random digits
  generateNewSession(){
    let randNumArray = [];
    for(let a=0; a<25; a++){
      let oneLine = [];
      for(let b=0; b<20; b++){
        oneLine.push(Math.floor(Math.random()*10));
      }
      randNumArray.push( oneLine.join(" "));
    }
    this.setState({
      numbers:randNumArray,
      numbersSet:true,
      reciting: false,
    });
  }

  saveSession(){
    if(this.state.numbers.length !== 25){
      alert("Nothing to save");
      return;
    }
    axios({
      method:"post",
      url:"/api/save/session",
      data:{
        username:this.props.username,
        field   :"numbers",
        datum :JSON.stringify(this.state.numbers),
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
        field   :"numbers",
      },
    }).then((resp)=>{
      this.setState({ 
        numbers: JSON.parse(resp.data.data),
        reciting: false,
        numbersSet: true,
      });
    }).catch( (err) =>{
      console.log(">>> error: "+ err);
    });
  }

  recite(){
    this.setState({
      reciting: true,
    });
  }

  getContent(){
    if(this.state.numbersSet && !this.state.reciting){
      return(
        <div style={css.numberBox}>
          {this.state.numbers.map( (num,index) => (
            <div
              key={index}
            >
              {num} - Row {++index}
            </div>
          ))}
        </div>
      );
    }
    if(this.state.reciting){
      return( <NumbersRecite numbers={this.state.numbers}/>);
    }
    if(!this.state.numbers && !this.state.reciting){
      return (null);
    }
  }

  render(){
    const content= this.getContent();

    return(
      <div>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a style={css.header}>Numbers</a>
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
          {content}
        </div>
      </div>
    )
  };
}

