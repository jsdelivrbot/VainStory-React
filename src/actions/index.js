import axios from 'axios';

export const FETCH_PLAYER = 'fetch_player';

const ROOT_URL = 'https://api.dc01.gamelockerapp.com/shards';
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5ZjgxOTZmMC0wMDM1LTAxMzYtODc2OS0wYTU4NjQ2MTRhYmUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTE5OTg3OTA1LCJwdWIiOiJzZW1jIiwidGl0bGUiOiJ2YWluZ2xvcnkiLCJhcHAiOiJ2YWluc3RvcnktMzg1Yzc2OTMtZDI4My00YTRlLTkyMzMtNjAwZDVkYTU3NzA4Iiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.uOVWPaVhWjP28FF_JrQGBKn4Y3ucJJKvwHga4dt78wk';

export function fetchPlayer(values, callback) {
  const request = axios.create({
    baseURL: ROOT_URL,
    timeout: 3600,
    headers: { 'Authorization': API_KEY, 'Accept': 'application/vnd.api+json'}
  })
  .get(`/${values.region}/players?filter[playerNames]=${values.userName}`)
  .then(() => callback());

  return {
    type: FETCH_PLAYER,
    payload: request
  }
}