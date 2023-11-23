/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HistoriaCard from '../components/HistoriaCard';
import { useEffect, useState } from 'react';
import { ValidateUserIsLogged } from '../utils/validate.log';
import { GetHistoriasFavoritasByUsuario } from '../services/usuarios.services';
import Swal from 'sweetalert2';

function FavoritosHistorias() {
    const navigate = useNavigate();
    const [historiasFavoritas, setHistoriasFavoritas] = useState([]);

    useEffect(() => {
        if (!ValidateUserIsLogged()) {
            navigate('/login');
        }

        GetHistoriasFavoritasByUsuario(localStorage.getItem('user'))
            .then(({ data: res }) => {
                if (res.success) {
                    setHistoriasFavoritas(res.data);
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
                        Historias Favoritas
                    </h2>
                    <div className="mt-2">
                        {historiasFavoritas.length > 0 &&
                            historiasFavoritas.map((h) => (
                                <HistoriaCard
                                    key={h._id}
                                    portada={h.HistoriaFavorita.Portada}
                                    autor={
                                        h.HistoriaFavorita.Autor.NombreUsuario
                                    }
                                    sinopsis={h.HistoriaFavorita.Sinopsis}
                                    title={h.HistoriaFavorita.Titulo}
                                    onClick={() => {
                                        navigate(
                                            `/historia/${h.HistoriaFavorita._id}`
                                        );
                                    }}
                                    onClickAutor={() => {
                                        navigate(
                                            `/perfil/${h.HistoriaFavorita.Autor._id}`
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

export default FavoritosHistorias;
