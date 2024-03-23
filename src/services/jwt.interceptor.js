
import axios from 'axios';
import { urls } from '../services/urls';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        const currentURL = config.url;
        // Modify request headers, add token, etc.
        if (currentURL !== urls.auth.login) {//add unauth URLS here
            config.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;


// const requestHandler = (request) => {
//   console.log('request at handler', request);
//   if (request.isAuth) {
//     request.headers.Authorization =
//       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs';
//   }
//   return request;
// };

// const responseHandler = (response) => {
//   if (response.status === 401) {
//     window.location = '/';
//   }
//   return response;
// };

// const errorHandler = (error) => {
//   return Promise.reject(error);
// };

// customAxios.interceptors.request.use(
//   (request) => requestHandler(request),
//   (error) => errorHandler(error)
// );

// customAxios.interceptors.response.use(
//   (response) => responseHandler(response),
//   (error) => errorHandler(error)
// );

// export default customAxios;
