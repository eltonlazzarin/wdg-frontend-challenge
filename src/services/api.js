import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    common: {
      Authorization: `Bearer ${token}`
    }
  }
});

export default api;
