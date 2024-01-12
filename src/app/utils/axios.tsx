import axios from "axios";

const baseURL = "https://gorest.co.in/public/v2/";
const token =
  "41fe5edca9c32c5ca812635135354b9ed3ca4452b0038fcdf9dcb0eec1e2b79d";
const apiInstance = axios.create({
  baseURL: baseURL,
  headers: { Authorization: `Bearer ${token}` },
});

export default apiInstance;
