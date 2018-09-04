
import React, { Component } from "react"; export default class Header  extends Component{
  state={
    logouthoover: false,
  }
  triggerSignOut(){
    this.props.signMeOut();
  }
  didhooverlogout(){
    this.setState({
      logouthoover: !this.state.logouthoover,
    });
  }
 
  render(){
    return(
      <div style={css.container}>
        <nav className="navbar navbar-expand-md navbar-light bg-light" style={css.navbar}>
          <div 
            className="navbar-brand" 
            style={css.brand} 
            onClick={()=>{this.props.setPageIndex(0)}}>
            Ubongo
          </div>
          <button 
            className="navbar-toggler ml-auto" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={css.collapse} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" style={css.nav_ul}>
              <li className="nav-item dropdown" style={css.nav_li}>
                <a 
                  className="nav-link dropdown-toggle" 
                  id="navbarDropdown1" 
                  style={css.dropdownbtn}
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">
                  Math
                </a>
                <div className="dropdown-menu" style={css.dropdownmenu} aria-labelledby="navbarDropdown1">
                  <a 
                    className="dropdown-item"
                    style={css.menuitem} 
                    onClick={()=>{this.props.setPageIndex(11)}}>
                    Math
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown" style={css.nav_li}>
                <a 
                  className="nav-link dropdown-toggle" 
                  id="navbarDropdown2" 
                  style={css.dropdownbtn}
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">
                  Memory
                </a>
                <div className="dropdown-menu" style={css.dropdownmenu} aria-labelledby="navbarDropdown2">
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
              <li className="nav-item dropdown" style={css.nav_li}>
                <a 
                  className="nav-link dropdown-toggle" 
                  id="navbarDropdown3" 
                  style={css.dropdownbtn}
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">
                  Puzzles
                </a>
                <div className="dropdown-menu" style={css.dropdownmenu} aria-labelledby="navbarDropdown3">
                  <a 
                    className="dropdown-item" 
                    style={css.menuitem} 
                    onClick={()=>{this.props.setPageIndex(31)}}>
                    Puzzles
                  </a>
                </div>
              </li>
              <li className="nav-item" style={css.nav_li}>
                <a
                  className="nav-link"
                  style={css.logoutbtn} 
                  onClick={()=>{this.props.triggerSignOut()}}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  };
}

const css={ 
  container:{
    //
  },
  navbar:{
    fontSize: 20,
  },
  nav_ul:{
    
  },
  nav_li:{
    float:"right",
  },
  collapse:{
    float: "right",
  },
  brand:{
    fontSize: 25,
    borderRadius: 4,
    fontWeight: 700,
    fontStyle: "oblique",
    backgroundColor: "#86bbbd",
  },
  dropdownmenu:{
    borderRadius: 5,
  },
  dropdownbtn:{
    borderRadius: 5,
    width: 100,
    fontSize: 18,
    marginLeft: 2,
    marginRight: 2,
    color: "#323232",
  },
  menuitem:{
    fontSize: 16,
    color: "#0c0c0c",
  },
  logoutbtn:{
    borderRadius: 5,
    width: 100,
    border: "1px solid #19a3a3",
    textAlign: "center",
    fontSize: 16,
    marginLeft: 2,
    marginRight: 2,
    color: "#71ada5",
  },
}
