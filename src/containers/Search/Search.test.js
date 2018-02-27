import React from 'react'
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Search} from './Search'

configure({adapter: new Adapter()})
describe('<Search />',()=>{
    it('it should have option equal to repo')
    const wrapper = shallow(<Search />)
    expect(wrapper.state().option).toEqual('repo')
})
