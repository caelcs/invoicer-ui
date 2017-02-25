import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import SideBar from './side-bar';

describe('Side Bar tests', () => {
  it('should contains a logo', () => {
    const sidebar = shallow(<SideBar />);

    const logo = sidebar.find('.logo');
    expect(logo).to.have.length(1);
    expect(logo.props().src).to.be.defined;
  });

  it('should show all the available menu items', () => {
    const sidebar = shallow(<SideBar />);

    const nav = sidebar.find('.nav');
    expect(nav.find('ul')).to.have.length(1);
  });
});
