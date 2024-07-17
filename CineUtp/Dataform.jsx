import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Success from './src/components/Sucess';

function Dataform({ selectedSeats, totalPrice, title, time , onFinalizePurchase }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [orderNumber, setOrderNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPurchaseCompleted, setIsPurchaseCompleted] = useState(false);

  useEffect(() => {
    setOrderNumber(generateShortOrderNumber());
  }, []);

  const generateShortOrderNumber = () => {
    const uuid = uuidv4().replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos
    return uuid.slice(0, 5);
  };

  const onSubmit = async data => {
    const purchaseData = {
      numeroOrden: parseInt(orderNumber, 10),  // Convertir a número entero
      nombrePelicula: title,
      asientos: selectedSeats,
      nombreCompleto: data.fullName,
      correo: data.email,
      time,
      total:totalPrice
    };

    try {
      const response = await axios.post('http://localhost:8080/compras', purchaseData);
      
      console.log('Response:', response.data);
      console.log(totalPrice);
      setIsPurchaseCompleted(true); // Set purchase as completed
      onFinalizePurchase()
      Onfi
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error.response ? error.response.data.message : 'Error al realizar la compra');
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="rounded-lg p-8 w-full max-w-4xl shadow-lg"> {/* Added shadow-lg class */}
        {isPurchaseCompleted ? (
          <Success pelicula={title} total={totalPrice.toFixed(2)} asientos={selectedSeats?.length} />
        ) : (
          <>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Comprar Entradas</h1>
              <p className="text-gray-600">Completa el formulario para finalizar tu compra.</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold">Detalles de compra</h2>
              <p>Numero de Orden: {orderNumber}</p>
              <p>Pelicula: {title}</p>
              <p> Hora: {time} </p>
              <p>Asientos Seleccionados: {selectedSeats.join(",")}</p>
              <p className="font-bold">Monto a pagar: ${totalPrice.toFixed(2)}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold">Informacion de Pago</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3>Numero de tarjeta</h3>
                    <input
                      {...register('cardNumber', {
                        required: 'El número de tarjeta es obligatorio',
                        pattern: {
                          value: /^\d{16}$/,
                          message: 'El número de tarjeta debe tener 16 dígitos'
                        }
                      })}
                      placeholder="1234 5678 9012 3456"
                      className="w-full p-2 border rounded"
                    />
                    {errors.cardNumber && <p className="text-red-500">{errors.cardNumber.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <h3>Fecha de expiración</h3>
                    <input
                      {...register('expiryDate', {
                        required: 'La fecha de expiración es obligatoria',
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                          message: 'La fecha de expiración debe tener el formato MM/AA'
                        }
                      })}
                      placeholder="MM/AA"
                      className="w-full p-2 border rounded"
                    />
                    {errors.expiryDate && <p className="text-red-500">{errors.expiryDate.message}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h3>CVV</h3>
                    <input
                      {...register('cvv', {
                        required: 'El CVV es obligatorio',
                        pattern: {
                          value: /^\d{3,4}$/,
                          message: 'El CVV debe tener 3 o 4 dígitos'
                        }
                      })}
                      id="card-cvv"
                      placeholder="123"
                      className="w-full p-2 border rounded"
                    />
                    {errors.cvv && <p className="text-red-500">{errors.cvv.message}</p>}
                  </div>
                  <div className="space-y-2 col-span-2">
                    <h3>Correo Electrónico</h3>
                    <input
                      {...register('email', {
                        required: 'El correo electrónico es obligatorio',
                        pattern: {
                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message: 'Correo electrónico inválido'
                        }
                      })}
                      id="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      className="w-full p-2 border rounded"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3>Nombre Completo</h3>
                  <input
                    {...register('fullName', {
                      required: 'El nombre completo es obligatorio'
                    })}
                    id="full-name"
                    placeholder="John Doe"
                    className="w-full p-2 border rounded"
                  />
                  {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <div>
                  <button type="submit" className="bg-green-500 text-white rounded-md py-2 px-4 mt-4 outline-none">Finalizar Compra</button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dataform;
