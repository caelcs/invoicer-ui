import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SideBar from './side-bar';

describe('Side Bar tests', () => {
  it('should render sidebar', () => {
    const root = shallow(<SideBar />);
    const sidebar = root.find('nav.sidebar');
    expect(sidebar).to.not.be.empty;
  });

  it('should render application title', () => {
    const root = shallow(<SideBar />);
    const titleContainer = root.find('h1.site-title');
    const titleLink = titleContainer.find('a');
    expect(titleLink.text()).to.not.be.empty;
    expect(titleLink.text()).to.equal(' Invoicer');
  });

  it('should render menu toggle', () => {
    const root = shallow(<SideBar />);
    const menuToggle = root.find('#menu-toggle');

    expect(menuToggle).to.not.be.empty;
  });

  it('should render side bar navigation', () => {
    const root = shallow(<SideBar />);
    const sidebarNav = root.find('ul.sidebar-nav');

    expect(sidebarNav).to.not.be.empty;
  });

  it('should render side bar navigation', () => {
    const root = shallow(<SideBar />);
    const logout = root.find('a.logout-button');

    expect(logout).to.not.be.empty;
  });
});
