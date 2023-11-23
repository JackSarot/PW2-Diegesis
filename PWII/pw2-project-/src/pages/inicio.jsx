import { useNavigate } from 'react-router-dom';
import Buscador from '../components/Buscador';
import Header from '../components/Header';
import HistoriaCard from '../components/HistoriaCard';
import { useEffect, useState } from 'react';
import { ValidateUserIsLogged } from '../utils/validate.log';
import { GetHistorias, SearchHistorias } from '../services/historias.services';
import Swal from 'sweetalert2';
import LoaderSpinner from '../components/LoaderSpinner';

function Inicio() {
    const navigate = useNavigate();
    const [historias, setHistorias] = useState([]);
    const [dropdownList] = useState([
        { value: 1, text: 'De la A a la Z' },
        { value: 2, text: 'De la Z a la A' },
        { value: 3, text: 'Más Recientes' },
        { value: 4, text: 'Más Antiguos' },
    ]);
    const [ddValue, setDdValue] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [isLoadingHistorias, setIsLoadingHistorias] = useState(true);

    const onDropDownChange = (e) => {
        setDdValue(parseInt(e.target.value));
    };

    const onKeywordChange = (e) => {
        setKeyword(e.target.value);
    };

    const onBuscar = () => {
        if (keyword === '') {
            getAllHistorias();
            return;
        }
        setHistorias([]);
        setIsLoadingHistorias(true);
        SearchHistorias(keyword)
            .then(({ data: res }) => {
                if (res.success) {
                    setIsLoadingHistorias(false);
                    setHistorias(res.data);
                } else {
                    Swal.fire({
                        title: 'Búsqueda',
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

    const getAllHistorias = () => {
        setHistorias([]);
        setIsLoadingHistorias(true);
        GetHistorias(ddValue)
            .then(({ data: res }) => {
                if (res.success) {
                    setIsLoadingHistorias(false);
                    setHistorias(res.data);
                } else {
                    Swal.fire({
                        title: 'Búsqueda',
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

        getAllHistorias();
    }, []);
    return (
        <>
            <Header />
            {isLoadingHistorias ? (
                <LoaderSpinner />
            ) : (
                <div className="relative w-full flex justify-center">
                    <div className="w-10/12">
                        <Buscador
                            dropdownList={dropdownList}
                            keyword={keyword}
                            optionValue={ddValue}
                            onDropdownChange={onDropDownChange}
                            onKeywordChange={onKeywordChange}
                            onSubmitSearch={onBuscar}
                        />
                        <div className="mt-2">
                            {historias.map((h) => (
                                <HistoriaCard
                                    title={h.Titulo}
                                    autor={h.Autor.NombreUsuario}
                                    sinopsis={h.Sinopsis}
                                    portada={h.Portada}
                                    key={h._id}
                                    onClick={() => {
                                        navigate(`/historia/${h._id}`);
                                    }}
                                    onClickAutor={() => {
                                        navigate(`/perfil/${h.Autor._id}`);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Inicio;
