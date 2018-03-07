import axios from 'axios';

export const FETCH_PLAYER = 'fetch_player';
export const FETCH_MATCHES = 'fetch_matches';

const ROOT_URL = 'https://api.dc01.gamelockerapp.com/shards';
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5ZjgxOTZmMC0wMDM1LTAxMzYtODc2OS0wYTU4NjQ2MTRhYmUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTE5OTg3OTA1LCJwdWIiOiJzZW1jIiwidGl0bGUiOiJ2YWluZ2xvcnkiLCJhcHAiOiJ2YWluc3RvcnktMzg1Yzc2OTMtZDI4My00YTRlLTkyMzMtNjAwZDVkYTU3NzA4Iiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.uOVWPaVhWjP28FF_JrQGBKn4Y3ucJJKvwHga4dt78wk';

const handleError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
}

export function fetchPlayer(values, callback) {
  const request = axios.create({
    baseURL: ROOT_URL,
    timeout: 4500,
    headers: { 'Authorization': API_KEY, 'Accept': 'application/vnd.api+json'}
  })
  .get(`/${values.region}/players?filter[playerNames]=${values.userName}`);

  return {
    type: FETCH_PLAYER,
    payload: request
  }
}

export function fetchMatches(values, callback) {
  const request = axios.create({
    baseURL: ROOT_URL,
    timeout: 4500,
    headers: { 'Authorization': API_KEY, 'Accept': 'application/vnd.api+json'}
  })
  .get(`/${values.region}/matches?sort=createdAt&page[limit]=1&filter[playerNames]=${values.userName}`);

  return {
    type: FETCH_MATCHES,
    payload: request
  }
}