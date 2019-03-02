import axios from '../../axios';
import * as actionTypes from './actionTypes';


export const postScore = (score, name) => {
	return dispatch => {
		axios.post( '/scores.json', {name: name, score: score});
	};
};

export const getScores = () => {
	return dispatch => {
		axios.get('/scores.json')
            .then( response => {
            	dispatch(setScores(Object.entries(response.data)));
            } )
	};
};

export const setScores = (scores) => {
	return {
		type: actionTypes.SET_SCORES,
		scores: scores
	};
};
