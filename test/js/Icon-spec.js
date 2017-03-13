import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Icon from './../../src/js/Icon';

describe('Icon', () => {
  let icon;

  describe('#render', () => {
    beforeEach(() => {
      icon = mount(<Icon alt="icon" className="my-icon">value</Icon>);
    });

    it('should have alt string', () => {
      expect(icon).to.have.attr('aria-label', 'icon');
    });

    it('should have default class name', () => {
      expect(icon).to.have.className('react-ex-icon');
    });

    it('should have provide class name', () => {
      expect(icon).to.have.className('my-icon');
    });

    it('should have value message', () => {
      expect(icon).to.have.text('value');
    });
  });
});
