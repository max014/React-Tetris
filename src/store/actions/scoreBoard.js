import axios from '../../axios';
import * as actionTypes from './actionTypes';

export const postScore = (score, name) => {
	return () => axios.post( '/tetris', {name: name, score: score});
};

export const getScores = () => {
	return dispatch => {
		axios.get('/tetris')
            .then(response => dispatch(setScores(response.data)));
	};
};

export const setScores = scores => {
	return {
		type: actionTypes.SET_SCORES,
		scores: scores.sort((a, b) => b.score-a.score)
	};
};

export const deleteScore = id => {
	return () => axios.delete( '/tetris/' + id);
};