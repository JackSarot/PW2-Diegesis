import { Link } from 'react-router-dom';
import logoImg from '../assets/logo_bw.png';
import userImgPrev from '../assets/profile.png';
import { useState } from 'react';

const Header = () => {
    const [favoritosTab, setFavoritosTab] = useState(true);

    const onClickFavoritos = () => {
        setFavoritosTab(!favoritosTab);
    };

    return (
        <header className="relative h-28 bg-violet-950 w-full flex justify-center">
            <div className="flex xl:w-10/12 w-full h-full justify-between">
                <Link className="h-full w-2/12" to={'/inicio'}>
                    <img
                        className="w-auto h-full cursor-pointer"
                        src={logoImg}
                        alt="logo"
                    />
                </Link>
                <div className="h-full w-7/12">
                    <ul className="flex justify-between h-full">
                        <li className="self-center text-white text-base hover:underline cursor-pointer">
                            <Link to={'/perfil/1'}>Perfil</Link>
                        </li>
                        <li className="self-center text-white text-base hover:underline cursor-pointer">
                            <Link to={'/crear-historia'}>Crea tu Historia</Link>
                        </li>
                        <li
                            onClick={onClickFavoritos}
                            className="relative self-center text-white text-base hover:underline cursor-pointer"
                        >
                            <label className="">Favoritos</label>
                            <ul
                                hidden={favoritosTab}
                                className="absolute bg-violet-800 rounded w-36 right-0 p-4 z-50"
                            >
                                <li className="hover:bg-violet-700 active:bg-violet-600 w-full">
                                    <Link
                                        to={'/favoritos/autores'}
                                        className="w-full block"
                                    >
                                        Autores
                                    </Link>
                                </li>
                                <li className="hover:bg-violet-700 active:bg-violet-600 w-full">
                                    <Link
                                        to={'/favoritos/historias'}
                                        className="w-full block"
                                    >
                                        Historias
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="self-center text-white text-base hover:underline cursor-pointer">
                            <Link to={'/evento'}>Evento</Link>
                        </li>
                        <li className="self-center text-white text-base hover:underline cursor-pointer">
                            <Link to={'/consejos'}>Consejos</Link>
                        </li>
                    </ul>
                </div>
                <div className="h-full w-3/12 flex justify-center">
                    <div className="w-2/12 self-center">
                        <img
                            className="w-full"
                            src={userImgPrev}
                            alt="imagen de usuario"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
