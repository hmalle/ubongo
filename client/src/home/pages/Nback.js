
import React, { Component } from "react";
import navcss from "./pagestyles.js";
//import axios from "axios";

export default class puzzles  extends Component{
  state={
    data: [],
    colors: [],
    symbols:"1234567890",
    position:"1234567890",
    sounds:"qwertyuiopasdfghjklzxcvbnm",
    initiated: false,
  }
  
  generateNewSession(){
    let tmpdata = [];
    for(let a=0; a<9; a++){
      tmpdata.push({
        sound: this.state.sounds.split("")[Math.floor(Math.random()*26)],
        symbol: this.state.symbols.split("")[Math.floor(Math.random()*10)],
        position: this.state.position.split("")[Math.floor(Math.random()*10)],
        color: "blue",
      });
    }
    this.setState({
      data: tmpdata,
      initiated: true
    });
  }

  render(){
    var content
    if(this.state.initiated){
      console.log("+++ The data is " + JSON.stringify(this.state.data));
      content = (
        <div>
          {this.state.data.map((eachData, index) => (
            <div style={css.grid} 
              key={index}
              className="col-md-4">
              <h1 style={css.symbols}>{eachData.symbol}</h1>
            </div>
          ))}
        </div>
      );
    }else {
      //Nothing 
      content = <div></div>
    }

    return(
      <div>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a style={navcss.header} onClick={()=>{this.generateNewSession()}}>Start</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6" style={css.nbackbox}>
              {content}
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    )
  };
}

const css={
  header:{

  },
  nbackbox:{
  },
  grid:{
    border: "2px solid black",
    marginTop: 3,
    borderRadius: 3,
    height: 200,
  },
  symbols:{
    fontSize: 200,
    color: "blue",
  },
}
