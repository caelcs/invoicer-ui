import React from 'react';
import { render, shallow } from 'enzyme';

import Layout from './layout';
import SideBar from './side-bar';
import MainContent from './main-content';

describe('Layout tests', () => {
  it('should contains Side Bar', () => {
    const wrapper = shallow(<Layout />);

    expect(wrapper.contains(<SideBar />)).toEqual(true);
  });

  it('should contains Content', () => {
    const wrapper = shallow(<Layout />);

    expect(wrapper.contains(<MainContent />)).toEqual(true);
  });
});
