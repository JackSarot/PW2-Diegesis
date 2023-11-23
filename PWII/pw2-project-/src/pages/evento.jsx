/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import backgroundImg from '../assets/stars.jpg';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { ValidateUserIsLogged } from '../utils/validate.log';
import { GetCurrentEvento } from '../services/evento.services';
import Swal from 'sweetalert2';
import LoaderSpinner from '../components/LoaderSpinner';

function Evento() {
    const navigate = useNavigate();
    const [evento, setEvento] = useState(null);

    useEffect(() => {
        if (!ValidateUserIsLogged()) {
            navigate('/login');
        }
        GetCurrentEvento()
            .then(({ data: res }) => {
                if (res.success) {
                    setEvento(res.data);
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
    }, []);

    return (
        <>
            <Header />
            {!evento ? (
                <LoaderSpinner />
            ) : (
                <div className="relative w-full flex justify-center">
                    <div className="w-10/12">
                        <h2 className="font-semibold text-white text-3xl text-center mt-2 mb-4">
                            {evento.NombreEvento}
                        </h2>
                        <div className="bg-slate-200 min-h-[500px] p-4">
                            {evento.Explicacion}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Evento;
