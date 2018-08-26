
import React, { Component } from "react";
import axios from "axios";
import css from "./styles.js";

export default class Signin extends Component{
  state={
    username:"",
    password:"",
  };

  handleChange = event => {
    const {name,value}=event.target;
    this.setState({
      [name]:value
    });
  };

  inputValidation(){
    const password = this.state.password.trim();
    const username = this.state.username.trim();
    if( username.length >0 && password.length>=0){
      return true;
    }else{
      alert("Username or password field shouldnt be empty");
      return false;
    } 
  }

  handleSubmit = event => {
    //send info to the database
    event.preventDefault();
    if(this.inputValidation()){
      axios({
        method:"post", url:"/api/signin",
        data:{
          username:this.state.username.trim(),
          password:this.state.password.trim()
        },
      }).then((resp)=>{
        if(resp.data.username != null){
          this.props.signMeIn(resp.data.username, resp.data.email);
        }else{
          alert("Signin failed");
        }
      }).catch( (err) =>{
        //TODO: Fix this so the error log doesnt spit password in the  error log
        console.log(">>>Error :"+ err);
      });

      //clear input field
      this.setState({
        username:"",
        password:""
      });
    }else{
      //TODO: what to do, what to do, depends on the validation we have
      //Do nothing for now
    }
  }

  render(){
    return(
      <div style={css.all}>
        <div style={css.signForm}>
          <form onSubmit={this.handleSubmit}>
            <input 
              name="username"
              onChange={this.handleChange}
              placeholder="Username"
              style={css.textarea}
              type="text" 
              value={this.state.username}
            />
            <br/>
            <input 
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
              style={css.textarea}
              type="password" 
              value={this.state.password}
            />
            <br/>
            <input style={css.submitBtn} type="submit" value="sign in" />
          </form>
          <br/>
          <div>
            <p style={css.pSign}>
              Dont have an account 
              <strong style={css.signToggle} onClick={this.props.toggleSignPage}> Sign up </strong>
            </p>
          </div>
        </div>
      </div>
    );
  };
};

