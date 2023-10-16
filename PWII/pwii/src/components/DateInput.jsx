import PropTypes from 'prop-types'

export const DateInput = ({ placeholder, value, onChange, name }) => {
    return (
        <input
            name={name}
            className="border outline-none px-2 py-1 w-full rounded focus:border-green-950 inline-block h-9"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => (e.target.type = 'text')}
        />
    )
}

DateInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string,
}

DateInput.defaultProps = {
    onChange: () => {},
}
