import axios from 'axios';
const APIURL = import.meta.env.VITE_API_URL;

const GetCurrentEvento = () => {
    return axios.get(`${APIURL}api/evento`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};

export { GetCurrentEvento };
