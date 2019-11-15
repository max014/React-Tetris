import Piece from './piece';

const randomPiece = () => {
	const rand =  Math.floor(Math.random() * 700);
	if(rand < 100){
		return "O";
	} else if (rand < 200){
		return "I";
	} else if (rand < 300){
		return "T";
	} else if (rand < 400){
		return "S";
	} else if (rand < 500){
		return "Z";
	} else if (rand < 600){
		return "J";
	} else if (rand < 699){
		return "L";
	} else {
		return "SUPER";
	}
};


const checkForLines = (board) => {
	const newBoard = board;
	let lines = 0;
	for(let i=0; i<board.length; i++) {
		if(!board[i].includes(0)){
			newBoard.splice(i, 1);
			newBoard.push([0,0,0,0,0,0,0,0,0,0]);
			lines++;
			i--;
		};
	};

	let score = 0;
	switch(lines){
		case 1:
			score = 40;
			break;
		case 2:
			score = 100;
			break;
		case 3:
			score = 300;
			break;
		case 4:
			score = 1200;
			break;
		case 5:
			score = 5000;
			break;
		case 6:
			score = 10000;
			break;
		case 7:
			score = 35000;
			break;
		case 8:
			score = 50000;
			break;
		default:
			break;
	}
	
	return {
		newBoard: newBoard,
		score: score,
		lines: lines
	}
};

const checkForDeath = (board) => {
	for (let i=0; i<10; i++) {
		if(board[20][i] !== 0){
			return true;
		}
	};
	return false;
};

let iterator = 0;

export const updateGame = (state) => {
	let newLost = state.lost;
	let newBoard = state.board;
	let newScore = state.score;
	let newLines = state.lines;
	let currentLevel = state.level;
	let newPiecesArray = state.pieces;

	// array of only active piece
	const activePieces = state.pieces.filter(piece => piece.active);

	if(activePieces.length === 0){
		// add piece if there are no active pieces
		const piece = new Piece(randomPiece());
		newPiecesArray = state.pieces.concat(piece);
	} else { // move active piece
		const activePiece = activePieces[0];

		// remove pevious position from board
		activePiece.position.forEach(block => newBoard[block.y][block.x] = 0);

		// update activePiece
		if(state.input){
			activePiece.move(state.input, newBoard);
		}
		if(iterator === 0){
			activePiece.fall(newBoard);
		}

		// re-map activePiece to board
		activePiece.position.forEach(block => newBoard[block.y][block.x] = activePiece.color);
	}

	// increment levels based on lines
	if(newLines >= 80){
		currentLevel = 8;
	} else if(newLines >= 70){
		currentLevel = 7;
	} else if(newLines >= 60){
		currentLevel = 6; 
	} else if(newLines >= 50){
		currentLevel = 5;
	} else if(newLines >= 40){
		currentLevel = 4;
	} else if(newLines >= 30){
		currentLevel = 3;
	} else if(newLines >= 20){
		currentLevel = 2;
	} else if(newLines >= 10){
		currentLevel = 1;
	}

	 // when all pieces have landed
	if(activePieces.length === 0){
		const lineData = checkForLines(newBoard);// look for and delete full rows
		newBoard = lineData.newBoard;
		if (currentLevel === 0){
			newScore = newScore + lineData.score;
		} else {
			newScore = newScore + (lineData.score * state.level * 10);
		}
		newLines = newLines + lineData.lines;
		if(checkForDeath(newBoard)){
			newLost = true;
		}
	}

	// set speed based on level
	const levels = [30, 25, 20, 15, 10, 5, 3, 1, 0];
	if(iterator < levels[state.level]){
		iterator++;
	} else {
		iterator = 0;
	}
	
	return {
		pieces: newPiecesArray,
		board: newBoard,
		score: newScore,
		lines: newLines,
		level: currentLevel,
		lost: newLost
	}
}