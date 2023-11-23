/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import HistoriaCard from '../components/HistoriaCard';
import ProfileCard from '../components/ProfileCard';
import { useEffect, useState } from 'react';
import { ValidateUserIsLogged } from '../utils/validate.log';
import {
    CheckFavoritoAutor,
    CheckIfAutorIsFavorito,
    GetUsuarioProfile,
    updateFotoUsuario,
    updatePassword,
    updateUsuarioData,
} from '../services/usuarios.services';
import Swal from 'sweetalert2';
import LoaderSpinner from '../components/LoaderSpinner';
import {
    DeleteHistoria,
    GetHistoriasPropias,
} from '../services/historias.services';
import ImageEditModal from '../components/modals/ImageEditModal';
import ProfileEditModal from '../components/modals/ProfileEditModal';
import PasswordEditModal from '../components/modals/PasswordEditModal';

function Perfil() {
    const [user, setUser] = useState(null);
    const [isFavorito, setIsFavorito] = useState(false);
    const [showImageEditModal, setShowImageEditModal] = useState(false);
    const [showProfileEditModal, setShowProfileEditModal] = useState(false);
    const [showPasswordEditModal, setShowPasswordEditModal] = useState(false);
    const [historias, setHistorias] = useState(null);
    const [newFoto, setNewFoto] = useState(null);
    const [newUserData, setNewUserData] = useState(null);
    const navigate = useNavigate();
    let params = useParams();

    const onSubmitUpdatePassword = (passwordForm) => {
        updatePassword(
            user._id,
            passwordForm.currentPassword,
            passwordForm.newPassword,
            passwordForm.newPasswordConfirm
        )
            .then(({ data: res }) => {
                if (res.success) {
                    Swal.fire({
                        title: 'Contraseña',
                        text: res.message,
                        icon: 'success',
                    });
                    setShowPasswordEditModal(false);
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
    };

    const onSubmitUpdateUserData = () => {
        updateUsuarioData(newUserData)
            .then(({ data: res }) => {
                if (res.success) {
                    setUser(res.data);
                    setNewUserData(res.data);
                    setShowProfileEditModal(false);
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
    };

    const onCheckFavorite = (e) => {
        CheckFavoritoAutor(
            e.target.checked,
            user._id,
            localStorage.getItem('user')
        )
            .then(({ data: res }) => {
                if (res.success) {
                    setIsFavorito(res.data);
                    Swal.fire({
                        title: 'Usuario',
                        text: res.message,
                        icon: 'info',
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
    };

    const onFieldEditUserChange = (e) => {
        setNewUserData({ ...newUserData, [e.target.name]: e.target.value });
    };

    const onSelectImage = (e) => {
        const trgt = e.target;
        const files = trgt.files;

        if (FileReader && files && files.length) {
            let fr = new FileReader();
            fr.onload = () => {
                setNewFoto(fr.result);
            };

            fr.readAsDataURL(files[0]);
        }
    };

    const onSubmitEditPhoto = () => {
        updateFotoUsuario(user._id, newFoto)
            .then(({ data: res }) => {
                if (res.success) {
                    setUser({ ...res.data, Foto: newFoto });
                    setShowImageEditModal(false);
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
    };

    const onDeleteHistoria = (id) => {
        DeleteHistoria(id)
            .then(({ data: res }) => {
                if (res.success) {
                    let index = historias.findIndex((h) => {
                        h._id === id;
                    });
                    if (index < 0) {
                        let newHistorias = [...historias];
                        newHistorias.splice(index, 1);
                        setHistorias(newHistorias);
                    }
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

    const onClickEditImage = () => {
        setShowImageEditModal(true);
    };

    const onClickEditUser = () => {
        setShowProfileEditModal(true);
    };

    const onClickEditPassword = () => {
        setShowPasswordEditModal(true);
    };

    useEffect(() => {
        setUser(null);
        setHistorias(null);
        if (!ValidateUserIsLogged()) {
            navigate('/login');
        }

        GetUsuarioProfile(params.id)
            .then(({ data: res }) => {
                if (res.success) {
                    setUser(res.data);
                    setNewFoto(res.data.Foto);
                    setNewUserData(res.data);
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

        GetHistoriasPropias(params.id)
            .then(({ data: resH }) => {
                if (resH.success) {
                    setHistorias(resH.data);
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: resH.message,
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

        CheckIfAutorIsFavorito(localStorage.getItem('user'), params.id)
            .then(({ data: res }) => {
                setIsFavorito(res.success);
            })
            .catch(({ response }) => {
                Swal.fire({
                    title: 'Error',
                    text: response.statusText,
                    icon: 'error',
                });
            });
    }, [params.id]);

    return (
        <>
            <Header />
            {!user || !historias ? (
                <LoaderSpinner />
            ) : (
                <div className="relative w-full flex justify-center">
                    <div className="w-10/12">
                        <div className="w-full">
                            <ProfileCard
                                onClickImageEdit={onClickEditImage}
                                profileData={user}
                                onClickEditUser={onClickEditUser}
                                onClickEditPassword={onClickEditPassword}
                                isSelf={
                                    localStorage.getItem('user') === user._id
                                }
                                onCheckFavorite={onCheckFavorite}
                                isChecked={isFavorito}
                            />
                        </div>
                        <div className="w-full mb-4">
                            <h4 className="text-white text-xl">Obras</h4>
                            {historias?.map((h) => (
                                <HistoriaCard
                                    isEditable={
                                        localStorage.getItem('user') ===
                                        params.id
                                    }
                                    autor={user.NombreUsuario}
                                    portada={h.Portada}
                                    sinopsis={h.Sinopsis}
                                    title={h.Titulo}
                                    key={h._id}
                                    onClick={() => {
                                        navigate(`/historia/${h._id}`);
                                    }}
                                    onEditClick={() => {
                                        navigate(`/editar-historia/${h._id}`);
                                    }}
                                    onDeleteClick={() => {
                                        onDeleteHistoria(h._id);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {showImageEditModal && (
                <ImageEditModal
                    foto={newFoto}
                    onCancel={() => {
                        setNewFoto(user.Foto);
                        setShowImageEditModal(false);
                    }}
                    onImageChange={onSelectImage}
                    onSubmitImage={onSubmitEditPhoto}
                />
            )}
            {showProfileEditModal && (
                <ProfileEditModal
                    user={newUserData}
                    onSubmit={onSubmitUpdateUserData}
                    onCancel={() => {
                        setShowProfileEditModal(false);
                    }}
                    onChange={onFieldEditUserChange}
                />
            )}

            {showPasswordEditModal && (
                <PasswordEditModal
                    onSubmit={onSubmitUpdatePassword}
                    onCancel={() => {
                        setShowPasswordEditModal(false);
                    }}
                />
            )}
        </>
    );
}

export default Perfil;
