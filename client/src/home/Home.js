
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Init from "./pages/Init";
import Cards from "./pages/Cards";
import Images from "./pages/Images";
import Math from "./pages/Math";
import Numbers from "./pages/Numbers";
import People from "./pages/People";
import Poems from "./pages/Poems";
import Puzzles from "./pages/Puzzles";
import Words from "./pages/Words";

export default class App extends Component {
  state ={
    pageIndex : 10,
  }

  //for setting the page index, to determine which page to display
  setPageIndex(index){
    this.setState({
      pageIndex: index,
    });
  }

  //Chooses which page to render
  renderPage(){
    switch(this.state.pageIndex){
      case 0:
        return (<Init username={this.props.username}/>);
      case 11: 
        return (<Math username={this.props.username}/>);
      case 21:
        return (<Cards username={this.props.username}/>);
      case 22: 
        return (<Images username={this.props.username}/>);
      case 23:
        return (<Numbers username={this.props.username}/>);
      case 24:
        return (<People username={this.props.username}/>);
      case 25:
        return (<Poems username={this.props.username}/>);
      case 26: 
        return (<Words username={this.props.username}/>);
      case 31:
        return (<Puzzles username={this.props.username}/>);
      default:
        return (<Init username={this.props.username}/>);
    }
  }

  render(){
    const content = this.renderPage();
    return (
      <div>
        <div className="container-fluid" style={css.welcomesign}>
          <div style={css.welcome}>
            Welcome <strong> {this.props.username} </strong>
          </div>
          <div style={css.signout}>
            <button style={css.signbtn} onClick={ ()=>{this.props.signMeOut()} }>Signout</button>
          </div>
        </div>
        <div className="container-fluid" style={css.header}>
          <Header setPageIndex={this.setPageIndex.bind(this)}/>
        </div>
        <div className="container-fluid" style={css.content}>
          {content} 
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

const css={ 
  welcomesign:{
    marginTop:5,
    marginBottom: 5,
  },
  welcome:{
    float:"left",
    fontSize: 30,
  },
  header:{
    marginTop: 2,
  },
  content:{
    marginTop:2,
  },
  signout:{
    float:"right",
  },
  signbtn:{
    backgroundColor: "#007580",
    border:"1px solid black",
    borderRadius:5,
    fontSize: 25,
    marginTop: 10,
    marginRight: 10,
  },
}

