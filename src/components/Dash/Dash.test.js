import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Dash } from './Dash';

describe('Dash', () => {
    const props = {
        level: 1,
        score: 100,
        lines: 15
    };
    const dash = shallow(<Dash {...props}/>);
    it('renders properly', () => {
        expect(toJson(dash)).toMatchSnapshot();
    });
});