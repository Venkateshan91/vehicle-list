import React, { useState, useEffect, useMemo } from 'react';
import FavoriteTable from "./components/data";
import DataTable from "./components/dataTable";
import AddNew from "./components/addnew";

function App() {
  useEffect(() => {
    const carsArr = [
      {
        id:1,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80&q=80",
        make: "Audi",
        model: "A3",
        price: "$40000",
        year: "2015",
        mileage: "15000",
        status: "Blocked",
        isFavorite: false
      },
      {
        id:2,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/28379/q3-exterior-right-front-three-quarter-93481.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A3",
        price: "$35000",
        year: "2013",
        mileage: "18000",
        status: "Available",
        isFavorite: true
      },
      {
        id:3,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/39472/a6-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A3 Sportback e-tron",
        price: "$41000",
        year: "2016",
        mileage: "12000",
        status: 'Available',
        isFavorite: true
      },
      {
        id:4,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/141373/q3-sportback-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A4",
        price: "$25000",
        year: "2006",
        mileage: "50000",
        status: 'Available',
        isFavorite: false
      },
      {
        id:5,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/34470/q8-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A4",
        price: "$23000",
        year: "2001",
        mileage: "48000",
        status: "Blocked",
        isFavorite: true
      },
      {
        id:6,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/53591/q5-exterior-right-front-three-quarter-36.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A4 allroad",
        price: "$49000",
        year: "2019",
        mileage: "10000",
        status: "Sold",
        isFavorite: true
      },
      {
        id:7,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/22803/audi-q7-facelift-right-front-three-quarter4.jpeg?q=80&q=80",
        make: "Audi",
        model: "A5",
        price: "$21000",
        year: "2008",
        mileage: "40000",
        status: "Blocked",
        isFavorite: true
      },
      {
        id:8,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/51378/s5-sportback-exterior-right-front-three-quarter-5.jpeg?q=80&q=80",
        make: "Audi",
        model: "A5 Sport",
        price: "$41000",
        year: "2017",
        mileage: "32000",
        status: "Sold",
        isFavorite: false
      },
      {
        id:9,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/47073/e-tron-gt-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Q3",
        price: "$50000",
        year: "2020",
        mileage: "13000",
        status: "Sold",
        isFavorite: true
      },
      {
        id:10,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/124141/a8-l-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "R8",
        price: "$25000",
        year: "2008",
        mileage: "35000",
        status: "Blocked",
        isFavorite: false
      },
      {
        id:11,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/49294/rs-q8-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "TT",
        price: "$48000",
        year: "2019",
        mileage: "16000",
        status: "Sold",
        isFavorite: true
      },
      {
        id:12,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/100073/rs5-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Q7",
        price: "$43000",
        year: "2015",
        mileage: "17000",
        status: "Sold",
        isFavorite: false
      },
      {
        id:13,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/152943/q8-e-tron-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Q8",
        price: "$49000",
        year: "2019",
        mileage: "8000",
        status: "Available",
        isFavorite: true
      },
      {
        id:14,
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/39048/e-tron-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Cabriolet",
        price: "$20000",
        year: "1996",
        mileage: "60000",
        status: "Available",
        isFavorite: false
      }
    ];
    setCarsList(carsArr);
    localStorage.setItem('carsArr', JSON.stringify(carsArr));
  },[]);
  const [updateData, setUpdateData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [carsList, setCarsList] = useState([]);
  const [favCarsList, setFavCarsList] = useState([]);

  const Addnew = (item) => {
    setSelectedRowData(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRowData(null);
    setIsModalOpen(false);
  };
 
  const addItem = (item) => {
    setCarsList([...carsList, item]);
  };

  const editItem = (item) => {
    const updatedNewData = updateData.map((d) =>
      d.id === item.id
        ? { ...d, make: item.make, model: item.model, year: item.year, mileage: item.mileage, price: item.price, image: item.image, status: item.status, isFavorite: item.isFavorite, }
        : d
    );
    setUpdateData(updatedNewData);
    // make, model, year, mileage, price, image, status, isFavorite
  };
  const deleteItem = (item) => {
    const updatedNewData = updateData.filter((d) => d.id !== item.id);
    setUpdateData(updatedNewData);
  };
  useEffect(() => {
    const storedFavoriteItems = JSON.parse(localStorage.getItem('carsList'));
    if (storedFavoriteItems) {
      setFavCarsList(storedFavoriteItems);
    }
    setFavCarsList(carsList.filter((e) => e.isFavorite));
  }, [carsList]);

  const handleFav = (id) => {
    setCarsList((items) =>
      items.map((e, i) => {
        return e.id === id ? { ...e, isFavorite: !e.isFavorite } : e;
      })
    );
  };

  return (
    <div className="w-full p-2 text-center">
      <h1 className="p-3">AutoHub - Your Ultimate Vehicle Marketplace</h1>
      <div className="float-right">
        <button type="button" data-modal-target="defaultModal" data-modal-toggle="defaultModal" onClick={() => Addnew()}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><span className='addButtonSpan'>+</span> Add Vehicle</button>
      </div>
      <DataTable data={carsList}  handleFav={handleFav} />

      <div className='mx-2'></div>
      <hr />
      <div className='mt-2'>
        <h1 className='mt-4 text-left'>Favorite Items Table</h1>
        <FavoriteTable
          data={favCarsList}
          handleFav={handleFav}
        />

        <AddNew isOpen={isModalOpen} data={selectedRowData} onClose={closeModal} onSave={(item) => {
          if (selectedRowData) {
            editItem(item);
          } else {
            addItem(item);
          }
          closeModal();
        }}
        item={selectedRowData}/>
      </div>
    </div>
  );
}

export default App;
