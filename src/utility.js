export const isHighScore = (score, scores) => {
	if(score === 0){ return false };
	scores.sort((a, b) => b.score-a.score);
	if(score > scores[scores.length-1].score){
		return true;
	} else {
		return false;
	}
}

export const pruneScores = (scores) => {
	if(scores.length > 10){
		scores.sort((a, b) => b.score-a.score);
		return scores.slice(10, scores.length);
	}
}