import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MoviesStore } from './Moviestore';
import { Navbar } from './components/Navbar';
import Dataform from '../Dataform';

export const Comprar = () => {
  const Movie = MoviesStore((state) => state.selectedMovie);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [seats, setSeats] = useState([]);
  const [loadingSeats, setLoadingSeats] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const showtimes = [
    { id: 1250, time: "12:50 PM" },
    { id: 800, time: "8:30 PM" },
  ];

  async function fetchShowtimeData(showtimeId) {
    try {
      setLoadingSeats(true);
      const response = await axios.get(`http://localhost:8080/peliculas/${Movie.id}/tanda/${showtimeId}`);
      const { asientos } = response.data;
      const mappedSeats = asientos.map(seat => ({
        id: seat.identificador,
        row: seat.row,
        number: parseInt(seat.identificador.substring(1)),
        available: !seat.ocupado,
        price: seat.price,
      }));

      setSeats(mappedSeats);
    } catch (error) {
      console.error('Error fetching showtime data:', error);
    } finally {
      setLoadingSeats(false);
    }
  }

  const totalPrice = selectedSeats.reduce((total, seatId) => {
    const seat = seats.find((s) => s.id === seatId);
    return total + seat.price;
  }, 0);

  const handleSeatSelection = (seatId) => {
    const seat = seats.find((s) => s.id === seatId);
    if (!seat.available) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleShowtimeSelection = (showtimeId) => {
    setSelectedShowtime(showtimes.find((showtime) => showtime.id === showtimeId));
    fetchShowtimeData(showtimeId); // Fetch new seat data for the selected showtime
    setSelectedSeats([]); // Clear seat selection
  };

  const buyTickets = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/peliculas/${Movie.id}/tanda/${selectedShowtime.id}/asientos/ocupar`, selectedSeats);
      console.log('Compra exitosa:', response.data);
    } catch (error) {
      console.error('Error al comprar boletos:', error);
      // Manejar errores, por ejemplo, mostrando un mensaje de error al usuario.
    }
  };

  const finalizePurchase = () => {
    buyTickets();
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {!showPaymentForm ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Selecciona tus asientos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Plano de la sala</h2>
                <div className="grid grid-cols-5 gap-2">
                  {seats.map((seat) => (
                    <button
                      key={seat.id}
                      className={`bg-gray-200 hover:bg-gray-300 rounded-md py-2 px-4 ${selectedSeats.includes(seat.id)
                        ? "bg-green-500 text-white"
                        : !seat.available
                          ? "bg-red-500 text-white cursor-not-allowed"
                          : ""}`}
                      onClick={() => handleSeatSelection(seat.id)}
                      disabled={!seat.available}
                    >
                      {seat.row}-{seat.number} (${seat.price})
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Selecciona la tanda</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {showtimes.map((showtime) => (
                    <button
                      key={showtime.id}
                      className={`bg-gray-200 hover:bg-gray-300 rounded-md py-2 px-4 ${selectedShowtime?.id === showtime.id ? "bg-green-500 text-white" : ""}`}
                      onClick={() => handleShowtimeSelection(showtime.id)}
                    >
                      {showtime.time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Resumen</h2>
              <div className="bg-gray-200 rounded-md p-4">
                <p>
                  Has seleccionado {selectedSeats.length} asiento
                  {selectedSeats.length !== 1 ? "s" : ""}
                </p>
                {selectedShowtime && <p>Tanda seleccionada: {selectedShowtime.time}</p>}
                <p className="font-bold">Total a pagar: ${totalPrice.toFixed(2)}</p>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 mt-4"
                  onClick={() => setShowPaymentForm(true)}
                  disabled={selectedSeats.length === 0} // Disable button if no seats are selected
                >
                  Continuar con el pago
                </button>
              </div>
            </div>
          </>
        ) : (
          <Dataform selectedSeats={selectedSeats} totalPrice={totalPrice} onFinalizePurchase={finalizePurchase} title={Movie?.title} time ={selectedShowtime.time}  />
        )}
      </div>
    </>
  );
};
