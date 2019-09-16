import axios from '../../axios';
import * as actionTypes from './actionTypes';


export const postScore = (score, name) => {
	return dispatch => {
		axios.post( '/tetris', {name: name, score: score});
	};
};

export const getScores = () => {
	return dispatch => {
		axios.get('/tetris')
            .then( response => {
            	dispatch(setScores(Object.entries(response.data)));
            } )
	};
};

export const setScores = (scores) => {
	let scoresCopy = scores.map((score) => {
		return score;
	});
	let unsorted = scores.map((score) => {
		return score[1].score;
	});
	let sorted = [];

	for(let i=0; i<scores.length; i++){
		let HighestScoreIndex = unsorted.indexOf(Math.max(...unsorted))
		sorted.push(scoresCopy[HighestScoreIndex]);
		unsorted.splice(HighestScoreIndex, 1);
		scoresCopy.splice(HighestScoreIndex, 1);
	}

	return {
		type: actionTypes.SET_SCORES,
		scores: sorted
	};
};
