import backgroundImg from '../assets/stars.jpg';
import Buscador from '../components/Buscador';
import Header from '../components/Header';
import HistoriaCard from '../components/HistoriaCard';

function FavoritosHistorias() {
    return (
        <>
            <h1 className="absolute w-screen h-screen z-0">
                <img className="w-full h-full" src={backgroundImg} alt="" />
            </h1>
            <Header />
            <div className="relative w-full flex justify-center">
                <div className="w-10/12">
                    <Buscador />
                    <div className="mt-2">
                        <HistoriaCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FavoritosHistorias;
