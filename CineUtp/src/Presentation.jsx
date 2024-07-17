import React from 'react';

const Presentation = ({ onContinue }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6">
      <div className="container max-w-md space-y-8 text-center">
        <div className="grid grid-cols-2 items-center gap-8">
          <img src="https://utp.ac.pa/documentos/2015/imagen/logo_utp_1_72.jpg" width={120} height={120} alt="University Logo" className="mx-auto" />
          <img src="https://fisc.utp.ac.pa/sites/fisc.utp.ac.pa/files/documentos/2020/imagen/logo_en_contactenos.png" width={120} height={120} alt="Faculty Logo" className="mx-auto" />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Universidad Tecnológica de Panamá</h1>
          <p className="text-gray-500">Facultad de Ingeniería de Sistemas Computacionales</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Licenciatura en Ingeniería de Software</h2>
          <h2 className="text-2xl font-bold">Materia: Programación de Software I</h2>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Miembros:</h2>
          <div className="grid gap-4">
            <div>
              <p className="font-medium">Ismael Ramos</p>
              <p className="text-gray-500">8-1010-705</p>
            </div>
            <div>
              <p className="font-medium">Reynaldo Zorrilla</p>
              <p className="text-gray-500">8-1013-421</p>
            </div>
            <div>
              <p className="font-medium">Justinie Hernández</p>
              <p className="text-gray-500">8-1014-1485</p>
            </div>
            <div>
              <p className="font-medium">Jabneel González</p>
              <p className="text-gray-500">8-990-119</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-medium">Professor:Rodrigo Yángüez</p>
          <p className="text-gray-500">Fecha de Entrega: 17 Julio , 2024</p>
        </div>
        <div>
          <button 
            className="mt-6 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700" 
            onClick={onContinue}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;