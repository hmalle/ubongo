
import React, { Component } from "react";
import axios from "axios";
import NumbersRecite from "../components/NumbersRecite";
import navcss from "./pagestyles.js";

export default class Numbers  extends Component{
  state={
    numbers:[], //Will be a 2D array
    numbersSet: false,
    reciting: false,
  }

  //This function will generate 500 random digits
  generateDecimalSession(){
    let decimalArray=[];
    for(let a=0;a<25;a++){
      let tmp=[];
      for(let b=0;b<25;b++){
        tmp.push(Math.floor(Math.random()*10));
      }
      decimalArray.push(tmp)
    }
    this.setState({
      numbers: decimalArray,
      numbersSet:true,
      reciting:false
    });
  }
  //TODO Related to the above array, needs a flag to reduce code redundancy
  generateBinarySession(){
    let binaryArray=[];
    for(let a=0;a<25;a++){
      let tmp=[]
      for(let b=0;b<25;b++){
        tmp.push(Math.floor(Math.random()*2));
      }
      binaryArray.push(tmp);
    }
    this.setState({
      numbers: binaryArray,
      numbersSet:true,
      reciting:false
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
    //TODO: This function is crashing now due to some unforseen issues
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
        <div className="container" style={navcss.numberBox}>
          {this.state.numbers.map((numArr,numArrIndex) => (
            <div 
              style={css.numberRow}
              key={numArrIndex}>
              {numArr.map((num,index)=>(
                <span 
                  style={css.digits}
                  key={index}>
                  {num}
                </span>
              ))}
              - Row {numArrIndex}<br/>
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
              <a style={navcss.header}>Numbers</a>
            </li>
            <li className="nav-item">
              <a style={navcss.li_a_css} onClick={()=>{this.generateDecimalSession()}} >Decimal</a>
            </li>            
            <li className="nav-item">
              <a style={navcss.li_a_css} onClick={()=>{this.generateBinarySession()}} >Binary</a>
            </li>            

            <li className="nav-item">
              <a style={navcss.li_a_css} onClick={()=>{this.saveSession()}} >Save</a>
            </li>
            <li className="nav-item">
              <a style={navcss.li_a_css} onClick={()=>{this.restoreSession()}} >Restore</a>
            </li>            
            <li className="nav-item"> 
              <a style={navcss.li_a_css} onClick={()=>{this.recite()}} >Recite</a>
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

const css={
  numberBox:{
  },
  numberRow:{
    fontSize: 18,
    minWidth: "51%", //So we dont get overlapping lines
    display:"inline-block",
  },
  digits:{
    fontSize: 18,
    padding: 3,
  }
}
