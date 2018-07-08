
import React, { Component } from "react";
//import axios from "axios";

export default class puzzles  extends Component{
  state={

  }
  
  generateNewSession(){
  }

  render(){
    return(
      <div>
        <h3>Puzzles</h3>
        <div>
          <button style={css.btncss} onClick={()=>{this.generateNewSession()}} >Generate</button>
        </div>
        <div>
          <h3>Einstein's Puzzle </h3>
      Variations of this riddle appear on the net from time to time. It is sometimes attributed to Albert Einstein and it is claimed that 98% of the people are incapable of solving it. Some commentators suggest that Einstein created such puzzles not to test out intelligence but to get rid of all the students who wanted him as an advisor. It is not likely that there is any truth to these stories. Whereever this comes from, it is a nice riddle.

      Let us assume that there are five houses of different colors next to each other on the same road. In each house lives a man of a different nationality. Every man has his favorite drink, his favorite brand of cigarettes, and keeps pets of a particular kind.

          <p>The Englishman lives in the red house.</p>
          <p>The Swede keeps dogs.</p>
          <p>The Dane drinks tea.</p>
          <p>The green house is just to the left of the white one.</p>
          <p>The owner of the green house drinks coffee.</p>
          <p>The Pall Mall smoker keeps birds.</p>
          <p>The owner of the yellow house smokes Dunhills.</p>
          <p>The man in the center house drinks milk.</p>
          <p>The Norwegian lives in the first house.</p>
          <p>The Blend smoker has a neighbor who keeps cats.</p>
          <p>The man who smokes Blue Masters drinks bier.</p>
          <p>The man who keeps horses lives next to the Dunhill smoker.</p>
          <p>The German smokes Prince.</p>
          <p>The Norwegian lives next to the blue house.</p>
          <p>The Blend smoker has a neighbor who drinks water.</p>

          <h3>The question to be answered is: Who keeps fish?</h3>
        </div>
      </div>
    )
  };
}

const css={ 
  btncss:{
    border:"1px solid black",
    fontWeight:"600",
    marginLeft: 4,
    fontSize: 20,
    backgroundColor: "#007580",
    borderRadius:5,
  },
}

