
import React, { Component } from "react";

export default class Footer  extends Component{
  render(){
    return(
      <div className="footer" style={css.footer}>
        <p>&copy;Copyright 2018 Hillary Malle </p>
      </div>
    )
  };
}

const css={
  footer:{
    height: 60, /*To match the main content margin*/
    backgroundColor: "#8c9e8a",
    fontSize: 20,
    padding: 10,
    overflow: "hidden",
    textAlign:"center",
    width: "100%",
  }
}
