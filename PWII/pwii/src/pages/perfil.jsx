import backgroundImg from '../assets/stars.jpg';
import Header from '../components/Header';
import HistoriaCard from '../components/HistoriaCard';
import ProfileCard from '../components/ProfileCard';

function Perfil() {
    return (
        <>
            <h1 className="absolute w-screen h-screen z-0">
                <img className="w-full h-full" src={backgroundImg} alt="" />
            </h1>
            <Header />
            <div className="relative w-full flex justify-center">
                <div className="w-10/12">
                    <div className="w-full">
                        <ProfileCard />
                    </div>
                    <div className="w-full">
                        <h4 className="text-white text-xl">Obras</h4>
                        <HistoriaCard isEditable />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Perfil;
