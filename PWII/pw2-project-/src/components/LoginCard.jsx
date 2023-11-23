import { useState } from 'react';
import logoImg from '../assets/logo.png';
import { InputText } from './InputText';
import { Button } from './Button';
import { LoginUsuario } from '../services/usuarios.services';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const LoginCard = () => {
    const navigate = useNavigate();
    const [logForm, setLogForm] = useState({
        usuario: '',
        password: '',
    });

    const onTextChange = (e) => {
        setLogForm({ ...logForm, [e.target.name]: e.target.value });
    };

    const loginUser = () => {
        if (logForm.usuario === '' && logForm.password === '') {
            Swal.fire({
                title: 'Error',
                text: 'Debes de proporcionar usuario y contraseña.',
                icon: 'error',
            });
            return;
        }
        LoginUsuario(logForm.usuario, logForm.password)
            .then(({ data }) => {
                if (data.success) {
                    localStorage.setItem('user', data.data.user);
                    localStorage.setItem('token', data.data.token);
                    navigate('/inicio');
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: data.data.message,
                        icon: 'error',
                    });
                }
            })
            .catch(({ response }) => {
                if (response)
                    Swal.fire({
                        title: 'Error',
                        text: response.data.message,
                        icon: 'error',
                    });
                else {
                    Swal.fire({
                        title: 'Error',
                        text: response.statusText,
                        icon: 'error',
                    });
                }
            });
    };

    return (
        <>
            <div className="absolute top-1/2 left-1/2 bg-slate-100 p-4 w-1/4 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md">
                <img className="w-1/2 h-auto" src={logoImg} alt="logo image" />
                <label className="mb-3 font-bold text-xl">Iniciar Sesión</label>
                <div className="mb-2 w-10/12">
                    <InputText
                        placeholder="Usuario"
                        value={logForm.usuario}
                        onChange={onTextChange}
                        name={'usuario'}
                    />
                </div>
                <div className="w-10/12">
                    <InputText
                        placeholder="Contraseña"
                        value={logForm.password}
                        onChange={onTextChange}
                        name={'password'}
                        type={'password'}
                    />
                </div>
                <div className="mt-4">
                    <Button onClick={loginUser} text="Iniciar Sesión" />
                </div>
                <div className="mt-2">
                    ¿Aún no tienes cuenta?{' '}
                    <a
                        onClick={() => {
                            navigate('/signup');
                        }}
                        className="hover:text-blue-500 hover:underline cursor-pointer font-semibold"
                    >
                        Registrate
                    </a>
                </div>
            </div>
        </>
    );
};
