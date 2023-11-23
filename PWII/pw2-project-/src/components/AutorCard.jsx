import PropTypes from 'prop-types';

const AutorCard = ({ onClick, autor, sinopsis, foto }) => {
    return (
        <div
            onClick={onClick}
            className="flex w-full bg-slate-200 rounded h-48 hover:bg-slate-300 active:bg-slate-400 cursor-pointer  mt-2"
        >
            <img
                className="h-full w-auto rounded-tl rounded-bl"
                src={foto}
                alt="Imagen de Autor"
            />
            <div className="flex flex-col px-2">
                <div className="flex items-baseline">
                    <h5 className="text-lg mr-2">Autor: </h5>
                    <p className="text-lg font-bold">{autor}</p>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-lg mr-2">Bibliografía: </h5>
                    <p className="text-ellipsis">{sinopsis}</p>
                </div>
            </div>
        </div>
    );
};

AutorCard.propTypes = {
    autor: PropTypes.string.isRequired,
    sinopsis: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    foto: PropTypes.string,
};

AutorCard.defaultProps = {
    onClick: () => {},
    autor: 'Nombre del Autor',
    sinopsis: `rem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                et neque blandit est consequat ullamcorper sit amet sed
                libero. Suspendisse volutpat magna ullamcorper ante molestie
                bibendum. Sed tempus vitae tellus et ullamcorper. Vivamus
                dapibus semper orci, quis pretium enim condimentum ut. Donec
                venenatis magna mauris, eget lobortis tellus pretium ac.
                Cras faucibus, eros ac suscipit porta, ligula nisl lobortis
                mi, ultricies lacinia orci velit eu mauris.`,
    foto: '',
};

export default AutorCard;
