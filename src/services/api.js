import axios from "axios";

async function login(data) {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, data);
}

function registerUser(user) {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/register`, user);
}

function getProducts(category) {
  const config = { headers: { category: category } };
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/products`, config);
  return promise;
}


const api = {
  login,
  registerUser,
  getProducts,
};

export default api;
