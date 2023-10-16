import PropTypes from 'prop-types';
import exampleImg from '../assets/imageExample.jpg';
import { Button } from './Button';

const HistoriaCard = ({ onClick, title, autor, sinopsis, isEditable }) => {
    return (
        <div
            onClick={onClick}
            className="flex w-full bg-slate-200 rounded h-60 hover:bg-slate-300 active:bg-slate-400 cursor-pointer"
        >
            <img
                className="h-full w-auto rounded-tl rounded-bl"
                src={exampleImg}
                alt="Imagen de Portada"
            />
            <div className="flex flex-col px-2">
                <h5 className="text-2xl font-bold">{title}</h5>
                <div className="flex items-baseline">
                    <h5 className="text-lg mr-2">Autor: </h5>
                    <p className="text-lg font-bold">{autor}</p>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-lg mr-2">Sinopsis: </h5>
                    <p className="text-ellipsis">{sinopsis}</p>
                </div>
                {isEditable && (
                    <div className="w-6/12 self-end flex justify-between py-2">
                        <div className="w-6/12 px-2">
                            <Button text="Editar Historia" />
                        </div>
                        <div className="w-6/12">
                            <Button text="Borrar Historia" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

HistoriaCard.propTypes = {
    title: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    sinopsis: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isEditable: PropTypes.bool,
};

HistoriaCard.defaultProps = {
    onClick: () => {},
    title: 'Nombre de la Historia',
    autor: 'Nombre del Autor',
    sinopsis: `rem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                et neque blandit est consequat ullamcorper sit amet sed
                libero. Suspendisse volutpat magna ullamcorper ante molestie
                bibendum. Sed tempus vitae tellus et ullamcorper. Vivamus
                dapibus semper orci, quis pretium enim condimentum ut. Donec
                venenatis magna mauris, eget lobortis tellus pretium ac.
                Cras faucibus, eros ac suscipit porta, ligula nisl lobortis
                mi, ultricies lacinia orci velit eu mauris.`,
    isEditable: false,
};

export default HistoriaCard;
