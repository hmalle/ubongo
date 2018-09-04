
import React, { Component } from "react";
import axios from "axios";
import css from "./styles.js";

export default class Signup extends Component{
  state={
    email:"",
    username:"",
    password:"",
    passwordConfirmation:"",
  }

  handleChange = event => {
    const {name,value}=event.target;
    this.setState({
      [name]:value
    });
  };

  inputValidation(){
    const username = this.state.username;
    const pwd = this.state.password.trim();
    const pwdConf = this.state.passwordConfirmation.trim();
    if(pwd.length >=6 && pwd===pwdConf && username.length >= 6){
      return true;
    }else{
      alert("Username or password must be more than 6 characters");
      return false;
    }
  }

  handleSubmit = event => {
    //send info to the database
    event.preventDefault();
    if(this.inputValidation()){
      axios({
        method:"post",
        url:"/api/signup",
        data:{
          email   :this.state.email.trim(),
          username:this.state.username.trim(),
          password:this.state.password.trim()
        },
      }).then((resp)=>{
        if(resp.data.username!= null){
          this.props.signMeIn(resp.data.username,resp.data.email);
        }else{
          alert("Signup failed");
        }
      }).catch( (err) =>{
        console.log(">>>Error signing up");   //Don't spit out the error message
      });

      //clear input fields
      this.setState({
        email:"",
        username:"",
        password:"",
        passwordConfirmation:"",
      });
    }else{
      //TODO: What to do here, when the input validation doenst work out?
      //Do nothing for now
    }
  }

  render(){
    return(
      <div style={css.all}>
        <div style={css.signForm}>
          <form onSubmit={this.handleSubmit}>
            <input 
              name="email"
              onChange={this.handleChange}
              placeholder="Enter email"
              style={css.textarea}
              type="email" 
              value={this.state.email}
            />
            <br/>
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
            <input 
              name="passwordConfirmation"
              onChange={this.handleChange}
              placeholder="Verify Password"
              style={css.textarea}
              type="password" 
              value={this.state.passwordConfirmation}
            />
            <br/>
            <input style={css.submitBtn} type="submit" value="Create account"/>
          </form>
          <br/>
          <div>
            <p style={css.pSign}>
              Already a member
              <strong style={css.signToggle} onClick={this.props.toggleSignPage}> Sign in </strong>
            </p>
          </div>
        </div>
      </div>
    );
  };
}

