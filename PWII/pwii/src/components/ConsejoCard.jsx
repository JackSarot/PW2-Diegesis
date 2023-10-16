import PropTypes from 'prop-types';

const ConsejoCard = ({ consejoTitle, consejoDesc }) => {
    return (
        <div className="bg-slate-200 rounded shadow p-4">
            <h4 className="font-bold mb-4">{consejoTitle}</h4>
            <p className="font-light">{consejoDesc}</p>
        </div>
    );
};

ConsejoCard.propTypes = {
    consejoTitle: PropTypes.string,
    consejoDesc: PropTypes.string,
};

ConsejoCard.defaultProps = {
    consejoTitle: 'Nombre del Consejo',
    consejoDesc: `rem ipsum dolor sit amet, consectetur adipiscing elit. Nam
    et neque blandit est consequat ullamcorper sit amet sed
    libero. Suspendisse volutpat magna ullamcorper ante molestie
    bibendum. Sed tempus vitae tellus et ullamcorper. Vivamus
    dapibus semper orci, quis pretium enim condimentum ut. Donec
    venenatis magna mauris, eget lobortis tellus pretium ac.
    Cras faucibus, eros ac suscipit porta, ligula nisl lobortis
    mi, ultricies lacinia orci velit eu mauris.`,
};

export default ConsejoCard;
