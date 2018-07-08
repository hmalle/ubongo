

import React, { Component } from "react";
//import axios from "axios";

export default class Cards  extends Component{
  state={
    
  }

  render(){
    return(
      <div className="container" style={css.intro}>
        This is a brain training program, 
        There are a couple of pointers out there on different techniques for training ones mind.
        A brain, just like any muscle, can be trained to maximize its potential.
        Hope this program will be of a great use to you
      </div>
    )
  };
}

const css={
  intro:{
    fontSize: 25,
  },
}
