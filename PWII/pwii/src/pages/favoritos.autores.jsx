import backgroundImg from '../assets/stars.jpg';
import AutorCard from '../components/AutorCard';
import Buscador from '../components/Buscador';
import Header from '../components/Header';

function FavoritosAutores() {
    return (
        <>
            <h1 className="absolute w-screen h-screen z-0">
                <img className="w-full h-full" src={backgroundImg} alt="" />
            </h1>
            <Header />
            <div className="relative w-full flex justify-center">
                <div className="w-10/12">
                    <h2 className="font-semibold text-white text-3xl text-center mt-2">
                        Autores
                    </h2>
                    <Buscador />
                    <div className="mt-2">
                        <AutorCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FavoritosAutores;
