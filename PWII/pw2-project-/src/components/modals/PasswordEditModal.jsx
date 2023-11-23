import { useEffect, useState } from 'react';
import { InputText } from '../InputText';
import PropTypes from 'prop-types';

const PasswordEditModal = ({ onSubmit, onCancel }) => {
    const [passwordForm, setPasswordForm] = useState({
        newPassword: '',
        newPasswordConfirm: '',
        currentPassword: '',
    });

    const onChangeInputForm = (e) => {
        setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setPasswordForm({
            newPassword: '',
            newPasswordConfirm: '',
            currentPassword: '',
        });
    }, []);

    return (
        <>
            <div className="absolute w-full h-full top-0 bg-black opacity-20"></div>
            <div className="absolute w-full h-full top-0 flex justify-center items-center">
                <div className="h-1/4 w-2/5 bg-white rounded-md drop-shadow-md">
                    <div className="h-full w-full flex flex-col items-center justify-start">
                        <div className="w-10/12 mt-6 mb-3">
                            <InputText
                                placeholder="Contraseña Actual."
                                name={'currentPassword'}
                                type={'password'}
                                value={passwordForm.currentPassword}
                                onChange={onChangeInputForm}
                            />
                        </div>
                        <div className="w-10/12 mb-3">
                            <InputText
                                placeholder="Nueva Contraseña"
                                name={'newPassword'}
                                type={'password'}
                                value={passwordForm.newPassword}
                                onChange={onChangeInputForm}
                            />
                        </div>
                        <div className="w-10/12">
                            <InputText
                                placeholder="Confirmar Nueva Contraseña"
                                name={'newPasswordConfirm'}
                                type={'password'}
                                value={passwordForm.newPasswordConfirm}
                                onChange={onChangeInputForm}
                            />
                        </div>
                        <div className="w-10/12 flex justify-between mt-4">
                            <button
                                onClick={() => {
                                    onSubmit(passwordForm);
                                }}
                                className="bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-md p-2 w-5/12"
                            >
                                Guardar
                            </button>
                            <button
                                onClick={onCancel}
                                className="bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-md p-2 w-5/12"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

PasswordEditModal.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default PasswordEditModal;
