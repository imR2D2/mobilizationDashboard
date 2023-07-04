import React, { useState } from 'react';
import SearchUser from './SearchUser';

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buscar
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
          <div className="bg-opacity-0 z-40">
            <div className="bg-white rounded-lg p-8 max-w-md">
              
              <SearchUser />

              <button
                onClick={closeModal}
                className="mt-4  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
