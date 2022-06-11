export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const allResultsUrl = BASE_URL + "all.json";

export function itemUrl(id) {
  return BASE_URL + "id/" + id + ".json";
}

export const LOGIN_URL = "http://localhost/starwars/";
export const TOKEN_PATH = "wp-json/jwt-auth/v1/token";

//api = "https://akabab.github.io/starwars-api/api/";
