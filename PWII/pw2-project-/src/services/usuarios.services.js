import axios from 'axios';
const APIURL = import.meta.env.VITE_API_URL;

const SigninUsuario = (usuario) => {
    return axios.post(`${APIURL}signin`, {
        Nombre: usuario.nombre,
        ApellidoPaterno: usuario.apellidoPaterno,
        ApellidoMaterno: usuario.apellidoMaterno,
        NombreUsuario: usuario.username,
        Correo: usuario.email,
        FechaNacimiento: usuario.birthdate,
        Bibliografia: '',
        Password: usuario.password,
        Foto: usuario.profilePic,
    });
};

const LoginUsuario = (username, password) => {
    return axios.post(`${APIURL}login`, {
        NombreUsuario: username,
        Password: password,
    });
};

const GetUsuarioProfile = (idUsuario) => {
    return axios.get(`${APIURL}api/usuario/${idUsuario}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
};

const updateFotoUsuario = (idUsuario, foto) => {
    return axios.put(
        `${APIURL}api/usuario/foto/${idUsuario}`,
        {
            _id: idUsuario,
            Foto: foto,
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
    );
};

const updateUsuarioData = (user) => {
    return axios.put(
        `${APIURL}api/usuario/${user._id}`,
        {
            Nombre: user.Nombre,
            ApellidoPaterno: user.ApellidoPaterno,
            ApellidoMaterno: user.ApellidoMaterno,
            NombreUsuario: user.NombreUsuario,
            Correo: user.Correo,
            Bibliografia: user.Bibliografia,
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
    );
};

const updatePassword = (userId, password, newPassword, newPasswordConfirm) => {
    return axios.put(
        `${APIURL}api/usuario/credenciales/${userId}`,
        {
            Password: password,
            NuevaPassword: newPassword,
            ConfirmarNuevaPassword: newPasswordConfirm,
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
    );
};

const CheckFavoritaHistoria = (check, idHistoria, idUsuario) => {
    if (check) {
        return axios.post(
            `${APIURL}api/favorito-historia/`,
            {
                _idUser: idUsuario,
                _idHistoria: idHistoria,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
    } else {
        return axios.delete(
            `${APIURL}api/favorito-historia/${idUsuario}/${idHistoria}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
    }
};

const GetHistoriasFavoritasByUsuario = (idUsuario) => {
    return axios.get(`${APIURL}api/favorito-historia/${idUsuario}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};

const CheckIfHistoriaIsFavorita = (idUsuario, idHistoria) => {
    return axios.get(
        `${APIURL}api/favorito-historia/${idUsuario}/${idHistoria}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
    );
};

const CheckFavoritoAutor = (check, idAutor, idUsuario) => {
    if (check) {
        return axios.post(
            `${APIURL}api/favorito-usuario/`,
            { _idUser: idUsuario, _idAutorFav: idAutor },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
    } else {
        return axios.delete(
            `${APIURL}api/favorito-usuario/${idUsuario}/${idAutor}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
    }
};

const GetAutoresFavoritosByUsuario = (idUsuario) => {
    return axios.get(`${APIURL}api/favorito-usuario/${idUsuario}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};

const CheckIfAutorIsFavorito = (idUsuario, idAutor) => {
    return axios.get(`${APIURL}api/favorito-usuario/${idUsuario}/${idAutor}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};

export {
    SigninUsuario,
    LoginUsuario,
    GetUsuarioProfile,
    updateFotoUsuario,
    updateUsuarioData,
    updatePassword,
    CheckFavoritaHistoria,
    GetHistoriasFavoritasByUsuario,
    CheckIfHistoriaIsFavorita,
    CheckFavoritoAutor,
    GetAutoresFavoritosByUsuario,
    CheckIfAutorIsFavorito,
};
