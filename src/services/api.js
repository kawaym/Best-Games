import axios from "axios";

async function login(data) {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, data);
}

function registerUser(user) {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/register`, user);
}

function getProducts(category) {
  const config = { headers: { category: category } };
  const promise = axios.get(
    `${process.env.REACT_APP_BASE_URL}/products`,
    config
  );
  return promise;
}

function getFavorites(user) {
  const config = {
    headers: {
      user: user,
      info: "favorites",
    },
  };
  const promise = axios.get(
    `${process.env.REACT_APP_BASE_URL}/favorites`,
    config
  );

  return promise;
}
function getCart(user) {
  const config = {
    headers: {
      user: user,
      info: "cart",
    },
  };
  const promise = axios.get(
    `${process.env.REACT_APP_BASE_URL}/shopping`,
    config
  );

  return promise;
}
function createFavorite(product, user) {
  const body = {
    id: product,
    email: user,
  };

  const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/favorites`, body);

  return promise;
}
function createInCart(product, user) {
  const body = {
    id: product,
    email: user,
  };

  const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/shopping`, body);

  return promise;
}

const api = {
  login,
  registerUser,
  getProducts,
  getFavorites,
  getCart,
  createFavorite,
  createInCart
};

export default api;
