import React, { Component } from 'react';
import logo from './logo.svg';
import Card from "./components/GameCard"
import './App.css';
import Minions from "./minions.json";
import Header from "./components/Header";
import { throwStatement } from '@babel/types';
import GameBoard from "./components/GameBoard"
import ResultPanel from "./components/ResultPanel"

const shuffleArray = array => {

  for (let i = array.length - 1; i > 0; i--) {

    let randomIdx = Math.floor(Math.random() * (i + 1))
    let randomValue = array[randomIdx]

    array[randomIdx] = array[i]
    array[i] = randomValue

  }

  return array;

}

class App extends Component {
  state = {
    clicks: [],
    clickCount: 0,
    wins: 0,
    losses: 0,
    highScore: 0,
    Minions,
    results: "rules"
  };
  handleDivClick = (id) => {

    let clickArr = this.state.clicks
    let { highScore, clickCount } = this.state

    console.log(clickArr)

    if (clickArr.indexOf(id) > -1) {
     
      this.setState({ clicks: [], clickCount: 0, losses: this.state.losses + 1,results: "loss" })



    } else {

      clickCount++

      clickArr.push(id)
      this.setState({ clicks: clickArr, clickCount: clickCount })



      if (clickCount > highScore) {
        this.setState({ highScore: clickCount })
      }

      if(clickCount % Minions.length === 0){
        this.setState({clicks:[], wins: this.state.wins + 1, results: "win" })
      }else{
        this.setState({results: "rules"})
      }

      

    }

    this.setState({ Minions: shuffleArray(Minions) })

  };
  render() {
    //shuffleArray(Minions)

    return (

      <div>

        <Header clicks={this.state.clickCount} highScore={this.state.highScore} wins={this.state.wins} losses={this.state.losses} />

        <GameBoard Minions={this.state.Minions} handleDivClick={this.handleDivClick} />

        <ResultPanel display={this.state.results} />
        
      </div>


    );
  }

}







export default App;
