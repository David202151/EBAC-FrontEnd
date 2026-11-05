const add = (a, b) => {
    return a + b;
}; 

const nameUpper = (names) => {
    return names.map(name => name.toUpperCase());
}

module.exports = { add, nameUpper };