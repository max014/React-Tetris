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
	let sorted = [];
	let unsorted = scores;
	if(scores.length >= 9){
		for(let i=0; i<9; i++){
			sorted.push(Math.max(...unsorted));
			unsorted.splice(unsorted.indexOf(Math.max(...unsorted)), 1);
		}
		
		unsorted.map((score) => {
			axios.delete( '/scores/' + score[0] + '.json');
			return null;
		});
	}
}