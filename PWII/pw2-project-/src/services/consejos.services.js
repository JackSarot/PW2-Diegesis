import axios from 'axios';
const APIURL = import.meta.env.VITE_API_URL;

const GetAllConsejos = () => {
    return axios.get(`${APIURL}api/consejo`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};

export { GetAllConsejos };
