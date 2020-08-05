import React, { Component } from 'react'
import './App.css';
import Keyboard from './Keyboard'
import Word, {computeDisplay} from './Word'
import {getRadomWord} from './wordlist'

class App extends Component {

  state = {
    word: getRadomWord(),
    letters: 'abcdefghijklmnopqrstuvwxyz',
    goodLetters: '',
    triedLetters: ''
  }
  
  //binding for accessing state
  onClickLetter = (letter) => {
    const { word, triedLetters, goodLetters } = this.state

    if (word.indexOf(letter) >= 0)
      this.setState({ goodLetters: goodLetters + letter })
    else
      this.setState({ triedLetters: triedLetters + letter })
  }

  //binding for accessing state
  reStart = () => {
    this.setState({ word: getRadomWord(), goodLetters: '', triedLetters: '' })
  }

  render() {
    return (
      <div>
        <Word word={this.state.word} letters={this.state.goodLetters} />
        {
          computeDisplay(this.state.word, this.state.goodLetters) === this.state.word
            ? <button onClick={this.reStart} >restart</button>
            : <Keyboard letters={this.state.letters} triedLetters={this.state.triedLetters} goodLetters={this.state.goodLetters} onClick={this.onClickLetter} />
        }
      </div>
    );
  }
}


export default App;
