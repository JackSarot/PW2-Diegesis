import { useState } from 'react';
import logoImg from '../assets/logo.png';
import { InputText } from './InputText';
import { Button } from './Button';

export const LoginCard = () => {
    const [logForm, setLogForm] = useState({
        usuario: '',
        password: '',
    });

    const onTextChange = (e) => {
        setLogForm({ ...logForm, [e.target.name]: e.target.value });
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
                    <Button text="Iniciar Sesión" />
                </div>
                <div className="mt-2">
                    ¿Aún no tienes cuenta?{' '}
                    <a className="hover:text-blue-500 hover:underline cursor-pointer font-semibold">
                        Registrate
                    </a>
                </div>
            </div>
        </>
    );
};
