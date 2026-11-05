const {add, nameUpper} = require('../js/main');

describe('add function', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });
    
    it('NameUpper function should convert names to uppercase', () => {
        const names = ['Alice', 'Bob', 'Charlie'];
        const expected = ['ALICE', 'BOB', 'CHARLIE'];
        expect(nameUpper(names)).toEqual(expected);
    });
});