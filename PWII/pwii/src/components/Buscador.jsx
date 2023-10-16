/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { InputText } from './InputText';
import { useEffect } from 'react';
import Dropdown from './Dropdown';

const Buscador = () => {
    const [keyword, setKeyword] = useState('');
    const [dropdownList, setDropdownList] = useState([
        { value: 1, text: 'De la A a la Z' },
        { value: 2, text: 'De la Z a la A' },
        { value: 3, text: 'Más Recientes' },
        { value: 4, text: 'Más Antiguos' },
    ]);
    const [ddValue, setDdValue] = useState(1);

    const onChangeKeyword = (e) => {
        setKeyword(e.target.value);
    };

    const onDropDownChange = (e) => {
        setDdValue(parseInt(e.target.value));
    };

    useEffect(() => {}, []);
    useEffect(() => {}, [keyword]);

    return (
        <div className="mt-5">
            <div className="mb-3">
                <InputText
                    placeholder="Buscar..."
                    value={keyword}
                    onChange={onChangeKeyword}
                    name={keyword}
                />
            </div>
            <Dropdown
                listOptions={dropdownList}
                value={ddValue}
                onChange={onDropDownChange}
            />
        </div>
    );
};

export default Buscador;
