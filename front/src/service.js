const axios = require('axios');
const baseUrl = 'http://localhost:7700/word/';

export function getWordByUsername (username) {
    return axios.get(`${baseUrl}${username}`)
}
