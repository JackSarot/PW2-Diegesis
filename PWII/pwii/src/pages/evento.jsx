/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import backgroundImg from '../assets/stars.jpg';
import Header from '../components/Header';

function Evento() {
    const [evento, setEvento] = useState({
        title: 'Nombre del Evento',
        desc: `rem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        et neque blandit est consequat ullamcorper sit amet sed
        libero. Suspendisse volutpat magna ullamcorper ante molestie
        bibendum. Sed tempus vitae tellus et ullamcorper. Vivamus
        dapibus semper orci, quis pretium enim condimentum ut. Donec
        venenatis magna mauris, eget lobortis tellus pretium ac.
        Cras faucibus, eros ac suscipit porta, ligula nisl lobortis
        mi, ultricies lacinia orci velit eu mauris.`,
    });

    useEffect(() => {
        // setEvento();
    }, []);

    return (
        <>
            <h1 className="absolute w-screen h-screen z-0">
                <img className="w-full h-full" src={backgroundImg} alt="" />
            </h1>
            <Header />
            <div className="relative w-full flex justify-center">
                <div className="w-10/12">
                    <h2 className="font-semibold text-white text-3xl text-center mt-2 mb-4">
                        {evento.title}
                    </h2>
                    <div className="bg-slate-200 min-h-[500px] p-4">
                        {evento.desc}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Evento;
