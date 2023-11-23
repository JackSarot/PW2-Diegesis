/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import AutorCard from '../components/AutorCard';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { ValidateUserIsLogged } from '../utils/validate.log';
import { GetAutoresFavoritosByUsuario } from '../services/usuarios.services';
import Swal from 'sweetalert2';

function FavoritosAutores() {
    const navigate = useNavigate();
    const [autoresFavs, setAutoresFavs] = useState([]);

    useEffect(() => {
        if (!ValidateUserIsLogged()) {
            navigate('/login');
        }

        GetAutoresFavoritosByUsuario(localStorage.getItem('user'))
            .then(({ data: res }) => {
                if (res.success) {
                    setAutoresFavs(res.data);
                } else {
                    Swal.fire({
                        title: 'Autores Favoritos',
                        text: res.message,
                        icon: 'error',
                    });
                }
            })
            .catch(({ response }) => {
                Swal.fire({
                    title: 'Error',
                    text: response.statusText,
                    icon: 'error',
                });
            });
    }, []);
    return (
        <>
            <Header />
            <div className="relative w-full flex justify-center">
                <div className="w-10/12">
                    <h2 className="font-semibold text-white text-3xl text-center mt-2">
                        Autores Favoritos
                    </h2>
                    <div className="mt-2">
                        {autoresFavs.length > 0 &&
                            autoresFavs.map((a) => (
                                <AutorCard
                                    key={a._id}
                                    autor={a.UsuarioFavorito.NombreUsuario}
                                    sinopsis={a.UsuarioFavorito.Bibliografia}
                                    foto={a.UsuarioFavorito.Foto}
                                    onClick={() => {
                                        navigate(
                                            `/perfil/${a.UsuarioFavorito._id}`
                                        );
                                    }}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FavoritosAutores;
