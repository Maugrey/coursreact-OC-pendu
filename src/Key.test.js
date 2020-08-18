import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Key from './Key'

describe('<Key />', () => {

  const word = 'testingreact'

  it('renders without crashing', () => {
    const l = 'a'
    const wrapper = shallow(<Key
      key={l}
      letter={l}
      onClick={() => onClick(l)}
    />)
  })

  it('should trigger onClick when clicked', () => {
    const l = 'a'
    const onClick = sinon.spy()
    const wrapper = shallow(<Key
      key={l}
      letter={l}
      onClick={() => onClick(l)}
    />)

    wrapper.simulate('click')
    expect(onClick).to.have.been.calledWith(l)
  })



})