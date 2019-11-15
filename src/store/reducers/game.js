import * as actionTypes from '../actions/actionTypes';
import { updateGame } from '../../logic/updateGame';
import newGame from '../../logic/newGame';

const initialState = {
	...newGame(),
	scores: [],
	modalUp: false
}

const game = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.START_GAME:
			return {
				...state,
				...newGame(),
				lost: false,
				modalUp: false
			}
		case actionTypes.UPDATE:
			const newState = updateGame(state);
			return {
				...state,
				pieces: newState.pieces,
				board: newState.board,
				input: null,
				score: newState.score,
				lines: newState.lines,
				level: newState.level,
				lost: newState.lost
			};
		case actionTypes.SET_INPUT:
			return {
				...state,
				input: action.input
			};
		case actionTypes.END:
			return {
				...state,
				modalUp: true
			};
		case actionTypes.SET_SCORES:
			const scores = action.scores;
			return {
				...state,
				scores: scores
			}
		default:
			return state;
	}
};

export default game;