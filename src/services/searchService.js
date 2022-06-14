import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data; // trả thẳng mảng dữ liệu
    } catch (error) {
        console.log(error);
    }
};
