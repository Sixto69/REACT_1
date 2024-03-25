import { useState, useEffect } from 'react';
import Buscador from './Buscador';

const MiAppi = () => {
    const [feriados, setFeriados] = useState([]);
    const [feriadosFiltrados, setFeriadosFiltrados] = useState([]);
    const [idBuscado, setIdBuscado] = useState('');
    const [ordenAscendente, setOrdenAscendente] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.feriadosapp.com/api/laws.json');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const jsonData = await response.json();
                setFeriados(jsonData.data);
                setFeriadosFiltrados(jsonData.data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {

        const feriadosFiltrados = feriados.filter(feriado => feriado.id.includes(idBuscado));
        setFeriadosFiltrados(feriadosFiltrados);
    }, [idBuscado, feriados]);


    const handleSortById = () => {
        const sortedFeriados = [...feriadosFiltrados].sort((a, b) => {
            if (ordenAscendente) {
                return a.id.localeCompare(b.id);
            } else {
                return b.id.localeCompare(a.id);
            }
        });
        setFeriadosFiltrados(sortedFeriados);
        setOrdenAscendente(!ordenAscendente);
    };




    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">Feriados</h2>
        <Buscador setIdBuscado={setIdBuscado} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={handleSortById}>
                Ordenar por ID {ordenAscendente ? 'ascendente' : 'descendente'}
            </button>


        <table id="example" className="table-auto w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Título</th>
                    <th className="px-4 py-2">Contenido</th>
                    <th className="px-4 py-2">Enlace</th>
                </tr>
            </thead>
            <tbody>
                {feriadosFiltrados.map(feriado => (
                    <tr key={feriado.id}>
                        <td className="border px-4 py-2">{feriado.id}</td>
                        <td className="border px-4 py-2">{feriado.title}</td>
                        <td className="border px-4 py-2">{feriado.content}</td>
                        <td className="border px-4 py-2">
                            <a href={feriado.link} target="_blank" rel="noopener noreferrer">Enlace</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    );
};

export default MiApi;