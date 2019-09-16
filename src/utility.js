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

export const deleteEleventhScore = (scores) => {
	if(scores.length >= 9){
		let scoresCopy = scores.map((score) => {
			return score;
		});
		let unsorted = scores.map((score) => {
			return score[1].score;
		});
		let sorted = [];

		for(let i=0; i<9; i++){
			let HighestScoreIndex = unsorted.indexOf(Math.max(...unsorted))
			sorted.push(scoresCopy[HighestScoreIndex]);
			unsorted.splice(HighestScoreIndex, 1);
			scoresCopy.splice(HighestScoreIndex, 1);
		}

		console.log(scoresCopy);
		
		scoresCopy.map((score) => {
			axios.delete( '/tetris/' + score[1]._id);
			return null;
		});
	}
}