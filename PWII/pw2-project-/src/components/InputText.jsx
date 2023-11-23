import PropTypes from 'prop-types';

export const InputText = ({
    placeholder,
    value,
    onChange,
    name,
    type,
    onKeyPress,
}) => {
    return (
        <input
            name={name}
            className="border outline-none px-2 py-1 w-full rounded focus:border-green-950 focus:border h-9"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyPress}
        />
    );
};

InputText.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    onKeyPress: PropTypes.func,
};

InputText.defaultProps = {
    onChange: () => {},
    type: 'text',
    onKeyPress: () => {},
};
