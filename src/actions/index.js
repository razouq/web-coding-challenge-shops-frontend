import axios from 'axios';
import {
  FETCH_NEARBY_SHOPS,
  FETCH_PREFERRED_SHOPS,
  LIKE_DISLIKE_SHOP,
  LOADING_NEARBY_SHOPS,
  SET_CURRENT_USER,
  FETCH_MORE_NEARBY_SHOPS,
  CLEAN_NEARBY_SHOPS_LIST,
  CLEAN_PREFERRED_SHOPS_LIST,
  LOADING_PREFERRED_SHOPS,
  FETCH_MORE_PREFERRED_SHOPS,
  REMOVE_SHOP, ERRORS_REGISTER, CLEAN_ERRORS_REGISTER, ERRORS_LOGIN,
  CLEAN_ERRORS_LOGIN
} from "./types";
import jwt_decode from 'jwt-decode';
import setToken from "../security-utils/setToken";

/********************
 *   NEARBY SHOPS   *
 ********************/

export const fetchNearbyShops = (position) => async dispatch => {

  dispatch({
    type: CLEAN_NEARBY_SHOPS_LIST
  });

  dispatch({
    type: LOADING_NEARBY_SHOPS,
    payload: {
      loading: true,
      page: 1
    }
  });
  const response = await axios.post("/api/shops/nearby?page=0", position);
  dispatch({
    type: FETCH_NEARBY_SHOPS,
    payload: response.data,
  });
};

export const fetchMoreNearbyShops = (position, page) => async dispatch => {
  dispatch({
    type: LOADING_NEARBY_SHOPS,
    payload: {
      page: page+1,
      loading: true
    }
  });
  const response = await axios.post(`/api/shops/nearby?page=${page}`, position);
  dispatch({
    type: FETCH_MORE_NEARBY_SHOPS,
    payload: response.data
  });
};

/***************************
 * PREFERRED SHOPS
 ****************************/

export const fetchPreferredShops = () => async dispatch => {
  dispatch({
    type: CLEAN_PREFERRED_SHOPS_LIST
  });

  dispatch({
    type: LOADING_PREFERRED_SHOPS,
    payload: {
      loading: true,
      page: 1
    }
  });
  const response = await axios.get("/api/shops/preferred?page=0");
  dispatch({
    type: FETCH_PREFERRED_SHOPS,
    payload: response.data
  });
};

export const fetchMorePreferredShops = page => async dispatch => {
  dispatch({
    type: LOADING_PREFERRED_SHOPS,
    payload: {
      page: page+1,
      loading: true
    }
  });
  const response = await axios.get(`/api/shops/preferred?page=${page}`);
  dispatch({
    type: FETCH_MORE_PREFERRED_SHOPS,
    payload: response.data
  });
};


/***********************
 * LIKE DISLIKE REMOVE *
 ***********************/


export const likeShop = shopId => async dispatch => {
  await axios.get(`/api/shops/like/${shopId}`);
  dispatch({
    type: LIKE_DISLIKE_SHOP,
    payload: shopId
  });
};

export const dislikeShop = shopId => async dispatch => {
  await axios.get(`/api/shops/dislike/${shopId}`);
  dispatch({
    type: LIKE_DISLIKE_SHOP,
    payload: shopId
  });
};

export const removeShopFromPreferredList = shopId => async dispatch => {
  await axios.get(`/api/shops/remove/${shopId}`);
  dispatch({
    type: REMOVE_SHOP,
    payload: shopId
  });
};


/*******************
 * REGISTER LOGIN  *
 *******************/

export const register = (newUser, history) => async dispatch => {
  try {
    await axios.post("/api/account/register", newUser);
    history.push("/login");
    dispatch({
      type: ERRORS_REGISTER,
      payload: {}
    })
  } catch (err) {
    dispatch({
      type: ERRORS_REGISTER,
      payload: err.response.data
    });
  }
};

export const login = (user, history) => async dispatch => {
  try {
    const response =  await axios.post("/api/authentication/login", user);
    const {token} = response.data;
    localStorage.setItem("token", token);
    setToken(token);
    const decode = jwt_decode(token);
    dispatch({
      type: SET_CURRENT_USER,
      payload: decode
    });
    history.push("/nearby-shops");
  } catch (err) {
    dispatch({
      type: ERRORS_LOGIN,
      payload: {'login':'wrong username or password'}
    });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  setToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};

export const cleanRegisterErrors = () => dispatch => {
  dispatch({
    type: CLEAN_ERRORS_REGISTER,
    payload: {}
  })
};

export const cleanLoginErrors = () => dispatch => {
  dispatch({
    type: CLEAN_ERRORS_LOGIN,
    payload: {}
  })
};



