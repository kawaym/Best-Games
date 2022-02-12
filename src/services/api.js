import axios from "axios";

async function login(data) {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, data);
}

function registerUser(user) {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/register`, user);
}

function getProducts(category) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/products`,
    { headers: { category: category } }
  );
  return promise;
}

function getFavorites(user) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/favorites`,
    {
      headers: {
        ...user,
        info: "favorites",
      }
    }
  );

  return promise;
}
function getCart(user) {
  const config = {
    headers: {
      ...user,
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
  const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/favorites`,
    {
      idProduct: product, user
    }
  );
  return promise;
}

function createInCart(product, user) {
  const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/shopping`,
    {
      idProduct: product, user
    }
  );
  return promise;
}

function deleteFavorite(product, user) {
  const promise = axios.delete(`${process.env.REACT_APP_BASE_URL}/favorites`,
    {
      headers: {
        id: product,
        ...user,
      }
    }
  );
  return promise;
}

function deleteInCart(product, user) {
  const config = {
    headers: {
      id: product,
      ...user,
    },
  };

  const promise = axios.delete(
    `${process.env.REACT_APP_BASE_URL}/shopping`,
    config
  );

  return promise;
}

function deleteCart(user) {
  const promise = axios.delete(`${process.env.REACT_APP_BASE_URL}/allshopping`,
    { headers: { ...user } }
  );
  return promise;
}

function getUser(user) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/user`,
    {
      headers: { ...user }
    }
  );
  return promise;
}


const api = {
  login,
  registerUser,
  getProducts,
  getFavorites,
  getCart,
  createFavorite,
  createInCart,
  deleteFavorite,
  deleteInCart,
  deleteCart,
  getUser,
};

export default api;
