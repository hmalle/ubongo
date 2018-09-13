
/* Cards Recite.js */

import React, { Component } from "react";

export default class CardsRecite  extends Component{
  //props this.props.images
  state={
    folder: "/cards/",
  }

  handleChange = event => {
    const {name,value}=event.target;
    if(value.length > 2000){
      alert("Maximum number of characters exceeded");
    }else{
      this.setState({
        [name]:value
      });
    }
  };

  submitAnswer(){
    /*this.props.userAnswer, this.props.generatedCards */
    let score =0;
    let minLen=(this.props.generatedCards.length<this.props.userAnswer.length)?
      this.props.generatedCards.length : this.props.userAnswer.length ;
    for(let index=0; index<minLen; index++){
      if(this.props.generatedCards[index] === this.props.userAnswer[index])
        score += 1;
    }
    this.props.clearAnswer(); //To clear the previous answer of the user
    console.log("The score is " + score);
    this.props.updateScore(score);
  }
 
  render(){
    return(
      <div className="container-fluid">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div style={css.cardHeader}> Cards </div>
            </div>
            <div className="card-body" style={css.cardsSection}>
              {this.props.cards.map( (image,index) => (
                <div key={index}>
                  <img className="rounded float-left" 
                    style={css.imgcss} src={this.state.folder+image+".jpg"}
                    onClick={()=>{this.props.addToUserAnswer(image)}}
                    alt="No Content"
                    key={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div className="float-left" style={css.cardHeader}>Answer</div>
              <div className="float-right">
                <button 
                  className="btn btn-primary float-right"
                  style={css.submitBtn}
                  onClick={()=>{this.submitAnswer()}}>
                  Submit
                </button> 
              </div>
            </div>
            <div className="card-body" style={css.answerSection}>
              {this.props.userAnswer.map( (image,index) => (
                <div key={index}>
                  <img className="rounded float-left" 
                    style={css.imgcss} src={this.state.folder+image+".jpg"}
                    onClick={()=>{this.props.removeFromAnswer(image)}}
                    alt="No Content"
                    key={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  };
}

const css={ 
  cardsSection:{
    height: 500,
    maxHeight: 800,
    overflowY: "scroll",
  },
  answerSection:{
    height: 500,
    overflowY: "scroll",
    maxHeight: 800,
  },
  submitBtn:{
    fontSize: 15,
  },
  imgcss:{
    width: 150,
    height: 80,
    margin: 3,
    border: "1px solid #98c1d9",
    borderRadius: 8,
  },
  cardHeader:{
    fontSize: 20,
  },
}

