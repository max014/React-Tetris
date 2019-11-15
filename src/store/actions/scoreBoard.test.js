import * as actions from './scoreBoard';
import * as actionTypes from './actionTypes';

it('creates an action to set the scores', () => {
    const scores = [
        {name: '1', score: 1},
        {name: '2', score: 2},
        {name: '3', score: 3},
    ];
    const expectedAction = {
		type: actionTypes.SET_SCORES,
		scores: scores
    };
    expect(actions.setScores(scores)).toEqual(expectedAction);
});