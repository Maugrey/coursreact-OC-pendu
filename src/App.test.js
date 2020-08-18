import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import App, { SYMBOLS } from './App'
import Word from './Word'
import Keyboard from './Keyboard'
import {getRadomWord} from './wordlist'

describe('<App />', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
  })

  it('contains a word', () => {
    const wrapper = shallow(<App />)
    const word = getRadomWord()
    wrapper.setState({word: word})

    expect(wrapper).to.contain(<Word word={word} />)
  })

  it('display only restart when finished', () => {
    const wrapper = shallow(<App />)
    const word = getRadomWord()
    wrapper.setState({word: word, goodLetters: word})
    
    expect(wrapper.exists('button')).to.be.true()
    expect(wrapper.exists('Keyboard')).to.be.false()
  })

  it('display only keyboard when unfinished', () => {
    const wrapper = shallow(<App />)
    const word = getRadomWord()
    wrapper.setState({word: word, goodLetters: ''})

    expect(wrapper.exists('button')).to.be.false()
    expect(wrapper.exists('Keyboard')).to.be.true()
  })

})