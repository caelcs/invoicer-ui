import React from 'react';
import { shallow } from 'enzyme';

import MainContentHeader from './main-content-header';

describe('Main Content Header tests', () => {

  it('should contains a menu', () => {
    const root = shallow(<MainContentHeader />);

    const menu = root.find('.dropdown-menu');
    expect(menu).toHaveLength(1);
  });

  it('should contains user details', () => {
    const root = shallow(<MainContentHeader />);

    const user = root.find('.user-dropdown');
    expect(user).toHaveLength(1);
  });

  it('should contains a title', () => {
    const root = shallow(<MainContentHeader />);

    const title = root.find('h1');
    expect(title.text()).toEqual('Dashboard');
  });
});
