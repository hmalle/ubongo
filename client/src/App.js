
import React, { Component } from "react";
import Sign from './signing/Sign';
import Home from './home/Home';

export default class App extends Component {
  state = {
    signedIn: false,
    username: null,
    email   : null,
  }

  signMeIn(username, email){
    this.setState({
      signedIn: true,
      username: username,
      email   : email,
    });
  }

  signOut(){
    this.setState({
      signedIn: false,
      username: "",
      email   : "",
    });
  }

  render() {
    const content=this.state.signedIn ? (
      <Home 
        signOut={this.signOut.bind(this)}
        username={this.state.username}
      />
    ) : (
      <Sign signMeIn={this.signMeIn.bind(this)}/>
    )

    return (
      <div>
        {content}
      </div>
    );
  }
}

