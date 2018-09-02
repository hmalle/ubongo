
import React, { Component } from "react"; export default class Header  extends Component{
  state={
    mathMenu: false,
    memoryMenu: false,
    puzzleMenu: false,
  }
  
  toggleMathMenu(){
    this.setState({
      mathMenu: !this.state.mathMenu,
    });
  }

  toggleMemoryMenu(){
    this.setState({
      memoryMenu: !this.state.memoryMenu,
    });
  }

  togglePuzzleMenu(){
    this.setState({
      puzzleMenu: !this.state.puzzleMenu,
    });
  }

  triggerSignOut(){
    this.props.signMeOut();
  }

  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={css.navbar}>
          <div 
            className="navbar-brand" 
            style={css.brand} 
            onClick={()=>{this.props.setPageIndex(0)}}>
            Ubongo
          </div>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="float-left">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle" 
                    id="navbarDropdown1" 
                    style={css.dropdownbtn}
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    Math
                  </button>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                    <a 
                      style={css.menuitem} 
                      onClick={()=>{this.props.setPageIndex(11)}}>
                      Math
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <button 
                    className="nav-link dropdown-toggle" 
                    id="navbarDropdown2" 
                    style={css.dropdownbtn}
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    Memory
                  </button>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a 
                      className="dropdown-item" 
                      style={css.menuitem} 
                      onClick={()=>{this.props.setPageIndex(21)}}>
                      Cards
                    </a>
                    <a 
                      className="dropdown-item" 
                      style={css.menuitem} 
                      onClick={()=>{this.props.setPageIndex(22)}}>
                      Images
                    </a>
                    <a 
                      className="dropdown-item" 
                      style={css.menuitem} 
                      onClick={()=>{this.props.setPageIndex(23)}}>
                      Numbers
                    </a>
                    <a 
                      className="dropdown-item" 
                      style={css.menuitem} 
                      onClick={()=>{this.props.setPageIndex(24)}}>
                      People
                    </a>
                    <a 
                      className="dropdown-item" 
                      style={css.menuitem} 
                      onClick={()=>{this.props.setPageIndex(25)}}>
                      Poems
                    </a>
                    <a 
                      className="dropdown-item" 
                      style={css.menuitem} 
                      onClick={()=>{this.props.setPageIndex(26)}}>
                      Words
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <button 
                    className="nav-link dropdown-toggle" 
                    id="navbarDropdown3" 
                    style={css.dropdownbtn}
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    Puzzles
                  </button>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                    <a 
                      className="dropdown-item" 
                      style={css.menuitem} 
                      onClick={()=>{this.props.setPageIndex(31)}}>
                      Puzzles
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="float-right">
              <button
                style={css.menuitem} 
                onClick={()=>{this.props.triggerSignOut()}}>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

const css={ 
  navbar:{
    fontSize: 20,
  },
  brand:{
    backgroundColor: "#7b887c",
    fontSize: 25,
    borderRadius: 4,
  },
  menuitem:{
    fontSize: 18,
    color: "#0c0c0c",
    textAlign: "center",
  },
  dropdownbtn:{
    borderRadius: 5,
    backgroundColor: "#7b887c",
    border: "1px solid #0c0c0c",
    marginLeft: 2,
    marginRight: 2,
  },
}

