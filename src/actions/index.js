import axios from 'axios';
import {FETCH_NEARBY_SHOPS, FETCH_PREFERRED_SHOPS} from "./types";

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYXpvdXEiLCJleHAiOjE1NzY0NDc1MjZ9.jkOv_BbsjUa9D_cxteBxM_kk88lf_TX28znn9lRz4ztmnLJjXmZzemPbeJHuqVoiVXmkugkglaGG_tBj92f-4A'
};

const data = {
  "lat": "-6.82861",
  "lon": "33.99216"
};


export const fetchNearbyShops = () => async dispatch => {
  const response = await axios.post("http://localhost:8080/api/shops/getNearby/1?page=0",
    data,{headers});
  console.log(response.data);
  dispatch({type: FETCH_NEARBY_SHOPS, payload: response.data});
};

export const fetchPreferredShops = () => async dispatch => {
  const response = await axios.get("http://localhost:8080/api/shops/getPreferred/1?page=0",
    {headers});
  console.log(response.data);
  dispatch({type: FETCH_PREFERRED_SHOPS, payload: response.data});
};

export const likeShop = (shopId) => async dispatch => {
  await axios.get("http://localhost:8080/api/shops/like/1/" + shopId, {headers});
  console.log("liked " + shopId);
  dispatch(fetchNearbyShops());
};

export const removeShopFromPreferredList = (shopId) => async dispatch => {
  await axios.get("http://localhost:8080/api/shops/removeLikedShop/1/" + shopId, {headers});
  console.log("remove " + shopId);
  dispatch(fetchPreferredShops());
};
