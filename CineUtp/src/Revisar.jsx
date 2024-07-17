import React, { useState } from 'react';
import { Navbar } from './components/Navbar';

const Input = ({ id, placeholder, value, onChange }) => (
  <input
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

const Button = ({ type, children, disabled }) => (
  <button
    type={type}
    disabled={disabled}
    className={`w-full px-4 py-2 ${
      disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
    } text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
  >
    {children}
  </button>
);

const Revisar = () => {
  const [ticketId, setTicketId] = useState('');
  const [ticketInfo, setTicketInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setTicketId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/compras/${ticketId}`);
      if (!response.ok) {
        throw new Error('Boleto No encontrado');
      }
      const data = await response.json();
      console.log('Respuesta del servidor:', data); // Log de la respuesta
      setTicketInfo(data);
      setError(null);
    } catch (err) {
      console.error('Error:', err.message); // Log del error
      setError(err.message);
      setTicketInfo(null);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col items-center justify-center ">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Revisar Boleto</h1>
        </header>
        <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="ticket-id" className="block font-medium mb-2">
              Identificador del Boleto
            </label>
            <Input id="ticket-id" placeholder="Ingresa el identificador" value={ticketId} onChange={handleInputChange} />
          </div>
          <Button type="submit" disabled={!ticketId}>Revisar</Button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {ticketInfo && (
          <div className="bg-white p-6 rounded-lg shadow-lg mt-8 w-full max-w-md">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Información del Boleto</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Película:</p>
                <p>{ticketInfo.nombrePelicula}</p>
              </div>
              <div>
                <p className="font-medium">Asientos:</p>
                <p>{ticketInfo.asientos.join(',')}</p>
              </div>
              <div>
                <p className="font-medium">Nombre:</p>
                <p>{ticketInfo.nombreCompleto}</p>
              </div>
              <div>
                <p className="font-medium">Hora:</p>
                <p>{ticketInfo.time}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Revisar;
