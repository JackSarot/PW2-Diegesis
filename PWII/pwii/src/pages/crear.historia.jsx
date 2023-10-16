import { useState } from 'react';
import backgroundImg from '../assets/stars.jpg';
import Header from '../components/Header';
import { InputText } from '../components/InputText';
import { FileInput } from '../components/FileInput';
import { Button } from '../components/Button';

function CrearHistoria() {
    const [historia, setHistoria] = useState({
        title: '',
        sinopsis: '',
        historia: '',
        portada: '',
    });

    const onChangeText = (e) => {
        setHistoria({ ...historia, [e.target.name]: e.target.value });
    };

    return (
        <>
            <h1 className="absolute w-screen h-screen z-0">
                <img className="w-full h-full" src={backgroundImg} alt="" />
            </h1>
            <Header />
            <div className="relative w-full flex justify-center">
                <div className="w-10/12">
                    <div className="w-full flex justify-end mb-4 mt-4">
                        <div className="w-2/12">
                            <Button text="Guardar Historia" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <FileInput
                            placeholder="Selecciona Imagen de Portada..."
                            value={historia.portada}
                            name={'portada'}
                        />
                    </div>
                    <div className="mb-4">
                        <InputText
                            placeholder="Nombre de la Historia"
                            value={historia.title}
                            name={'title'}
                            onChange={onChangeText}
                        />
                    </div>
                    <div className="mb-4">
                        <InputText
                            placeholder="Sinopsis"
                            value={historia.sinopsis}
                            name={'sinopsis'}
                            onChange={onChangeText}
                        />
                    </div>
                    <textarea
                        className="border outline-none px-2 py-1 w-full rounded focus:border-green-950 focus:border h-9 min-h-full"
                        placeholder="Historia"
                        value={historia.historia}
                        name="historia"
                        onChange={onChangeText}
                    />
                </div>
            </div>
        </>
    );
}

export default CrearHistoria;
