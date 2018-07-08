
import React, { Component } from "react";
import axios from "axios";

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
        url:"http://127.0.0.1:3001/api/signup",
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
        //TODO: Fix this to avoid spitting password informations on the error log
        console.log(">>>Error :"+ err);
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
            <input style={css.submitBtn} type="submit" value="create account"/>
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

const css={ 
  all:{
    width: "100%",
    marginTop: 50,
  },
  signForm:{
    border: "2px solid black",
    width:"50%",
    margin: "auto",
    borderRadius: 5,
    padding: 20,
    align: "center",
  },
  submitBtn:{
    backgroundColor: "teal",
    borderRadius:5,
    fontSize: 30,
    fontWeight: 800,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 10,
    width: "100%",
    border:"2px solid black",
  },
  textarea:{
    width: "100%",
    margin: 3,
    height: 50,
    fontSize: 30,
    border:"1px solid black",
    borderRadius: 5,
  },
  signToggle: {
    width: 10,
    color: "blue",
    padding: 1,
    border: "1px solid 008b8b",
  },
  pSign:{
    fontSize: 25,
    textAlign: "center",
  },
}

