import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import MainContent from './main-content';

describe('Main Content tests', () => {
  it('should contains boostrap container', () => {
    const mainContent = shallow(<MainContent>Hello world</MainContent>);

    const content = mainContent.find('.main-content');
    expect(content).to.have.length(1);

    const container = content.find('.container-fluid');
    expect(container.text()).is.equal('Hello world');
  });
});
