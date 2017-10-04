import React from 'react';
import { shallow } from 'enzyme';

import MainContent from './main-content';
import MainContentHeader from './main-content-header';

describe('Main Content tests', () => {
  it('should contains header', () => {
    const root = shallow(<MainContent />);

    expect(root.contains(<MainContentHeader />)).toEqual(true);
  });

  it('should contains a section for the content', () => {
    const root = shallow(<MainContent />);
    const section = root.find('section');
    expect(section).toHaveLength(1);
  });

  it('should render content inside the section', () => {
    const root = shallow(<MainContent>hello</MainContent>);
    const section = root.find('div.col-sm-12');
    expect(section.text()).toEqual('hello');
  });
});
