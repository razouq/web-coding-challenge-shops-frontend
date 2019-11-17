import axios from 'axios';
import {FETCH_NEARBY_SHOPS, FETCH_PREFERRED_SHOPS, SET_CURRENT_USER} from "./types";
import jwt_decode from 'jwt-decode';
import setToken from "../security-utils/setToken";

const data = {
  "lat": "-6.82861",
  "lon": "33.99216"
};


export const fetchNearbyShops = () => async dispatch => {
  const response = await axios.post("http://localhost:8080/api/shops/getNearby?page=0",
    data);
  console.log(response.data);
  dispatch({type: FETCH_NEARBY_SHOPS, payload: response.data});
};

export const fetchPreferredShops = () => async dispatch => {
  const response = await axios.get("http://localhost:8080/api/shops/getPreferred?page=0");
  console.log(response.data);
  dispatch({type: FETCH_PREFERRED_SHOPS, payload: response.data});
};

export const likeShop = (shopId) => async dispatch => {
  await axios.get("http://localhost:8080/api/shops/like/" + shopId);
  console.log("liked " + shopId);
  dispatch(fetchNearbyShops());
};

export const removeShopFromPreferredList = (shopId) => async dispatch => {
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
  history.push("/");
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

