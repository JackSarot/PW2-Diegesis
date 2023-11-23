import PropTypes from 'prop-types';

const Dropdown = ({ onChange, value, listOptions }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className="w-2/12 outline-none rounded"
        >
            {listOptions.map((e) => (
                <option key={e.value} value={e.value}>
                    {e.text}
                </option>
            ))}
        </select>
    );
};

Dropdown.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.number.isRequired,
    listOptions: PropTypes.arrayOf(PropTypes.any),
};

Dropdown.defaultProps = {
    onChange: () => {},
    listOptions: [],
};

export default Dropdown;
