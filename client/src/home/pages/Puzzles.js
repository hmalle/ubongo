
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
              <a style={css.header}>Puzzles</a>
            </li>
            <li className="nav-item">
              <a style={css.li_a_css} onClick={()=>{this.newPuzzle()}} >New Puzzle</a>
            </li>            
            <li className="nav-item">
              <a style={css.li_a_css} onClick={()=>{this.restoreLastPuzzle()}} >Restore</a>
            </li>
            <li className="nav-item">
              <a style={css.li_a_css} onClick={()=>{this.savePuzzle()}} >Save</a>
            </li>            
            <li className="nav-item"> 
              <a style={css.li_a_css} onClick={()=>{this.checkAnswer()}} >Check Answer</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>No content here</h2>
        </div>
      </div>
    )
  };
}

