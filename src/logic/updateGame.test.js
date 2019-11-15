import { updateGame } from './updateGame';
import newGame from './newGame';
import Piece from './piece';

describe('updateGame', () => {
    let state;
    beforeEach(() => state = newGame());

    it('adds an active piece if there arent any', () => {
        state = updateGame(state);
        expect(state.pieces).toHaveLength(1);
    });
    
    it('drops the active piece every 30 calls on level 0', () => {
        const spy = jest.spyOn(Piece.prototype, 'fall');
        for(let i=0; i<31; i++){
            state = updateGame(state);
        }
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockClear()
    });
    
    it('sets `lost` to true when piece lands too high', () => {
        for(let i=0; i<100; i++){
            state.level = 8;
            state.input = 40; // down
            state = updateGame(state);
        }
        expect(state.lost).toBe(true);
    });
    
    it('sets `level` based on `lines`', () => {
        for(let i=1; i<=8; i++){
            state.lines = i * 10;
            expect(updateGame(state).level).toEqual(i); 
        }
    });
});
