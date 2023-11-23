/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import profilePicExample from '../assets/profile.png';
import PropTypes from 'prop-types';
import { GetUsuarioProfile } from '../services/usuarios.services';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { formatDateString } from '../utils/date';
import ImageEditModal from './modals/ImageEditModal';

const ProfileCard = ({
    profileData,
    isSelf,
    obras,
    isChecked,
    onClickImageEdit,
    onClickEditPassword,
    onClickEditUser,
    onCheckFavorite,
}) => {
    return (
        <>
            <div className="h-[250px] flex w-full">
                <div className="flex items-center justify-center h-auto w-3/12 max-w-xs rounded-full">
                    <div className="flex flex-row h-3/4 w-3/4  items-center">
                        <img
                            className="h-full w-auto object-cover aspect-square rounded-full border-2 border-white"
                            src={profileData.Foto}
                            alt="Profile Pic"
                        />
                        {isSelf && (
                            <div
                                onClick={onClickImageEdit}
                                className="bg-white rounded-full relative top-20 right-14 cursor-pointer hover:bg-slate-200 active:bg-slate-300"
                            >
                                <span className="material-symbols-outlined">
                                    edit
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col justify-center w-3/12 px-2">
                    <p className="font-bold text-lg text-white">{`${profileData.Nombre} ${profileData.ApellidoPaterno} ${profileData.ApellidoMaterno}`}</p>
                    <p className="font-normal text-base text-white my-6">
                        {profileData.Correo}
                    </p>
                    <p className="font-normal text-base text-white">
                        {profileData.FechaNacimiento !== '' &&
                            formatDateString(profileData.FechaNacimiento)}
                    </p>
                    {isSelf && (
                        <>
                            <p
                                onClick={onClickEditUser}
                                className="font-normal text-base text-white hover:underline cursor-pointer mt-4"
                            >
                                Editar Usuario
                            </p>
                            <p
                                onClick={onClickEditPassword}
                                className="font-normal text-base text-white hover:underline cursor-pointer"
                            >
                                Editar Contraseña
                            </p>
                        </>
                    )}
                </div>
                <div className="flex w-6/12 flex-col justify-center">
                    {!isSelf && (
                        <div>
                            <input
                                checked={isChecked}
                                onChange={onCheckFavorite}
                                type="checkbox"
                            />
                            <label className="text-base text-white font-semibold px-2">
                                Favorito
                            </label>
                        </div>
                    )}
                    <div>
                        <textarea
                            readOnly
                            className="w-full min-h-[200px] p-2"
                            value={profileData.Bibliografia}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

ProfileCard.propTypes = {
    profileData: PropTypes.objectOf(PropTypes.any),
    isSelf: PropTypes.bool,
    obras: PropTypes.arrayOf(PropTypes.object),
    isChecked: PropTypes.bool,
    onClickImageEdit: PropTypes.func,
    onClickEditPassword: PropTypes.func,
    onClickEditUser: PropTypes.func,
    onCheckFavorite: PropTypes.func,
};

ProfileCard.defaultProps = {
    profileData: {},
    isSelf: false,
    obras: [],
    isChecked: false,
};

export default ProfileCard;
