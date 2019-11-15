import piece from './piece';

const board = [[0,0,0,0,0,0,0,0,0,0],
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
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0]];

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
        piece.move(37, board);
        expect(piece).toMatchSnapshot();
        piece.move(39, board);
        expect(piece).toMatchSnapshot();
        piece.move(83, board);
        expect(piece).toMatchSnapshot();
        piece.move(68, board);
        expect(piece).toMatchSnapshot();
        piece.move(40, board);
        expect(piece).toMatchSnapshot();
    });
});