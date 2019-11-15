import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Instructions } from './Instructions';

describe('Instructions', () => {
    const instructions = shallow(<Instructions/>);
    it('renders properly', () => {
        expect(toJson(instructions)).toMatchSnapshot();
    });
});