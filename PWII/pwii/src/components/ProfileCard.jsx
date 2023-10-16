/* eslint-disable no-unused-vars */
import { useState } from 'react';
import profilePicExample from '../assets/profile.png';
import PropTypes from 'prop-types';

const ProfileCard = ({ isSelf }) => {
    const [usuario, setUsuario] = useState({
        nombre: 'Nombre de Usuario',
        correo: 'usuario@ejemplo.com',
        birthday: '99/99/9999',
        bibliografia: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Donec bibendum orci lectus, vitae porta lorem pellentesque vel. 
Sed porta tincidunt suscipit. Integer est lorem, interdum at lorem nec,
feugiat tempor leo.`,
        isFavorite: false,
    });

    return (
        <div className="h-[250px] flex w-full">
            <div className="flex items-center justify-center h-full w-3/12">
                <img
                    className="h-1/2 w-auto"
                    src={profilePicExample}
                    alt="Profile Pic"
                />
            </div>
            <div className="flex flex-col justify-center w-3/12">
                <p className="font-bold text-lg text-white">{usuario.nombre}</p>
                <p className="font-normal text-base text-white my-6">
                    {usuario.correo}
                </p>
                <p className="font-normal text-base text-white">
                    {usuario.birthday}
                </p>
            </div>
            <div className="flex w-6/12 flex-col justify-center">
                <div>
                    <input type="checkbox" />
                    <label className="text-base text-white font-semibold px-2">
                        Favorito
                    </label>
                </div>
                <div>
                    <textarea
                        readOnly
                        className="w-full min-h-[200px] p-2"
                        value={usuario.bibliografia}
                    />
                </div>
            </div>
        </div>
    );
};

ProfileCard.propTypes = {
    isSelf: PropTypes.bool,
};

ProfileCard.defaultProps = {
    isSelf: false,
};

export default ProfileCard;
