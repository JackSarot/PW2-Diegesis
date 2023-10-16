import PropTypes from 'prop-types'

export const Button = ({ text, onClick }) => {
    return (
        <button
            className="w-full p-2 bg-green-600 rounded-md hover:bg-green-700 active:bg-green-800"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    onClick: () => {},
}
