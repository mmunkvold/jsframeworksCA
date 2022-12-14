import { useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { BASE_URL } from "../../constants/api";

const url = BASE_URL;

const useAxios = () => {
  const [auth] = useContext(AuthContext);

  const apiClient = axios.create({
    baseURL: url,
  });

  apiClient.interceptors.request.use(function (config) {
    const token = auth.token;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return apiClient;
};

export default useAxios;
