const axios = require('axios');

const add = (a, b) => {
    return a + b;
}; 

const nameUpper = (names) => {
    return names.map(name => name.toUpperCase());
}

const processData = (data, callback) => {
    const processedData = data.map(item => item * 2);
    callback(processedData);
};

const getUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

const getPosts = async () => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

module.exports = { add, nameUpper, processData, getUser, getPosts };