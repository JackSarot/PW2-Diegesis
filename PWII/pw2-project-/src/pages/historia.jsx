/* eslint-disable no-unused-vars */
import Header from '../components/Header';
import portadaDemo from '../assets/imageExample.jpg';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ValidateUserIsLogged } from '../utils/validate.log';
import LoaderSpinner from '../components/LoaderSpinner';
import { GetHistoria } from '../services/historias.services';
import Swal from 'sweetalert2';
import {
    CheckFavoritaHistoria,
    CheckIfHistoriaIsFavorita,
} from '../services/usuarios.services';

function Historia() {
    const navigate = useNavigate();
    const params = useParams();
    const [historia, setHistoria] = useState(null);
    const [isFavorita, setIsFavorita] = useState(false);

    const onClickCheckFavorita = (e) => {
        CheckFavoritaHistoria(
            e.target.checked,
            historia._id,
            localStorage.getItem('user')
        )
            .then(({ data: res }) => {
                if (res.success) {
                    console.log(res);
                    setIsFavorita(res.data);
                    Swal.fire({
                        title: 'Historia',
                        text: res.message,
                        icon: 'info',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
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
    };

    useEffect(() => {
        if (!ValidateUserIsLogged()) {
            navigate('/login');
        }

        GetHistoria(params.id)
            .then(({ data: res }) => {
                if (res.success) {
                    setHistoria(res.data);
                } else {
                    Swal.fire({
                        title: 'Error',
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

        CheckIfHistoriaIsFavorita(localStorage.getItem('user'), params.id)
            .then(({ data: res }) => {
                setIsFavorita(res.success);
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
            {!historia ? (
                <LoaderSpinner />
            ) : (
                <div className="relative w-full flex justify-center">
                    <div className="w-full flex justify-center overflow-auto">
                        <div className="w-10/12 mt-4 mb-4">
                            <div className="flex justify-center">
                                <img
                                    src={historia.Portada}
                                    alt="Portada de Historia"
                                    className="rounded h-full w-auto"
                                />
                            </div>
                            <h2 className="text-center font-bold text-white text-3xl py-2">
                                {historia.Titulo}
                            </h2>
                            <div className="w-full flex">
                                <div className="w-6/12">
                                    <input
                                        type="checkbox"
                                        name="favorito"
                                        id="favorito"
                                        checked={isFavorita}
                                        onChange={onClickCheckFavorita}
                                    />
                                    <label className="text-white px-2">
                                        Favorito
                                    </label>
                                </div>
                                <div className="w-6/12 font-semibold text-white text-xl">
                                    {historia.Autor.NombreUsuario}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white font-medium m-4">
                                    {historia.Sinopsis}
                                </h4>
                            </div>
                            <div className="flex justify-center">
                                <p className="text-white font-normal whitespace-break-spaces text-clip bg-gray-950 rounded p-2">
                                    {historia.Texto}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Historia;
