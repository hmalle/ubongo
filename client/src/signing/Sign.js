
import React, { Component } from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

export default class Sign extends Component {
  state={
    signin : true,  //Either signin or signup
  };

  toggleSignPage(){
    this.setState({
      signin: !this.state.signin
    });
  };
  
  render(){
    if(this.state.signin){
      return <Signin 
        toggleSignPage={this.toggleSignPage.bind(this)}
        signMeIn={this.props.signMeIn}
      />
    }else{
      return <Signup 
        toggleSignPage={this.toggleSignPage.bind(this)}
        signMeIn={this.props.signMeIn}
      />
    }
  }
};
