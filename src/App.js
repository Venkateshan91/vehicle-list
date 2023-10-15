import React, { useState, useEffect } from 'react';
import useFavoriteData from "./components/data";
import DataTable from "./components/dataTable";
import AddNew from "./components/addnew";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const Addnew = () => {
    setSelectedRowData();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRowData(null);
    setIsModalOpen(false);
  };
 
  const {
    allItems,
    favoriteItems,
    addToFavorites,
    removeFromFavorites
  } = useFavoriteData();

  return (
    <div className="w-full p-2 text-center">
      <h1 className="p-3">AutoHub - Your Ultimate Vehicle Marketplace</h1>
      <div className="float-right">
        <button type="button" data-modal-target="defaultModal" data-modal-toggle="defaultModal" onClick={() => Addnew()}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">+ Add Vehicle</button>
      </div>
      <DataTable data={allItems} isFavorite={false} onAction={addToFavorites} />

      <div className='mx-2'></div>
      <hr />
      <div className='mt-2'>
        <h1 className='mt-4 text-left'>Favorite Items Table</h1>
        <DataTable
          data={favoriteItems}
          isFavorite={true}
          onAction={removeFromFavorites}
        />

        <AddNew isOpen={isModalOpen} data={selectedRowData} onClose={closeModal} />
      </div>
    </div>
  );
}

export default App;
