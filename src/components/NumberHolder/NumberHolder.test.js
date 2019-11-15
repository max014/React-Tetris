import React from 'react';
import { NumberHolder } from './NumberHolder';
import { shallow } from 'enzyme';
import toJson from  'enzyme-to-json';

describe('NumberHolder', () => {
    const props = {title: 'string', number: 0};
    const numberHolder = shallow(<NumberHolder {...props}/>);
    it('renders properly', () => {
        expect(toJson(numberHolder)).toMatchSnapshot();
    })
});