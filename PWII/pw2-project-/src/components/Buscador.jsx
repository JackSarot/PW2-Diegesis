/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { InputText } from './InputText';
import { useEffect } from 'react';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';

const Buscador = ({
    onSubmitSearch,
    onDropdownChange,
    keyword,
    dropdownList,
    optionValue,
    onKeywordChange,
    showSortBy,
}) => {
    return (
        <div className="mt-5">
            <div className="mb-3">
                <InputText
                    placeholder="Buscar..."
                    value={keyword}
                    onChange={onKeywordChange}
                    name={keyword}
                    onKeyPress={(e) => {
                        if (e.code === 'Enter') {
                            onSubmitSearch();
                        }
                    }}
                />
            </div>
            {showSortBy && (
                <Dropdown
                    listOptions={dropdownList}
                    value={optionValue}
                    onChange={onDropdownChange}
                />
            )}
        </div>
    );
};

Buscador.propTypes = {
    onSubmitSearch: PropTypes.func,
    onDropdownChange: PropTypes.func,
    keyword: PropTypes.string.isRequired,
    onKeywordChange: PropTypes.func.isRequired,
    dropdownList: PropTypes.arrayOf(PropTypes.any),
    optionValue: PropTypes.number,
    showSortBy: PropTypes.bool,
};

Buscador.defaultProps = {
    onSubmitSearch: () => {},
    onDropdownChange: () => {},
    keyword: '',
    onKeywordChange: () => {},
    dropdownList: [],
    optionValue: 1,
    showSortBy: true,
};

export default Buscador;
