import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HighScores } from './HighScores';

describe('HighScores', () => {
    const mockgetScores = jest.fn();
    const props = {
        scores: [
            {"_id":"1","name":"Samsquanch","score":416800},
            {"_id":"2","name":"Samsquanch","score":416800},
            {"_id":"3","name":"Samsquanch","score":416800},
        ],
        getScores: mockgetScores
    }
    const highScores = shallow(<HighScores {...props}/>);
    it('renders properly', () => {
        expect(toJson(highScores)).toMatchSnapshot();
    });
    it('calls `getScores` prop when initialized', () => {
        expect(mockgetScores).toHaveBeenCalled();
    });
});