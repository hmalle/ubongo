
import React, { Component } from "react";

export default class NumbersRecite  extends Component{
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

  isDigit(str) {
    return str && !/[^\d]/.test(str);
  }
  
  handleSubmit = event => {
    event.preventDefault();
    let ans=[];
    for( let a=0;a<this.state.answer.length;a++){
      if(this.isDigit(this.state.answer[a])){
        ans.push(this.state.answer[a]);
      }
    }
    this.setState({
      answerArray:ans
    },()=> this.checkAnswer());
  }
  
  validation(){
    //This validation isnt doing much since, the handle submit function above is taking
    //in only digits from 0 to 9 and making an array out of them so here our answerArray will
    //contain only digits 
    return true;
  }

  //convert the number array of 25 to a single array of 500 digits
  convertNumbers(){
    let arrayed=[];
    let temp=[];
    for( let a=0;a<this.props.numbers.length;a++){
      temp=this.props.numbers[a].split(" ")
      arrayed.push(...temp);
    }
    return arrayed;
  }

  checkAnswer(){
    if(!this.validation() ){
      return;
    }
    alert("In check answer");
    let numbers=this.convertNumbers();
    let minLength = numbers.length < this.state.answerArray.length ?
      numbers.length : this.state.answerArray.length;
    for( let a=0;a<minLength;a++){
      if(numbers[a] !== this.state.answerArray[a]){
        this.setState({score: a});
        return ;
      }
    }
    this.setState({ score: minLength });
  }

  render(){
    return(
      <div className="container">
        <div style={css.score}>
          <p>Score: {this.state.score} </p>
        </div>
        <div style={css.all}>
          <form onSubmit={this.handleSubmit} style={css.form}>
            <div className="form-group">
              <label style={css.label}>Enter your answer</label>
              <input
                style={css.textArea}
                value={this.state.answer}
                onChange={this.handleChange}
                type="text"
                name="answer"
                className="form-control"
                placeholder="answer"
              />
            </div>
            <button 
              type="submit" 
              className="btn" 
              style={css.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  };
}

const css={ 
  all:{
    border: "1px solid #86bbbd",
    borderRadius: 10,
  },
  label:{
    fontSize: 20,
  },
  answer:{
    fontSize: 20,
  },
  form:{
    height:"100%",
    margin: 10,
  },
  score: {
    fontHeight: 30,
    fontSize: 20,
  },
  textArea:{
    height: 50,
    fontSize: 20,
  },
  submitBtn:{
    width: "100%",
    backgroundColor: "#4ecdc4",
    fontSize: 25,
  },
}
