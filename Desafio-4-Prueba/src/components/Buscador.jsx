/* eslint-disable react/prop-types */
import { useState } from 'react';

const Buscador = ({ setIdBuscado }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setIdBuscado(event.target.value);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                className="border rounded py-2 px-3"
                placeholder="Buscar por ID"
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Buscador;