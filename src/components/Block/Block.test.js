import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Block } from './Block';

describe('Block', () => {
    const props = {
        step: 20,
        y: 10,
        x: 10,
        level: 0,
        color: 1
    }
    const block = shallow(<Block {...props}/>);
    it('renders properly', () => {
        expect(toJson(block)).toMatchSnapshot();
    });
});
