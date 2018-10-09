

import React, { Component } from "react";
//import axios from "axios";

export default class Cards  extends Component{
  state={
    
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="container" style={css.note}>
          Note: Site still under construction aka Very buggggggy!!!
        </div>
        <div className="container" style={css.intro}>
          <div className="disclaimer" style={css.disclaimer}>
            <p>This is not a brain training program. The brian comes fully trained already</p>
            <p>But the practices in this app can help improve with working memory and concentration</p>
            <p>- Hope this program will be of a great use to you</p>
          </div>
        </div>
      </div>
    )
  };
}

const css={
  note:{
    color: "#d64933",
    fontSize: 20,
    marginBottom: 30,
  },
  intro:{
    fontSize: 25,
  },
  disclaimer:{

  },
}
