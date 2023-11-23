/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { InputText } from '../components/InputText';
import { FileInput } from '../components/FileInput';
import { Button } from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { ValidateUserIsLogged } from '../utils/validate.log';
import Swal from 'sweetalert2';
import {
    CreateHistoria,
    GetHistoria,
    UpdateHistoria,
} from '../services/historias.services';
import LoaderSpinner from '../components/LoaderSpinner';

function CrearHistoria() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [editHistoria, setEditHistoria] = useState(null);
    const [historia, setHistoria] = useState({
        _id: '',
        Titulo: '',
        Sinopsis: '',
        Texto: '',
        Portada: '',
        Autor: localStorage.getItem('user'),
    });

    const onChangeText = (e) => {
        setHistoria({ ...historia, [e.target.name]: e.target.value });
    };

    const submitHistoria = () => {
        if (
            historia.Titulo === '' ||
            historia.Sinopsis === '' ||
            historia.Texto === '' ||
            historia.Portada === ''
        ) {
            Swal.fire({
                title: 'Error',
                html: `Es necesario llenar los campos requeridos <br>
                -Titulo <br>  
                -Sinopsis <br> 
                -Texto <br>
                -Portada <br>`,
                icon: 'error',
            });
            return;
        }

        if (historia._id === '') {
            CreateHistoria(historia)
                .then(({ data: res }) => {
                    if (res.success) {
                        Swal.fire({
                            title: 'Historia',
                            text: res.message,
                            icon: 'success',
                            showConfirmButton: true,
                            confirmButtonText: 'Continuar',
                            confirmButtonColor: '#22c55e',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/inicio');
                            }
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
        } else {
            UpdateHistoria(historia)
                .then(({ data: res }) => {
                    Swal.fire({
                        title: 'Historia',
                        text: res.message,
                        icon: 'success',
                        showConfirmButton: true,
                        confirmButtonText: 'Continuar',
                        confirmButtonColor: '#22c55e',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/inicio');
                        }
                    });
                })
                .catch(({ response }) => {
                    Swal.fire({
                        title: 'Error',
                        text: response.statusText,
                        icon: 'error',
                    });
                });
        }
    };

    const onSelectImage = (e) => {
        const trgt = e.target;
        const files = trgt.files;

        if (FileReader && files && files.length) {
            let fr = new FileReader();
            fr.onload = () => {
                setHistoria({ ...historia, Portada: fr.result });
            };

            fr.readAsDataURL(files[0]);
        }
    };

    useEffect(() => {
        if (!ValidateUserIsLogged()) {
            navigate('/login');
        }

        if (id) {
            GetHistoria(id)
                .then(({ data: res }) => {
                    let usr = localStorage.getItem('user');
                    if (res.data.Autor._id !== usr) {
                        navigate('/inicio');
                    }
                    setEditHistoria(res.data);
                    setHistoria({
                        _id: res.data._id,
                        Titulo: res.data.Titulo,
                        Sinopsis: res.data.Sinopsis,
                        Portada: res.data.Portada,
                        Texto: res.data.Texto,
                        Autor: res.data.Autor._id,
                    });
                })
                .catch((response) => {
                    Swal.fire({
                        title: 'Error',
                        text: response,
                        icon: 'error',
                    });
                });
        }
    }, []);

    return (
        <>
            <Header />
            {id && !editHistoria ? (
                <LoaderSpinner />
            ) : (
                <div className="relative w-full flex justify-center">
                    <div className="w-10/12">
                        <div className="w-full flex justify-end mb-4 mt-4">
                            <div className="w-2/12">
                                <Button
                                    onClick={submitHistoria}
                                    text={
                                        id
                                            ? 'Editar Historia'
                                            : 'Guardar Historia'
                                    }
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="w-full justify-center flex mb-4">
                                <div className="flex justify-center w-1/4 h-[200px]">
                                    <img
                                        className="object-cover object-center bg-black rounded-md aspect-[3/4]"
                                        src={historia.Portada}
                                        alt="Portada historia"
                                    />
                                </div>
                            </div>
                            <FileInput
                                placeholder={
                                    historia.Portada === ''
                                        ? 'Selecciona Imagen de Portada...'
                                        : 'Portada Seleccionada'
                                }
                                onChange={onSelectImage}
                            />
                        </div>
                        <div className="mb-4">
                            <InputText
                                placeholder="Nombre de la Historia"
                                value={historia.Titulo}
                                name={'Titulo'}
                                onChange={onChangeText}
                            />
                        </div>
                        <div className="mb-4">
                            <InputText
                                placeholder="Sinopsis"
                                value={historia.Sinopsis}
                                name={'Sinopsis'}
                                onChange={onChangeText}
                            />
                        </div>
                        <textarea
                            className="border outline-none px-2 py-1 w-full rounded focus:border-green-950 focus:border h-9 min-h-full"
                            placeholder="Historia"
                            value={historia.Texto}
                            name="Texto"
                            onChange={onChangeText}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default CrearHistoria;
