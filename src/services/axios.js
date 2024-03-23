import axiosInstance from '../services/jwt.interceptor';

// getRequest
export const getRequest = async (url) => {
    let response = await axiosInstance.get(url); // Use axiosInstance
    return response;
}

//post

export const postRequest = async (url, payload) => {
    let response = await axiosInstance.post(url, payload); // Use axiosInstance
    return response;
}