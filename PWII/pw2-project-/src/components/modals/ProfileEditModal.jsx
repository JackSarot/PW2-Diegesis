import { InputText } from '../InputText';
import PropTypes from 'prop-types';

const ProfileEditModal = ({ user, onSubmit, onCancel, onChange }) => {
    return (
        <>
            <div className="absolute w-full h-full top-0 bg-black opacity-20"></div>
            <div className="absolute w-full h-full top-0 flex justify-center items-center">
                <div className="h-2/4 w-2/5 bg-white rounded-md drop-shadow-md">
                    <div className="h-full w-full flex flex-col items-center justify-start">
                        <div className="w-10/12 mb-2 mt-5">
                            <InputText
                                placeholder="Nombre"
                                name={'Nombre'}
                                value={user.Nombre}
                                onChange={onChange}
                            />
                        </div>
                        <div className="w-10/12 mb-2">
                            <InputText
                                placeholder="Apellido Paterno"
                                name={'ApellidoPaterno'}
                                value={user.ApellidoPaterno}
                                onChange={onChange}
                            />
                        </div>
                        <div className="w-10/12 mb-2">
                            <InputText
                                placeholder="Apellido Materno"
                                name={'ApellidoMaterno'}
                                value={user.ApellidoMaterno}
                                onChange={onChange}
                            />
                        </div>
                        <div className="w-10/12 mb-2">
                            <InputText
                                placeholder="Nombre de Usuario"
                                name={'NombreUsuario'}
                                value={user.NombreUsuario}
                                onChange={onChange}
                            />
                        </div>
                        <div className="w-10/12 mb-2">
                            <InputText
                                placeholder="Correo"
                                name={'Correo'}
                                value={user.Correo}
                                onChange={onChange}
                            />
                        </div>
                        <textarea
                            className="w-10/12 border-2 focus:border focus:border-black outline-none rounded p-2"
                            rows={5}
                            placeholder="Bibliografía"
                            name="Bibliografia"
                            value={user.Bibliografia}
                            onChange={onChange}
                        />
                        <div className="w-10/12 flex justify-between mt-4">
                            <button
                                onClick={onSubmit}
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

ProfileEditModal.propTypes = {
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

ProfileEditModal.defaultProps = {};

export default ProfileEditModal;
