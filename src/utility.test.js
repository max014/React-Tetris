import { pruneScores, isHighScore } from './utility';

const scores = [
    {"_id":"5d38cc4c32558d73ff83608e","name":"a","score":1548980},
    {"_id":"5d38cd1032558d78cb836093","name":"Samsquanch","score":416800},
    {"_id":"5d38cd3532558d39b6836095","name":"Moby Dick","score":596480},
    {"_id":"5d38cd4732558d3a4c836096","name":"Crazy Larry","score":447720},
    {"_id":"5d38cd5f32558d6da5836097","name":"Morgan Freeman","score":1658640},
    {"_id":"5d38cd7032558de28f836098","name":"The Great Westifer","score":1021140},
    {"_id":"5d38cd8532558d1feb836099","name":"Max ( ͡° ͜ʖ ͡°)","score":556600},
    {"_id":"5d8149d882105fdd1af535e7","name":"Max","score":420200},
    {"_id":"5d89366682105f802ef535e8","name":"MAAAXXX","score":2153600},
    {"_id":"5d8bcc6182105f9e8bf535e9","name":"Doggo","score":524800}
]

describe('pruneScores', () => {
    it('returns eleventh scores to be deleted', () => {
        const extraScore = {"_id":"1","name":"Samsquanch","score":406800};
        scores.push(extraScore);
        expect(pruneScores(scores)).toEqual([extraScore]);
        scores.pop();
    });
    it('returns `undefined` if there arent 11 scores yet', () => {
        expect(pruneScores(scores)).toEqual(undefined);
    });
});

describe('isHighScore', () => {
    it('returns true if score is in the top ten', () => {
        expect(isHighScore(1000000, scores)).toBe(true);
    });
    it('returns false if score is not in the top ten', () => {
        expect(isHighScore(10, scores)).toBe(false)
    });
    it('returns false if score is 0', () => {
        expect(isHighScore(0, scores)).toBe(false)
    });
});