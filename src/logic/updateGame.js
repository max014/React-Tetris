import Piece from './piece';

const randomPiece = () => {
	const rand =  199 //Math.floor(Math.random() * 700);
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
	
	for(let i=0; i<board.length; i++) {
		if(!board[i].includes(0)){
			newBoard.splice(i, 1);
			newBoard.push([0,0,0,0,0,0,0,0,0,0]);
			i--;
		};
	};

	return newBoard;
};

const checkForDeath = (board) => {
	for (let i=0; i<10; i++) {
		if(board[21][i] !== 0){
			return true;
		}
	};
	return false;
};

export const updateGame = (board, pieces, input) => {
	const activePieces = pieces.filter((piece) => {
		return piece.active;
	});

	// add piece if there are no active pieces
	let newPiecesArray = pieces;
	if(activePieces.length === 0){
		const piece = new Piece(randomPiece());
		newPiecesArray = pieces.concat(piece);
	}
	//

	let newBoard = board;

	// move active pieces
	activePieces.map((piece) => {

		if(input){
			piece.position.map((block) => { // remove pevious position from board
				newBoard[block.y][block.x] = 0;
				return null;
			});

			piece.move(input, newBoard); // update piece 

			piece.position.map((block) => { // re-map piece to board
				newBoard[block.y][block.x] = piece.color;
				return null;
			});
			
		}

		piece.position.map((block) => { // remove pevious position from board
			newBoard[block.y][block.x] = 0;
			return null;
		});

		piece.fall(newBoard); // update piece 

		piece.position.map((block) => { // re-map piece to board
			newBoard[block.y][block.x] = piece.color;
			return null;
		});

		return null;
	});
	//

	 // when all pieces have landed
	if(activePieces.length === 0){
		newBoard = checkForLines(newBoard);// look for and delete full rows
		if(checkForDeath(newBoard)){
			newBoard = [[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0]];
		} // reset when you lose
	}
	//
	
	return {
		pieces: newPiecesArray,
		board: newBoard
	}

}