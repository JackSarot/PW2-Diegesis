import PropTypes from 'prop-types';

export const FileInput = ({ placeholder, value, onChange, name }) => {
    return (
        <label className="bg-violet-300 rounded h-9 flex hover:bg-violet-400 active:bg-violet-500 align-middle">
            <input
                name={name}
                className="border outline-none px-2 py-1 w-full rounded focus:border-green-950 focus:border h-9 hidden"
                type="file"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                accept="image/png, image/gif, image/jpeg, image/jpg"
            />
            <span className="material-symbols-outlined p-1">account_box</span>
            <p className="h-full p-1">{placeholder}</p>
        </label>
    );
};

FileInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
};

FileInput.defaultProps = {
    onChange: () => {},
};
