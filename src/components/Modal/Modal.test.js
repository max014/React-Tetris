import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Modal } from './Modal';

describe('Modal', () => {
    const postScore = jest.fn();
	const deleteScore = jest.fn();
    const startGame = jest.fn();
    const props = {
        scores: [
            {"_id":"5d38cc4c32558d73ff83608e","name":"a","score":1548980},
            {"_id":"5d38cd1032558d78cb836093","name":"Samsquanch","score":416800},
            {"_id":"5d38cd3532558d39b6836095","name":"Moby Dick","score":596480},
            {"_id":"5d38cd4732558d3a4c836096","name":"Crazy Larry","score":447720},
            {"_id":"5d38cd5f32558d6da5836097","name":"Morgan Freeman","score":1658640},
            {"_id":"5d38cd7032558de28f836098","name":"The Great Westifer","score":1021140},
            {"_id":"5d38cc4c32558d73ff83608e","name":"a","score":1548980},
            {"_id":"5d38cd1032558d78cb836093","name":"Samsquanch","score":416800},
            {"_id":"5d38cd3532558d39b6836095","name":"Moby Dick","score":596480},
            {"_id":"5d38cd4732558d3a4c836096","name":"Crazy Larry","score":447720},
            {"_id":"5d38cd5f32558d6da5836097","name":"Morgan Freeman","score":1658640}
        ],
        score: 500000,
        postScore,
        deleteScore,
        startGame
    }
    const modal = shallow(<Modal {...props}/>);
    it('renders properly', () => {
        expect(toJson(modal)).toMatchSnapshot();
    });

    it('calls `postScore` and `startGame` from props', () => {
        modal.state().highScore = true;
        modal.update();
        modal.find('#btn-post').simulate('click');
        expect(postScore).toHaveBeenCalledTimes(1);
        expect(deleteScore).toHaveBeenCalledTimes(1);
        expect(startGame).toHaveBeenCalledTimes(1);
    });

    it('sets `state.name`', () => {
        const name = 'max';
        modal.find('input').simulate('change', {target: {value: name}});
        expect(modal.state().name).toEqual(name);
    });
});