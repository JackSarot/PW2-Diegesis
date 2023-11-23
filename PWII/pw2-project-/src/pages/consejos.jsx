/* eslint-disable react-hooks/exhaustive-deps */
import backgroundImg from '../assets/stars.jpg';
import Header from '../components/Header';
import ConsejoCard from '../components/ConsejoCard';
import { useEffect, useState } from 'react';
import { ValidateUserIsLogged } from '../utils/validate.log';
import { useNavigate } from 'react-router-dom';
import { GetAllConsejos } from '../services/consejos.services';
import Swal from 'sweetalert2';
import LoaderSpinner from '../components/LoaderSpinner';

function Consejos() {
    const navigate = useNavigate();
    const [consejos, setConsejos] = useState([]);

    useEffect(() => {
        if (!ValidateUserIsLogged()) {
            navigate('/login');
        }

        GetAllConsejos()
            .then(({ data }) => {
                if (data.success) {
                    setConsejos(data.data);
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: data.message,
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
            {consejos.length === 0 ? (
                <LoaderSpinner />
            ) : (
                <div className="relative w-full flex justify-center">
                    <div className="w-10/12">
                        <h2 className="font-semibold text-white text-3xl text-center mt-2 mb-4">
                            Consejos
                        </h2>
                        {consejos.map((c) => (
                            <ConsejoCard
                                consejoTitle={c.NombreConsejo}
                                consejoDesc={c.Contenido}
                                key={c._id}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Consejos;
