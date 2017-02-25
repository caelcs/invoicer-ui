import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import MainFooter from './main-footer';

describe('Main Footer tests', () => {
  it('should contains the copyrights to the layout creator', () => {
    const mainFooter = shallow(<MainFooter />);

    const copyright = mainFooter.find('.copyright');
    expect(copyright).to.have.length(1);

    const linkToLayoutCreators = copyright.find('a');
    expect(linkToLayoutCreators).to.have.length(1);
    expect(linkToLayoutCreators.props().href).to.equal('https://themeineed.com');
  });
});
