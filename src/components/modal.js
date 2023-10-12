import React from 'react';

function Modal({ isOpen, data, onClose }) {
    
if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Car Description</h2>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div className='container'>
        <div className="basis-1/2">
        <div className='w-full'>
        <img
                src={data.image}
                alt={data.image}
          className="w-50"
              />
              </div>
        </div>
        <div className="basis-1/2 text-left">
            <h3>Make &nbsp;&nbsp; <b>{data.make}</b></h3>
            <h3>Model &nbsp; <b>{data.model}</b></h3>
            <h3>Price &nbsp; <b>{data.price}</b></h3>
            <h3>Year &nbsp;&nbsp; <b>{data.year}</b></h3>
            <h3>Mileage &nbsp; <b>{data.mileage}</b></h3><br />
            <p>Audi revealed the A4 sedan in India in December last year. The spiritual successor to the A3, the model will rival against the likes of the Maruti Suzuki Dzire, Tata Tigor, Honda Amaze and the Volkswagen Ameo. The Aura will be available in six colours and 12 variants, details of which are available here.</p>
        </div>
        </div>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
