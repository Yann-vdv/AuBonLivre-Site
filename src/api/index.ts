import axios from "axios";
import { useAuth } from "../context/Auth";

const requestInstance = axios.create({
  //PROD
  // baseURL: "https://shoplisto.herokuapp.com/",
  //DEV
  baseURL: "http://localhost:3001/",
});

const RequestInterceptor = ({ children }: any) => {
  const { user,logout } = useAuth();

  requestInstance.interceptors.request.use(function (config) {
    config.headers['Authorization'] = `bearer ${user.logged ? `Bearer ${user.token}` : ''}`
    return config;
  }, function (error) {
    if ((error.response.status === 500 || error.response.status === 401) && user.logged) {
      console.error("Token expired", error.response);
      logout();
    }
    return Promise.reject(error);
  });

  requestInstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if ((error.response.status === 500 || error.response.status === 401) && user.logged) {
      console.error("Token expired", error.response);
      logout();
    }
    return Promise.reject(error);
  });

  return children;
}

export {requestInstance, RequestInterceptor};