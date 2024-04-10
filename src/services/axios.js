import axiosInstance from '../services/jwt.interceptor';

// getRequest
export const getRequest = async (url) => {
    let response = await axiosInstance.get(url); // Use axiosInstance
    return response.data;
}

//post

export const postRequest = async (url, payload) => {
    let response = await axiosInstance.post(url, payload); // Use axiosInstance
    return response;
}

//delete
export const deleteRequest = async (url) => {
    let response = await axiosInstance.delete(url); // Use axiosInstance
    return response.data;
}