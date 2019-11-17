import piece from './piece';
import newGame from './newGame';

const pieces = [
    new piece('O'),
    new piece('I'),
    new piece('T'),
    new piece('S'),
    new piece('Z'),
    new piece('J'),
    new piece('L'),
    new piece('SUPER')
];
const inputs = [37, 39, 40, 83, 68];
const board = newGame().board;

it('constructs each piece based on type', () => {
    pieces.forEach(piece => expect(piece).toMatchSnapshot());
});

it('rotates pieces clockwise', () => {
    pieces.forEach(piece => {
        piece.clockwise(board);
        expect(piece).toMatchSnapshot();
    });
});

it('rotates pieces counter clockwise', () => {
    pieces.forEach(piece => {
        piece.counterClockwise(board);
        expect(piece).toMatchSnapshot();
    });
});

it('moves piece based on input', () => {
    pieces.forEach(piece => {
        inputs.forEach(input => {
            piece.move(input, board);
            expect(piece).toMatchSnapshot();
        });
    });
});

it('ignores input if something is in the way', () => {
    board.forEach((row, i) =>  board[i] = [1,1,1,1,1,1,1,1,1,1]);
    pieces.forEach(piece => {
        const originalPosition = piece.position;
        inputs.forEach(input => {
            piece.move(input, board);
            expect(piece.position).toEqual(originalPosition);
        });
    });
});
