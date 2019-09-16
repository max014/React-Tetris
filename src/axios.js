import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.programmermax.com'
});

export default instance;

