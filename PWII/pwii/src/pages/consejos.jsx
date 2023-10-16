import backgroundImg from '../assets/stars.jpg';
import Header from '../components/Header';
import ConsejoCard from '../components/ConsejoCard';

function Consejos() {
    return (
        <>
            <h1 className="absolute w-screen h-screen z-0">
                <img className="w-full h-full" src={backgroundImg} alt="" />
            </h1>
            <Header />
            <div className="relative w-full flex justify-center">
                <div className="w-10/12">
                    <h2 className="font-semibold text-white text-3xl text-center mt-2 mb-4">
                        Consejos
                    </h2>
                    <ConsejoCard />
                </div>
            </div>
        </>
    );
}

export default Consejos;
