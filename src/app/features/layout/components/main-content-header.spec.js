import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import MainContentHeader from './main-content-header';

describe('Main Content Header tests', () => {

  it('should contains a menu', () => {
    const root = shallow(<MainContentHeader />);

    const menu = root.find('.dropdown-menu');
    expect(menu).to.not.be.empty;
  });

  it('should contains user details', () => {
    const root = shallow(<MainContentHeader />);

    const user = root.find('.user-dropdown');
    expect(user).to.not.be.empty;
  });

  it('should contains a title', () => {
    const root = shallow(<MainContentHeader />);

    const title = root.find('h1');
    expect(title.text()).to.not.be.empty;
    expect(title.text()).to.equal('Dashboard');;
  });
});
