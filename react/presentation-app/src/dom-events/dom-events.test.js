import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import * as setup from './../setupTests';
import DomEvents from './dom-events';

describe('Dom events', () => {
    it('should increment state on click', () => {
        // Render component
        const wrapper = shallow(<DomEvents />);

        // Find button and simulate DOM click event
        wrapper.find('button').simulate('click');

        // Get component state
        const clicks = wrapper.state().clicks;

        // Assert click
        expect(clicks).toBe(1);
    });

    it('should increment state on 2 when scroll twice', () => {
        // Render component
        const wrapper = shallow(<DomEvents />);

        // Find button and simulate DOM click event
        let button = wrapper.find('button');

        button.simulate('scroll');
        button.simulate('scroll');

        // Get component state
        const scroll = wrapper.state().scroll;

        // Assert click
        expect(scroll).toBe(2);
    });

    it('should increment state on focus', () => {
        // Render component
        const wrapper = shallow(<DomEvents />);

        // Find button and simulate DOM click event
        wrapper.find('button').simulate('focus');

        // Get component state
        const clicks = wrapper.state().focus;

        // Assert click
        expect(clicks).toBe(1);
    });

    it('should increment state on drag by passing additional arguments', () => {
        // Render component
        const wrapper = shallow(<DomEvents />);

        // Find button and simulate DOM click event
        wrapper.find('button').simulate('drag');

        // Get component state
        const clicks = wrapper.state().drag;

        // Assert click
        expect(clicks).toBe(5);
    });

    it('should throw exception when key down', () => {
        // Render component
        const wrapper = shallow(<DomEvents />);

        // Find button and simulate DOM click event
        let button = wrapper.find('button');

        expect(() => button.simulate('keydown')).toThrowError('Cannot read property \'setState\' of undefined');
    });
});

