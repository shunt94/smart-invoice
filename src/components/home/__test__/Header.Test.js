
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Header from '../Header'
import expect from 'expect'
/*
    Test Example, tests will be written for all components soon
*/
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(mount(<Header />).find('.any-class').length).toBe(0)
  })

  it("can run an expectation with render", function() {
    expect(render(<Header />).find('.any-class').length).toBe(0)
  })
})
