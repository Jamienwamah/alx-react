import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Renders App without crashing', () => {
    expect(wrapper.exists());
  });

  it('App component contains Notifications component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('App component contains Header component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('App component contains Login component', () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it('App component contains Footer component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
});
