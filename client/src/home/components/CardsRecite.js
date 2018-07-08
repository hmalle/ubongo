
import React, { Component } from "react";

export default class CardsRecite  extends Component{
  //props this.props.images
  state={
    answer:"",
    answerArray:[],
    score: 0,
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
    console.log("AnswerArray :"+ this.state.answerArray);
    //Run a comparison of the two arrays to prevent overflow
    let minLength = this.props.images.length < this.state.answerArray.length ?
      this.props.images.length : this.state.answerArray.length;
    for( let a=0;a<minLength;a++){
      if(this.props.images[a] !== this.state.answerArray[a]){
        this.setState({score: a});
        return ;
      }
    }
    this.setState({ score: minLength });
  }

  render(){
    return(
      <div>
        <div>
          <p>Score: {this.state.score} </p>
        </div>

        <div style={css.all}>
          <div>
            Please enter cards names in the form outlined below.
            separated by a single space
              j-jack, q-queen, k-king, a-ace
              2-10  s-spade,d-diamonds,h-hearts,c-clubs
              eg: 3d means 3 of diamonds,
          </div>
          <form 
            onSubmit={this.handleSubmit}
            style={css.form}
          >
            <textarea
              name="answer"
              onChange={this.handleChange}
              placeholder="answer"
              style={css.textArea}
              type="text" 
              value={this.state.answer}
            />
            <input style={css.submitBtn} type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  };
}

const css={ 
  all:{
    border: "1px solid black",
    width:"50%",
  },
  form:{
    border:"2px solid teal",
  },
  score: {
    fontHeight: 30,
  },
  textArea:{
    maxWidth: "99%",
    width: "99%",
    height: 200,
    align:"center",
  },
  submitBtn:{
    width: "99%",
    borderRadius:5,
    marginTop: 10,
    height: 30,
    marginLeft: 4,
    fontWeight: 600,
    fontSize: 20,
    backgroundColor: "teal",
    marginRight: 4,
    align:"center",
  },
}

