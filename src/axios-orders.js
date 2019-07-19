import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b5233.firebaseio.com/'
});


export default instance;