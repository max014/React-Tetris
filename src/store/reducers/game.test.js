import game from './game';
import * as actionTypes from '../actions/actionTypes';

describe('game reducer', () => {
    const initialState = game(undefined, {type: actionTypes.START_GAME});
    describe('START_GAME', () => {
        it('starts a new game', () => {
            expect(initialState).toMatchSnapshot();
        });
    });

    describe('UPDATE', () => {
        const nextFrame = game(initialState, {type: actionTypes.UPDATE});
        it('adds the first piece', () => {
            expect(nextFrame.pieces).toHaveLength(1);
        });
        it('sets input to `null`', () => {
            expect(nextFrame.input).toBe(null);
        });
    });
    
    describe('SET_INPUT', () => {
        it('sets the keyboard input', () => {
            expect(game(initialState, {type: actionTypes.SET_INPUT, input: 39}).input).toEqual(39);
        });
    });
    
    describe('END', () => {
        it('sets `modalUp` to true', () => {
            expect(game(initialState, {type: actionTypes.END}).modalUp).toBe(true);
        });
    });

    describe('SET_SCORES', () => {
        it('sets `scores`', () => {
            const scores = [
                {name: '1', score: 1},
                {name: '2', score: 2},
                {name: '3', score: 3},
            ];
            expect(game(initialState, {type: actionTypes.SET_SCORES, scores: scores}).scores).toEqual(scores);
        });
    });
});