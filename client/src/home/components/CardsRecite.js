
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
 
  handleSubmit = event => {
    event.preventDefault();
    this.setState({answerArray:this.state.answer.trim().split(" ")}, 
      ()=> this.checkAnswer());
  }
  
  validation(){
    //The rules for the numbers we are getting
    for(let a=0; a<this.state.answerArray.length;a++){
      let invalid=true;
      for(let b=0;b<this.props.validCards.length;b++){
        if(this.props.validCards[b] === this.state.answerArray[a]){
          invalid=false;
          break;
        }
      }
      if(invalid){
        console.log("Invalid card encontered:" + this.state.answerArray[a]);
        return false;
      }
    }
    return true; //When all is good return true.
  }

  checkAnswer(){
    if(!this.validation() ){
      return;
    }
  }
 
  imageClicked(image){
    console.log(JSON.stringify(image ,null ,2));
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <p style={css.cardHeader}> Cards </p>
            </div>
            <div className="card-body" style={css.cardsSection}>
              {this.props.cardsArray.map( (image,index) => (
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
                  onClick={()=>{this.props.submitAnswer}}>
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
    fontSize: 16,
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

