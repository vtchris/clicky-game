import React, { Component } from 'react';
import logo from './logo.svg';
import Card from "./components/gameCard"
import './App.css';
import Minions from "./minions.json";

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
    Minions
  };
  handleDivClick = (id) => {
  
    let clickArr = this.state.clicks

    console.log(clickArr)

    if (clickArr.indexOf(id) > -1) {
      alert("you lose")
      this.setState({ clicks: [] })
    } else {
      clickArr.push(id)
      this.setState({ clicks: clickArr })
    }

    this.setState({ Minions: shuffleArray(Minions) })

  };
  render() {
    //shuffleArray(Minions)
    return (
      Minions.map(minion => <Card key={minion.id} name={minion.name} img={process.env.PUBLIC_URL + minion.image} handleDivClick={this.handleDivClick} id={minion.id} />)
    );
  }

}







export default App;
