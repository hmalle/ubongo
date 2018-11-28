
import React, { Component } from "react";
import Header from "./components/Header";
import Init from "./pages/Init";
import Cards from "./pages/Cards";
import Images from "./pages/Images";
import Math from "./pages/Math";
import Numbers from "./pages/Numbers";
import People from "./pages/People";
import Poems from "./pages/Poems";
import Nback from "./pages/Nback";
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

  triggerSignOut(){
    this.props.signOut();
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
        return (<Nback username={this.props.username}/>);
      default:
        return (<Init username={this.props.username}/>);
    }
  }

  render(){
    const content = this.renderPage();
    return (
      <div style={css.allcontent}>
        <div style={css.mainContent}>
          <div className="container-fluid" style={css.header}>
            <Header 
              setPageIndex={this.setPageIndex.bind(this)} 
              triggerSignOut={this.triggerSignOut.bind(this)}/>
          </div>
          <div className="container-fluid" style={css.content}>
            {content} 
          </div>
        </div>
        <div style={css.footerDiv}>
          <div className="footer" style={css.footer}>
            <p>&copy;Copyright 2018 Malle</p>
          </div>

        </div>
      </div>
    );
  }
}

const css={ 
  allcontent:{
    margin: 0,
    padding: 0,
    minHeight: "100%",
    position: "relative",
  },
  mainContent:{
    minHeight: "100vh",
    marginBottom: -60,
  },
  content:{
    marginTop:2,
    paddingBottom: 100, /*to support the footer*/
  },
  footerDiv:{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footer:{
    height: 60, /*To match the main content margin*/
    backgroundColor: "#8c9e8a",
    fontSize: 20,
    padding: 10,
    overflow: "hidden",
    textAlign:"center",
    width: "100%",
  },
  header:{
    margin: 0,
    padding: 0,
  },
}

