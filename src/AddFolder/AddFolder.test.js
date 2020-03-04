import React from 'react';
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddFolder from './AddFolder'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe(`AddItemForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<AddFolder />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})