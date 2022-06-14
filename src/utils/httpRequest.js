import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data; // thay vì lúc nào dùng axios cũng phải res.data
};

export default httpRequest;
