
import React, { Component } from "react";

export default class math  extends Component{
  state={
    score:0,
    total:0,
    op  : "",
    num1: null,
    num2: null,
    ans : null,
    answer: "",
  }
  
  start(){
    let ops=Math.floor(Math.random()*5);
    let num1, num2, ans, op;
    if(ops===0){
      //This will give us addition
      num1=Math.floor((Math.random()*1000) + 10000);
      num2=Math.floor((Math.random()*1000) + 10000);
      ans = num1 + num2;
      op = "+";
    }else if(ops===1){
      //Subtraction
      num1=Math.floor((Math.random()*1000) + 10000);
      num2=Math.floor((Math.random()*1000) + 10000);
      ans = num1 - num2;
      op = "-";
    }else if(ops===2){
      //Multiplication
      num1=Math.floor((Math.random()*100) + 100);
      num2=Math.floor((Math.random()*100) + 100);
      ans = num1 * num2;
      op = "*";
    }else{
      //Division
      num2=Math.floor((Math.random()*100) + 1);
      ans=Math.floor((Math.random()*100) + 1);
      num1 = num2 * ans;
      op = "/";
    }
    this.setState({
      num1: num1,
      num2: num2,
      ans : ans, 
      op  : op,
    });
  }

  stop(){
    this.setState({num1:null});
  }

  handleChange = event => {
    const {name,value}=event.target;
    if(value.length > 25){
      alert("Maximum number of characters exceeded");
    }else{
      this.setState({
        [name]:value
      });
    }
  };
 
  handleSubmit = event => {
    event.preventDefault();
    if(this.state.ans == parseFloat(this.state.answer)){ //TODO === doesnt give correct analysis
      this.setState({score: this.state.score++});
    }
    let tt = this.state.total + 1;
    this.setState({
      answer: "",
      total : tt,
    });
    this.start();
  }

  render(){
    const content = this.state.num1 ? (
      <div>
        <div style={css.score}>
          <p> Score: {this.state.score} / {this.state.total}</p>
        </div>
        <div style={css.question}>
          <p>{this.state.num1} {this.state.op} {this.state.num2} </p>
        </div>
        <div>
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
            <br/>
            <button style={css.submitBtn} type="submit">Submit</button>
          </form>
        </div>
      </div>
    ): ( null);

    return(
      <div style={css.all}>
        <div style={css.container}>
          <h3 style={css.math}>Math</h3>
          <div>
            <button style={css.btncss} onClick={()=>{this.start()}} >Start</button>
            <button style={css.btncss} onClick={()=>{this.stop()}} >Stop</button>
          </div>
          {content}
        </div>
      </div>
    )
  };
}
const css={ 
  all:{
    width:"100%",
  },
  container:{
    width: "50%",
    margin: "auto",
    align: "center",
  },
  math:{
    fontSize: 30,
  },
  form:{
    width: "100%",
  },
  score: {
    fontSize: 25,
    fontColor: "#f2f2f2",
  },
  question:{
    fontSize: 30,
    fontWeight: 600,
    border: "1px solid teal",
    borderRadius: 5,
    textAlign: "center",
  },
  textArea:{
    height: 50,
    fontSize: 20,
    width: "100%",
    maxWidth: "99.8%",
    borderRadius: 5,
    border: "1px solid teal",
  },
  submitBtn:{
    borderRadius:3,
    height: 40,
    fontWight: 600,
    marginTop: 10,
    fontSize: 20,
    width: "100%",
    backgroundColor: "teal",
    marginRight: 4,
    align:"center",
  },
  btncss:{
    border:"1px solid black",
    fontWeight:"600",
    marginLeft: 4,
    fontSize: 20,
    backgroundColor: "#007580",
    borderRadius:5,
  },
}

