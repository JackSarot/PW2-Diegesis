import PropTypes from 'prop-types';
import { Button } from './Button';

const HistoriaCard = ({
    onClick,
    title,
    autor,
    sinopsis,
    isEditable,
    portada,
    onEditClick,
    onDeleteClick,
    onClickAutor,
}) => {
    return (
        <div className="flex w-full bg-slate-200 rounded h-60 hover:bg-slate-300 mt-2">
            <img
                onClick={onClick}
                className="h-full w-auto rounded-tl rounded-bl aspect-[3/4] cursor-pointer"
                src={portada}
                alt="Imagen de Portada"
            />
            <div className="w-10/12 flex flex-col px-2">
                <div className="w-8/12">
                    <h5
                        onClick={onClick}
                        className="text-2xl font-bold hover:underline cursor-pointer"
                    >
                        {title}
                    </h5>
                    <div className="flex items-baseline">
                        <h5 className="text-lg mr-2">Autor: </h5>
                        <p
                            onClick={onClickAutor}
                            className="text-lg font-bold hover:underline cursor-pointer"
                        >
                            {autor}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-lg mr-2">Sinopsis: </h5>
                        <p className="text-ellipsis">{sinopsis}</p>
                    </div>
                </div>
                {isEditable && (
                    <div className="w-4/12 self-end flex justify-between py-2">
                        <div className="w-6/12 px-2">
                            <Button
                                onClick={onEditClick}
                                text="Editar Historia"
                            />
                        </div>
                        <div className="w-6/12">
                            <Button
                                onClick={onDeleteClick}
                                text="Borrar Historia"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

HistoriaCard.propTypes = {
    title: PropTypes.string.isRequired,
    autor: PropTypes.string,
    sinopsis: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isEditable: PropTypes.bool,
    portada: PropTypes.string.isRequired,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
    onClickAutor: PropTypes.func,
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
    onEditClick: () => {},
    onDeleteClick: () => {},
    onClickAutor: () => {},
};

export default HistoriaCard;
