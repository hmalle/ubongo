
import React, { Component } from "react"; export default class Header  extends Component{
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={css.navbar}>
        <a className="navbar-brand" href="#" style={css.brand}>Ubongo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <button 
                className="nav-link" 
                style={css.navheader}
                onClick={()=>{this.props.setPageIndex(0)}}
              >Home</button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
        </nav>
      </div>
      /*
        <Navbar fluid style={css.navbar}>
          <Navbar.Header style={css.navheader}>
            <Navbar.Brand>
              <Button style={css.dropdown} onClick={ ()=>{this.props.setPageIndex(0)} }>Home</Button>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown style={css.dropdown} title="Math">
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(3)} }>Math</MenuItem>
            </NavDropdown>
            <NavDropdown style={css.dropdown} title="Memory">
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(1)} }>Cards</MenuItem>
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(2)} }>Images</MenuItem>
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(4)} }>Numbers</MenuItem>
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(5)} }>People</MenuItem>
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(6)} }>Poems</MenuItem>
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(8)} }>Words</MenuItem>
            </NavDropdown>
            <NavDropdown style={css.dropdown} title="Puzzles">
              <MenuItem style={css.menuitem} onClick={ ()=>{this.props.setPageIndex(7)} }>Puzzles</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
      */
    );
  };
}

const css={ 
  navbar:{
    fontSize: 20,
  },
}

