import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API // http://api.ggg.com
});


export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validate', token);
        return response.data;
    },
    signin: async (email: string, password: string) => {
        return {
            user: { id: 1, name: 'Patrick', email: 'patrick@mail.com' },
            token: '15614856484'
        };
        
        const response = await api.post('/signin', {email, password}); // http://api.ggg.com'/signin'
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logout'); // http://api.ggg.com'/logout'
        return response.data;
    }
});