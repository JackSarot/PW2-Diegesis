import { useState } from 'react';
import logoImg from '../assets/logo.png';
import { InputText } from './InputText';
import { Button } from './Button';
import { DateInput } from './DateInput';
import { FileInput } from './FileInput';
import { SigninUsuario } from '../services/usuarios.services';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const SignUpCard = () => {
    const navigate = useNavigate();
    const [logForm, setLogForm] = useState({
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        username: '',
        email: '',
        birthdate: '',
        password: '',
        confirmPassword: '',
        profilePic: '',
    });
    const onTextChange = (e) => {
        setLogForm({ ...logForm, [e.target.name]: e.target.value });
    };

    const signinUser = () => {
        if (
            logForm.nombre === '' ||
            logForm.apellidoPaterno === '' ||
            logForm.username === '' ||
            logForm.email === '' ||
            logForm.birthdate === '' ||
            logForm.password === ''
        ) {
            Swal.fire({
                title: 'Error',
                html: `Es necesario llenar los campos requeridos <br>
                -Nombre(s) <br>  
                -Apellido Paterno <br> 
                -Nombre de Usuario <br>
                -Correo <br>
                -Fecha de Nacimiento <br>
                -Contraseña <br>`,
                icon: 'error',
            });
            return;
        }
        if (logForm.password !== logForm.confirmPassword) {
            Swal.fire({
                title: 'Error',
                text: 'Las Contraseñas no coinciden.',
                icon: 'error',
            });
            return;
        }

        SigninUsuario(logForm)
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
                Swal.fire({
                    title: 'Error',
                    text: response.statusText,
                    icon: 'error',
                });
            });
    };

    const onSelectImage = (e) => {
        const trgt = e.target;
        const files = trgt.files;

        if (FileReader && files && files.length) {
            let fr = new FileReader();
            fr.onload = () => {
                setLogForm({ ...logForm, profilePic: fr.result });
            };

            fr.readAsDataURL(files[0]);
        }
    };
    return (
        <>
            <div className="absolute top-1/2 left-1/2 bg-slate-100 p-4 w-2/6 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md">
                <img className="w-1/2 h-auto" src={logoImg} alt="logo image" />
                <label className="mb-3 font-bold text-xl">Registro</label>
                <div className="w-full grid grid-rows-5 gap-1">
                    <div className="w-full grid grid-cols-2 row-span-1 gap-2">
                        <div className="col-span-1">
                            <InputText
                                placeholder="Nombre(s)"
                                value={logForm.nombre}
                                onChange={onTextChange}
                                name={'nombre'}
                            />
                        </div>
                        <div className="col-span-1">
                            <InputText
                                placeholder="Apellido Paterno"
                                value={logForm.apellidoPaterno}
                                onChange={onTextChange}
                                name={'apellidoPaterno'}
                            />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 row-span-1 gap-2">
                        <div className="col-span-1">
                            <InputText
                                placeholder="Apellido Materno"
                                value={logForm.apellidoMaterno}
                                onChange={onTextChange}
                                name={'apellidoMaterno'}
                            />
                        </div>
                        <div className="col-span-1">
                            <InputText
                                placeholder="Nombre de Usuario"
                                value={logForm.username}
                                onChange={onTextChange}
                                name={'username'}
                            />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 row-span-1 gap-2">
                        <div className="col-span-1">
                            <InputText
                                placeholder="Correo Electrónico"
                                value={logForm.email}
                                onChange={onTextChange}
                                name={'email'}
                            />
                        </div>
                        <div className="col-span-1">
                            <DateInput
                                placeholder="Fecha de Nacimiento"
                                value={logForm.birthdate}
                                onChange={onTextChange}
                                name={'birthdate'}
                            />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 row-span-1 gap-2">
                        <div className="col-span-1">
                            <InputText
                                placeholder="Contraseña"
                                value={logForm.password}
                                onChange={onTextChange}
                                name={'password'}
                                type={'password'}
                            />
                        </div>
                        <div className="col-span-1">
                            <InputText
                                placeholder="Confirmar Contraseña"
                                value={logForm.confirmPassword}
                                onChange={onTextChange}
                                name={'confirmPassword'}
                                type={'password'}
                            />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 row-span-1 gap-2">
                        <FileInput
                            placeholder={
                                logForm.profilePic !== ''
                                    ? 'Imagen seleccionada'
                                    : 'Selecciona Imagen del perfil...'
                            }
                            onChange={onSelectImage}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <Button onClick={signinUser} text="Iniciar Sesión" />
                </div>
                <div className="mt-2">
                    ¿Ya tienes cuenta?{' '}
                    <a
                        onClick={() => {
                            navigate;
                        }}
                        className="hover:text-blue-500 hover:underline cursor-pointer font-semibold"
                    >
                        Registrarme
                    </a>
                </div>
            </div>
        </>
    );
};
