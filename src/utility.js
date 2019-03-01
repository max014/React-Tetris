import axios from './axios';

export const isHighScore = (score, scores) => {
	if(score === 0){ return false };
	let highScores = [];
	let justScores = scores.map((x) => {
		return x[1].score;
	});

	for(let i=0; i<10; i++){
		highScores.push(Math.max(...justScores));
		justScores.splice(justScores.indexOf(Math.max(...justScores)), 1);
	}

	if(score > Math.min(...highScores)){
		return true;
	} else {
		return false;
	}
}

export const postScore = (score) => {
	axios.post( '/scores.json', {name: "max", score: score});
}
