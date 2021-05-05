import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
});

export const getAllCountries = () => api.get('/all');
