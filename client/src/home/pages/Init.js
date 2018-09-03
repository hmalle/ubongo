

import React, { Component } from "react";
//import axios from "axios";

export default class Cards  extends Component{
  state={
    
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="container" style={css.disclaimer}>
          This site requires some serious UI/UX work
        </div>
        <div className="container" style={css.intro}>
          This is a brain training program, 
          There are a couple of pointers out there on different techniques for training ones mind.
          A brain, just like any muscle, can be trained to maximize its potential.
          Hope this program will be of a great use to you
        </div>
      </div>
    )
  };
}

const css={
  disclaimer:{
    color: "red",
    fontSize: 30,
    marginBottom: 30,
  },
  intro:{
    fontSize: 25,
  },
}
