import axios from 'axios';


//const BASE_URL = "https://best-games-api.herokuapp.com";
const BASE_URL = "http://localhost:5000";



async function login(data) {
    return await axios.post(`${BASE_URL}/login`, data);
}

function registerUser(user) {
    return axios.post(`${BASE_URL}/register`, user);
}


const api = {
    login,
    registerUser,
};

export default api;