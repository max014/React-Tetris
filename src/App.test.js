import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { App } from './App';

describe('App', () => {
  describe('when `modalUp` prop is false', () => {
    const app = shallow(<App modalUp={false}/>);
    it('renders properly', () => {
      expect(toJson(app)).toMatchSnapshot();
    });
    it('renders the display', () => {
      expect(app.find('Connect(Display)').exists()).toBe(true);
    });
  });

  describe('when `modalUp` prop is true', () => {
    const app = shallow(<App modalUp={true}/>);
    it('renders properly', () => {
      expect(toJson(app)).toMatchSnapshot();
    });
    it('renders the modal', () => {
      expect(app.find('Connect(Modal)').exists()).toBe(true);
    });
  });
});
