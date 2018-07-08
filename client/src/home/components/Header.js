
import React, { Component } from "react";
import {Navbar,NavDropdown,Nav,Button,MenuItem} from "react-bootstrap";

export default class Header  extends Component{
  state={
    mathMenu: false,
    memoryMenu   : false,
    puzzleMenu : false,
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

  render(){
    return(
      <div>
        <Navbar fluid style={css.navbar}>
          <Navbar.Header style={css.navheader}>
            <Navbar.Brand>
              <Button style={css.dropdown} onClick={ ()=>{this.props.setPageIndex(0)} }>Home</Button>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown style={css.dropdown} title="Math" id="basic-nav-dropdown">
              <MenuItem style={css.menuitem}onClick={ ()=>{this.props.setPageIndex(3)} }>Math</MenuItem>
            </NavDropdown>
            <NavDropdown style={css.dropdown} title="Memory" id="basic-nav-dropdown">
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(1)} }>Cards</MenuItem>
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(2)} }>Images</MenuItem>
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(4)} }>Numbers</MenuItem>
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(5)} }>People</MenuItem>
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(6)} }>Poems</MenuItem>
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(8)} }>Words</MenuItem>
            </NavDropdown>
            <NavDropdown style={css.dropdown} title="Puzzles" id="basic-nav-dropdown">
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(7)} }>Puzzles</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  };
}

const css={ 
  navbar:{

  },
  dropdown:{
    border:"1px solid black",
    fontWeight:"600",
    marginLeft: 4,
    fontSize: 25,
    backgroundColor: "#007580",
    borderRadius:5,
  },
  navheader:{
    float:"left",
    fontWeight:"600",
    fontColor:"fff",
    fontSize: 23,
    marginLeft: 0,
    marginRight: 10,
  },
  menuitem:{
    fontSize: 30,
  }
}

