import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import * as setup from './../setupTests';
import DomEvents from './dom-events';

describe('Dom Events Tests', () => {
    it('On Click', () => {
        // Render component
        const wrapper = shallow(<DomEvents />);

        // Find button and simulate DOM click event
        wrapper.find('button').simulate('click');

        // Get component state
        const clicks = wrapper.state().clicks;

        // Assert click
        expect(clicks).toBe(1);
    });
});
