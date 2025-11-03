import {apiClient} from '../../shared/services/api-client.js';
export const registerApiCall = async (formdata) => {
    try {
    const response = await apiClient.post('/register' , formdata);
    return response;
    }
    catch (error)
    {
        console.error('Error during registration API call', error);
        throw error;
    }
}   

export const loginApiCall = async (formdata) => {
    try {
    const response = await apiClient.post('/login' , formdata);
    return response;
    }
    catch (error)
    {
        console.error('Error during login API call', error);
        throw error;
    }
}   