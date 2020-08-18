import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Word, { computeDisplay } from './Word'


describe('<Word />', () => {

  const word = 'testingreact'

  it('renders without crashing', () => {
    const wrapper = shallow(<Word word={word} />)
  })

  it('replace all letters by underscore', () => {
    var newWord = computeDisplay(word, '');
    expect(newWord).to.be.equal('____________')
  })

  it('replace unknown letters by underscore', () => {
    var newWord = computeDisplay(word, 'tec');
    expect(newWord).to.be.equal('te_t____e_ct')
  })

  it('match all letters', () => {
    var newWord = computeDisplay(word, 'aeistngcr');
    expect(newWord).to.be.equal(word)
  })

})