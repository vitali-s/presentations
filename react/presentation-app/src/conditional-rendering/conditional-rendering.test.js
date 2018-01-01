import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import * as setup from './../setupTests';
import ConditionalRendering from './conditional-rendering';

describe('Conditional rendering', () => {
    it('should render visible node', () => {
        // Render component
        const wrapper = shallow(<ConditionalRendering />);

        let visible = wrapper.find('.visible');

        expect(visible.length).toBe(1);
    });

    it('should render visible node', () => {
        // Render component
        const wrapper = shallow(<ConditionalRendering />);

        let visible = wrapper.find('.short-if');

        expect(visible.length).toBe(1);
    });
});

