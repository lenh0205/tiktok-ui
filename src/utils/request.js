import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options)
    return response.data // thay vì lúc nào dùng axios cũng phải res.data
}

export default request;
