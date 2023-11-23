import PropTypes from 'prop-types';
import { FileInput } from '../FileInput';
import { Button } from '../Button';

const ImageEditModal = ({ foto, onImageChange, onSubmitImage, onCancel }) => {
    return (
        <>
            <div className="absolute w-full h-full top-0 bg-black opacity-20"></div>
            <div className="absolute w-full h-full top-0 flex justify-center items-center">
                <div className="h-2/4 w-2/5 bg-white rounded-md drop-shadow-md">
                    <div className="h-full w-full flex flex-col items-center justify-start">
                        <div className="h-2/4 w-2/4 mt-4 mb-2">
                            <img
                                className="h-full w-auto object-cover border-2 border-black  rounded-full aspect-[4/4]"
                                src={foto}
                                alt="Image to Update"
                            />
                        </div>
                        <div className="w-10/12">
                            <FileInput
                                placeholder={
                                    foto !== ''
                                        ? 'Imagen seleccionada'
                                        : 'Selecciona Imagen del perfil...'
                                }
                                onChange={onImageChange}
                            />
                        </div>
                        <div className="w-10/12 flex justify-between mt-4">
                            <div className="w-5/12">
                                <Button
                                    text="Guardar"
                                    color="green"
                                    onClick={onSubmitImage}
                                />
                            </div>
                            <div className="w-5/12">
                                <button
                                    className="bg-red-600 hover:bg-red-700 active:bg-red-800 w-full p-2 rounded-md"
                                    onClick={onCancel}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ImageEditModal.propTypes = {
    foto: PropTypes.string.isRequired,
    onImageChange: PropTypes.func.isRequired,
    onSubmitImage: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

ImageEditModal.defaultProps = {};

export default ImageEditModal;
