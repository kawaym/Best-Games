import axios from 'axios';

async function login(data) {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, data);
}

function registerUser(user) {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/register`, user);
}


const api = {
    login,
    registerUser,
};

export default api;