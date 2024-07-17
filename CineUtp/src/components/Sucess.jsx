import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = ({ pelicula, total, asientos }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-green-500">Compra exitosa</CardTitle>
          <CircleCheckIcon className="h-12 w-12 text-green-500" />
        </div>
        <div className="space-y-4 mt-4">
          <p>
            Has comprado <span className="font-medium">{asientos} boletos</span> para la película{" "}
            <span className="font-medium">{pelicula}</span> por un total de{" "}
            <span className="font-medium">${total}</span>. Tus boletos serán enviados a tu correo electrónico en breve.
          </p>
          <div className="flex justify-end">
            <button
              className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
              onClick={() => {
                navigate("/");
              }}
            >
              Listo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardTitle = ({ children, className }) => {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
};

const CircleCheckIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
};

export default Success;
