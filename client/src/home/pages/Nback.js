
import React, { Component } from "react";
import css from "./pagestyles.js";
//import axios from "axios";

export default class puzzles  extends Component{
  state={

  }
  
  generateNewSession(){
  }

  render(){
    return(
      <div>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a style={css.header}>N-Back</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Nothing here at the moment</h2>
        </div>
      </div>
    )
  };
}

