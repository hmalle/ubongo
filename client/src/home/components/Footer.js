
import React, { Component } from "react";

export default class Footer  extends Component{
  render(){
    return(
      <div className="container-fluid" style={css.footer}>
        <p>&copy;Copyright 2018 Hillary Malle </p>
      </div>
    )
  };
}

const css={
  footer:{
    backgroundColor: "#8c9e8a",
    bottom: "0px",
    fontSize: "20px",
    left: "0px",
    marginTop: "10px",
    padding: "10px",
    position: "absolute",
    textAlign:"center",
    width: "100%",
  }
}
