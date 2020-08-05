import React, { Component } from 'react'
import './App.css';
import Keyboard from './Keyboard'


class App extends Component {

  state = {
    word: 'bonjour',
    letters: 'abcdefghijklmnopqrstuvwxyz',
    goodLetters: '',
    triedLetters: ''
  }
  
  onClickLetter = (letter) => {
    const { word, triedLetters, goodLetters } = this.state

    console.log('click', letter, this)

    if (word.indexOf(letter) >= 0)
      this.setState({ goodLetters: goodLetters + letter })
    else
      this.setState({ triedLetters: triedLetters + letter })
  }

  render() {
    return (
      <Keyboard letters={this.state.letters} triedLetters={this.state.triedLetters} goodLetters={this.state.goodLetters} onClick={this.onClickLetter} />
    );
  }
}


export default App;
