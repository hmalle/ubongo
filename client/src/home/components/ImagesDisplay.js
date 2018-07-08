
import React, { Component } from "react";

export default class Images  extends Component{
  render(){
    return(
      <div>
        {this.props.images.map( (image,index) => (
        <div key={index}>
          <img style={css.imgcss} src={this.props.folder+image+".jpg"}
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
  imgcss:{
    width: "150px",
    height:"180px",
    float:"left",
    border: "1px solid black",
    margin: 3,
    borderRadius: 8,
  },
}
