import Piece from './piece';

const mapPiecesToBoard = (board, pieces) => {
	let updateBoard = [[0,0,0,0,0,0,0,0,0,0],
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

	pieces.map((piece) => {
		piece.position.map((block) => {
			updateBoard[block.y][block.x] = piece.color;
			return null;
		});
		return null;
	});
	return updateBoard;
}

const randomPiece = () => {
	const rand =  450//Math.floor(Math.random() * 700);
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

export const updateGame = (board, pieces, input) => {
	const activePieces = pieces.filter((piece) => {
		return piece.active;
	});

	let newPiecesArray = pieces;
	if(activePieces.length === 0){
		const piece = new Piece(randomPiece());
		newPiecesArray = pieces.concat(piece);
	}

	activePieces.map((piece) => {
		if(input){
			piece.move(input, board);
			piece.fall(board);
		} else {
			piece.fall(board);
		};
		return null;
	});

	return {
		pieces: newPiecesArray,
		board: mapPiecesToBoard(board, newPiecesArray)
	}
}