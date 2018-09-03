
import React, { Component } from "react";
import pagecss from "./pagestyles.js";

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
      op = "x";
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
    if(parseFloat(this.state.ans)===parseFloat(this.state.answer)){ 
      this.setState({score: this.state.score+=1});
    }
    let tt = this.state.total + 1;
    this.setState({
      answer: "",
      total : tt,
    });
    this.start();
  }

  render(){
    const content=this.state.num1 ? (
      <div className="container" style={css.container}>
        <div clasName="container" style={css.score}>
          <p> Score: {this.state.score} / {this.state.total}</p>
        </div>
        <div className="container" style={css.question}>
          <p>Question:<strong style={css.strong}>{this.state.num1} {this.state.op} {this.state.num2}</strong></p>
        </div>
        <div className="container">
          <form onSubmit={this.handleSubmit} style={css.form} >
            <div className="form-group">
              <input 
                type="text" 
                className="form-control" 
                name="Enter your answer"
                style={css.textarea}
                value={this.state.answer}
                onChange={this.handleChange}
                placeholder="11234..."/>
            </div>
            <button 
              className="btn" 
              style={css.submitBtn} 
              type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    ):(null);

    return(
      <div style={css.all}>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a style={pagecss.header}>Poems</a>
            </li>
            <li className="nav-item">
              <a style={pagecss.li_a_css} onClick={()=>{this.start()}}>Start</a>
            </li>            
            <li className="nav-item">
              <a style={pagecss.li_a_css} onClick={()=>{this.stop()}}>Stop</a>
            </li>
          </ul>
        </div>
        <div>
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
    width: "80%",
    margin: "0 auto",
    borderRadius: 5,
    border: "1px solid #8c9e8a",
    align: "center",
  },
  score: {
    fontSize: 25,
    textAlign: "center",
    color: "#000000",
  },
  strong:{
    marginLeft: 30,
  },
  question:{
    fontSize: 25,
  },
  textarea:{
    fontSize: 20,
    height: 40,
  },
  submitBtn:{
    borderRadius:3,
    height: 40,
    width: 200,
    fontWeight: 600,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: "#8c9e8a",
    marginRight: 4,
    align:"center",
  },
}

