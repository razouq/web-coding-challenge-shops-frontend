import axios from 'axios';


const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYXpvdXEiLCJleHAiOjE1NzY0Mjc2OTJ9.nrUPK4MvcQh8IAhTkYtB2VqJwjqGQ4vjHmZUWoSRZD5BO8MmPfsuFoaZtiALNRdkhj2tfEltk-O31PWfce8WaA'
};

const data = {
  "lat": "-6.82861",
  "lon": "33.99216"
};


export const fetchNearbyShops = () => async dispatch => {
  const response = await axios.post("http://localhost:8080/api/shops/getNearby/1?page=0",
    data,{headers});
  console.log(response.data);
  dispatch({type: 'FETCH_NEARBY_SHOPS', payload: response.data});
};

export const fetchPreferredShops = () => async dispatch => {
  const response = await axios.get("http://localhost:8080/api/shops/getPreferred/1?page=0",
    {headers});
  console.log(response.data);
  dispatch({type: 'FETCH_PREFERRED_SHOPS', payload: response.data});
};
