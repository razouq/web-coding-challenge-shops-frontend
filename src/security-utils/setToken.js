import axios from 'axios';

const setToken = token => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  } else {
    delete axios.defaults.headers.common["Authorization"];
    delete axios.defaults.headers.post['Content-Type'];
  }
};

export default setToken;