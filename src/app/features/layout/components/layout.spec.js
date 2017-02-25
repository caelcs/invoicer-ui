import React from 'react';
import {render, shallow} from 'enzyme';
import {expect} from 'chai';

import Layout from './layout';
import SideBar from './side-bar';
import MainNavBar from './main-nav-bar';
import MainContent from './main-content';
import MainFooter from './main-footer';

describe('Layout tests', () => {
  it('should contains Side Bar', () => {
    const wrapper = shallow(<Layout children='Hello world.'/>);

    expect(wrapper.contains(<SideBar />)).to.equal(true);
  });

  it('should contains Navigation Bar', () => {
    const wrapper = shallow(<Layout children='Hello world.'/>);

    expect(wrapper.contains(<MainNavBar />)).to.equal(true);
  });

  it('should contains Content', () => {
    const wrapper = shallow(<Layout children='Hello world.'/>);

    expect(wrapper.contains(<MainContent>Hello world.</MainContent>)).to.equal(true);
  });

  it('should contains Footer', () => {
    const wrapper = shallow(<Layout children='Hello world.'/>);

    expect(wrapper.contains(<MainFooter />)).to.equal(true);
  });
});
