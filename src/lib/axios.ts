import axios, { AxiosInstance } from "axios";

const $axios: AxiosInstance = axios.create({
  baseURL: "https://api.qky.life/api"
});

export default $axios;
