import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import MainNavBar from './main-nav-bar';

describe('Nav Bar tests', () => {
  it('should render a Nav Bar', () => {
    const mainNavBar = shallow(<MainNavBar />);

    const navBar = mainNavBar.find('.navbar .navbar-default');
    expect(navBar).to.have.length(1);
  });

  it('should have in Nav Bar a navigation menu buttons', () => {
    const mainNavBar = shallow(<MainNavBar />);

    const navBar = mainNavBar.find('.navbar .navbar-default');
    const container = navBar.find('.container-fluid');
    const buttons = container.find('.navbar-btn');

    expect(buttons).to.have.length(1);
  });

  it('should have in Nav Bar a header', () => {
    const mainNavBar = shallow(<MainNavBar />);

    const navBar = mainNavBar.find('.navbar .navbar-default');
    const container = navBar.find('.container-fluid');
    const header = container.find('.navbar-header');

    expect(header).to.have.length(1);
  });

  it('should have in Nav Bar a menu', () => {
    const mainNavBar = shallow(<MainNavBar />);

    const navBar = mainNavBar.find('.navbar .navbar-default');
    const container = navBar.find('.container-fluid');
    const menu = container.find('#navbar-menu');

    expect(menu).to.have.length(1);
  });
});
