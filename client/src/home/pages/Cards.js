
import React, { Component } from "react";
import axios from "axios";
import CardsRecite from "../components/CardsRecite";
import navcss from "./pagestyles.js";

export default class Cards  extends Component{
  state={
    folder: "/cards/",
    generatedCards : [],
    userAnswer: [],
    reciting: false,
    generating: false,
    checkingAnswer: false,
    score: 0,
  }

  cards = [ 
    "2c", "2d", "2h", "2s", "3c", "3d", "3h", "3s", "4c", "4d", "4h", "4s", 
    "5c", "5d", "5h", "5s", "6c", "6d", "6h", "6s", "7c", "7d", "7h", "7s", 
    "8c", "8d", "8h", "8s", "9c", "9d", "9h", "9s", "10c", "10d", "10h", "10s",
    "jc", "jd", "jh", "js", "kc", "kd", "kh", "ks",
    "qc", "qd", "qh", "qs", "ac", "ad", "ah", "as"
  ];

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
    //Deep copy the cards and shuffle them, and save the shuffled cards in this.state.generatedCards
    let cardsCopy= JSON.parse(JSON.stringify(this.cards));
    this.shuffle(this.cardsCopy);
    this.setState({
      generatedCards: this.cardsCopy,
      reciting:false,
      generating: true,
      checkingAnswer: false,
    });
  }

  saveSession(){
    //Save the current session of cards in the database
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
    //Restore the saved session from the database
    axios({
      method:"post",
      url:"/api/retrieve/session",
      data:{
        username:this.props.username,
        field   :"cards",
      },
    }).then((resp)=>{
      this.setState({ 
        generatedCards: JSON.parse(resp.data.data),
        reciting: false,
        checkingAnswer: false,
      });
    }).catch((err)=>{
      console.log(">>> error: "+ err);
      //TODO: Make sure the error isnt spitting user informations
    });
  }

  recite(){
    //suits = C: Clubs, D: Diamonds, H:Hearts, S:Spaced, K ,Q,J, A
    this.setState({
      reciting: true,
      generating: false,
    });
  }

  addToUserAnswer(image){
    //Adds the user input from the CardsRecite to the user Answer
    this.setState({
      userAnswer: this.state.userAnswer.concat(image)
    });
  }

  removeFromAnswer(image){
    //TODO: Remove the clicked image from the answer
  }

  submitAnswer(){
    //TODO: Work on this one to check if the answer submitted is correct
    this.setState({
      reciting: false,
      generating: false,
      checkingAnswer: true,
    });
    //TODO: Compare the answers and display the correct sequence in green padding and incorrect 
    //cards in red padding
  }

  render(){
    var content;
    if(this.state.reciting){
      content=(
        <CardsRecite 
          cards={this.cards} 
          userAnswer={this.state.userAnswer}
          submitAnswer={this.submitAnswer.bind(this)}
          addToUserAnswer={this.addToUserAnswer.bind(this)}
          removeFromAnswer={this.removeFromAnswer.bind(this)}
        />
      )
    }else if(this.state.generating){
      content=(
        <div className="container" style={css.imagesContainer}>
          {this.cards.map( (image,index) => (
            <div key={index}>
              <img className="rounded float-left" 
                style={css.imgcss} src={this.state.folder+image+".jpg"}
                alt="No Content"
                key={index}
              />
            </div>
          ))}
        </div>
      )
    }else if(this.state.checkingAnswer){
      content=(
        <div>
          <div>
            Correct sequences appear in green while the incorrect ones appear in red
          </div>
          //TODO Make correct answers apprear in red and correct ones in gree
        </div>
      );
    } else{
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

const css={ 
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
