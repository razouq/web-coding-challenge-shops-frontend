import axios from 'axios';
import {FETCH_NEARBY_SHOPS,
        FETCH_PREFERRED_SHOPS,
        LIKE_DISLIKE_SHOP,
        LOADING_NEARBY_SHOPS,
        SET_CURRENT_USER,
        FETCH_MORE_NEARBY_SHOPS,
        CLEAN_NEARBY_SHOPS_LIST
        } from "./types";
import jwt_decode from 'jwt-decode';
import setToken from "../security-utils/setToken";



export const fetchNearbyShops = (position) => async dispatch => {
  // first loading
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
  console.log("loading page: ", 0);
  const response = await axios.post("http://localhost:8080/api/shops/getNearby?page=0",
    position);
  console.log(response.data);
  dispatch({
    type: FETCH_NEARBY_SHOPS,
    payload: response.data
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
  console.log("loading page: ", page);
  const response = await axios.post("http://localhost:8080/api/shops/getNearby?page=" + page,
    position);
  console.log(response.data);
  dispatch({
    type: FETCH_MORE_NEARBY_SHOPS,
    payload: response.data
  });
};

export const fetchPreferredShops = () => async dispatch => {
  const response = await axios.get("http://localhost:8080/api/shops/getPreferred?page=0");
  console.log(response.data);
  dispatch({type: FETCH_PREFERRED_SHOPS, payload: response.data});
};

export const likeShop = shopId => async dispatch => {
  await axios.get("http://localhost:8080/api/shops/like/" + shopId);
  console.log("liked " + shopId);
  dispatch({
    type: LIKE_DISLIKE_SHOP,
    payload: shopId
  });
};

export const dislikeShop = shopId => async dispatch => {
  await axios.get("http://localhost:8080/api/shops/dislike/"+shopId);
  dispatch(fetchNearbyShops(0));
};

export const removeShopFromPreferredList = shopId => async dispatch => {
  await axios.get("http://localhost:8080/api/shops/removeLikedShop/" + shopId);
  console.log("remove " + shopId);
  dispatch(fetchPreferredShops());
};

export const register = (newUser, history) => async dispatch => {
  await axios.post("http://localhost:8080/api/account/register", newUser);
  history.push("/");
};

export const login = (user, history) => async dispatch => {
  const response =  await axios.post("http://localhost:8080/api/authentication/login", user);
  const {token} = response.data;
  localStorage.setItem("token", token);
  setToken(token);
  const decode = jwt_decode(token);
  console.log(decode);
  dispatch({
    type: SET_CURRENT_USER,
    payload: decode
  });
  history.push("/nearby-shops");
};


export const logout = () => dispatch => {
  console.log("logout");
  localStorage.removeItem("token");
  setToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};



