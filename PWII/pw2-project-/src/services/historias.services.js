import axios from 'axios';
const APIURL = import.meta.env.VITE_API_URL;

const GetHistorias = (orderBy) => {
    return axios.get(`${APIURL}api/historia/get-all/${orderBy}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};

const GetHistoriasPropias = (userId) => {
    return axios.get(`${APIURL}api/historia/usuario/${userId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};

const CreateHistoria = (historia) => {
    return axios.post(
        `${APIURL}api/historia`,
        {
            Titulo: historia.Titulo,
            Portada: historia.Portada,
            Sinopsis: historia.Sinopsis,
            Texto: historia.Texto,
            Autor: historia.Autor,
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
    );
};

const GetHistoria = (historiaId) => {
    return axios.get(`${APIURL}api/historia/${historiaId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};

const UpdateHistoria = (historia) => {
    return axios.put(
        `${APIURL}api/historia/${historia._id}`,
        {
            Titulo: historia.Titulo,
            Portada: historia.Portada,
            Sinopsis: historia.Sinopsis,
            Texto: historia.Texto,
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
    );
};

const DeleteHistoria = (idHistoria) => {
    return axios.delete(`${APIURL}api/historia/${idHistoria}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};

const SearchHistorias = (keyword) => {
    return axios.get(`${APIURL}api/historia/search/${keyword}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};

export {
    CreateHistoria,
    GetHistorias,
    GetHistoriasPropias,
    UpdateHistoria,
    DeleteHistoria,
    GetHistoria,
    SearchHistorias,
};
