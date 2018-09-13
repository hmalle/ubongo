
import React, { Component } from "react";

export default class Images  extends Component{
  //For Displaying the Images
  render(){
    return(
      <div className="container" style={css.imagesContainer}>
        {this.props.images.map( (image,index) => (
        <div key={index}>
          <img className="rounded float-left" 
            style={css.imgcss} src={this.props.folder+image+".jpg"}
            alt="No Content"
            key={index}
          />
        </div>
        ))}
      </div>
    )
  };
}

const css={ 
  imagesContainer:{
    //What to do what to do?
  },
  imgcss:{
    width: "150px",
    height:"150px",
    margin: 3,
    borderRadius: 8,
  },
}
