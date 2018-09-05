
import React, { Component } from "react";
import axios from "axios";
import CardsRecite from "../components/CardsRecite";
import navcss from "./pagestyles.js";

export default class Cards  extends Component{
  state={
    folder: "/cards/",
    cards : [],
    recitation: [],
    reciting: false,
    generating: false,
    score: 0,
  }

  cardsArray = [ 
    "10c", "10d", "10h", "10s", "2c", "2d", "2h", "2s", 
    "3c", "3d", "3h", "3s", "4c", "4d", "4h", "4s", 
    "5c", "5d", "5h", "5s", "6c", "6d", "6h", "6s",
    "7c", "7d", "7h", "7s", "8c", "8d", "8h", "8s", 
    "9c", "9d", "9h", "9s", "ac", "ad", "ah", "as", 
    "jc", "jd", "jh", "js", "kc", "kd", "kh", "ks",
    "qc", "qd", "qh", "qs", ] ;

  shuffle(array){
    let i=0, j=0, temp=null;
    for( i=array.length-1; i>0;i-=1){
      j = Math.floor(Math.random()*(i+1));
      temp = array[i];
      array[i]= array[j];
      array[j]=  temp;
    }
  }

  generateNewSession(){
    this.shuffle(this.cardsArray);
    this.setState({
      cards: this.cardsArray,
      reciting:false,
      generating: true,
    });
  }

  saveSession(){
    if(this.state.cards.length <=2){
      alert("Nothing to save");
      return;
    }
    axios({
      method:"post",
      url   :"/api/save/session",
      data  :{
        username:this.props.username,
        field :"cards",
        datum :JSON.stringify(this.state.cards),
      },
    }).then((resp)=>{
      if(resp.status===200){
        console.log(">>> Successiful");
      }else{
        console.log(">>> Unsuccessiful");
      }
    }).catch( (err) =>{
      console.log(">>> error: "+ err);
    });
  }

  restoreSession(){
    //TODO: This gives a 501 error
    axios({
      method:"post",
      url:"/api/retrieve/session",
      data:{
        username:this.props.username,
        field   :"cards",
      },
    }).then((resp)=>{
      this.setState({ 
        cards: JSON.parse(resp.data.data),
        reciting: false,
      });
    }).catch( (err) =>{
      console.log(">>> error: "+ err);
    });
  }

  recite(){
    //suits = C: Clubs, D: Diamonds, H:Hearts, S:Spaced, K ,Q,J, A
    this.setState({
      recitation: this.state.cards,
      reciting: true,
      generating: false,
      cards:[],
    });
  }

  render(){
    var content;
    if(this.state.reciting){
      content=(
        <CardsRecite 
          validCards={this.cardsArray} 
          images={this.state.recitation}
        />
      )
    }else if(this.state.generating){
      content=(
        <div className="container" style={thiscss.imagesContainer}>
          {this.cardsArray.map( (image,index) => (
            <div key={index}>
              <img className="rounded float-left" 
                style={thiscss.imgcss} src={this.state.folder+image+".jpg"}
                alt="No Content"
                key={index}
              />
            </div>
          ))}
        </div>
      )
    }else{
      content=(
        <div>
        </div>
      );
    }

    return(
      <div>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a style={navcss.header}>Cards</a>
            </li>
            <li className="nav-item">
              <a style={navcss.li_a_css} onClick={()=>{this.generateNewSession()}} >Generate</a>
            </li>            
            <li className="nav-item">
              <a style={navcss.li_a_css} onClick={()=>{this.saveSession()}} >Save</a>
            </li>
            <li className="nav-item">
              <a style={navcss.li_a_css} onClick={()=>{this.restoreSession()}} >Restore</a>
            </li>            
            <li className="nav-item"> 
              <a style={navcss.li_a_css} onClick={()=>{this.recite()}} >Recite</a>
            </li>
          </ul>
        </div>
        <div> 
          {content}
        </div>
      </div>
    )
  };
}

const thiscss={ 
  imagesContainer:{
    //What to do what to do?
  },
  imgcss:{
    width: 150,
    height: 80,
    margin: 3,
    border: "1px solid #98c1d9",
    borderRadius: 8,
  },
}
