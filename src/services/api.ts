import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://stock-print.herokuapp.com/',
  /* baseURL: 'http://localhost:3333/', */

})  
