import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MoviesStore } from '../Moviestore';

export const Card = ({ movie }) => {
  const navigate = useNavigate();
  const setSelectedMovie = MoviesStore((state) => state.setSelectedMovie); // Corrected state access

  const handleBuyTicket = () => {
    navigate(`/comprar/${movie.id}`);
    setSelectedMovie(movie); // Corrected setSelectedMovie usage
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg">
      <img
        src={movie.resourceImage}
        alt={movie.title}
        width={400}
        height={600}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
        <p className="text-gray-500 mb-4">{movie.description}</p> {/* Changed text-muted-foreground to text-gray-500 */}
      </div>
      <div className="flex xl:ml-9">
        <button
          className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
          onClick={handleBuyTicket}
        >
          COMPRAR
        </button>
      </div>
    </div>
  );
};