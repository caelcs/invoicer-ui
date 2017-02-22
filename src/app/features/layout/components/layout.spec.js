import React from 'react';
import {render, shallow} from 'enzyme';
import {expect} from 'chai';

import Layout from './layout';
import SideBar from './side-bar';

describe('Layout tests', () => {
  it('should contains Side Bar', () => {
    const wrapper = shallow(<Layout children='Hello world.'/>);

    expect(wrapper.contains(<SideBar />)).to.equal(true);
  });
});
