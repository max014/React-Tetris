import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-tetris.firebaseio.com'
});

export default instance;

