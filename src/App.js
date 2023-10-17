import React, { useState, useEffect, useMemo } from 'react';
import FavoriteTable from "./components/data";
import DataTable from "./components/dataTable";
import AddNew from "./components/addnew";
import Kanban from './components/Kanban';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [updateData, setUpdateData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [carsList, setCarsList] = useState([]);
  const [favCarsList, setFavCarsList] = useState([]);
  const [isComponentVisible, setComponentVisibility] = useState(false);

  const toggleVisibility = () => {
    setComponentVisibility(!isComponentVisible);
  };

  useEffect(() => {
    const storedCarList = JSON.parse(localStorage.getItem('carsArr'));
    console.log("storedCarList",storedCarList)
    const carsArr = [
      {
        id: 1,
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
        id: 2,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/28379/q3-exterior-right-front-three-quarter-93481.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A3",
        price: "$35000",
        year: "2013",
        mileage: "18000",
        status: "Available",
        isFavorite: true
      },
      {
        id: 3,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/39472/a6-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A3 Sportback e-tron",
        price: "$41000",
        year: "2016",
        mileage: "12000",
        status: 'Available',
        isFavorite: true
      },
      {
        id: 4,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141373/q3-sportback-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A4",
        price: "$25000",
        year: "2006",
        mileage: "50000",
        status: 'Available',
        isFavorite: false
      },
      {
        id: 5,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/34470/q8-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A4",
        price: "$23000",
        year: "2001",
        mileage: "48000",
        status: "Blocked",
        isFavorite: true
      },
      {
        id: 6,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/53591/q5-exterior-right-front-three-quarter-36.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A4 allroad",
        price: "$49000",
        year: "2019",
        mileage: "10000",
        status: "Sold",
        isFavorite: true
      },
      {
        id: 7,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/22803/audi-q7-facelift-right-front-three-quarter4.jpeg?q=80&q=80",
        make: "Audi",
        model: "A5",
        price: "$21000",
        year: "2008",
        mileage: "40000",
        status: "Blocked",
        isFavorite: true
      },
      {
        id: 8,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51378/s5-sportback-exterior-right-front-three-quarter-5.jpeg?q=80&q=80",
        make: "Audi",
        model: "A5 Sport",
        price: "$41000",
        year: "2017",
        mileage: "32000",
        status: "Sold",
        isFavorite: false
      },
      {
        id: 9,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/47073/e-tron-gt-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Q3",
        price: "$50000",
        year: "2020",
        mileage: "13000",
        status: "Sold",
        isFavorite: true
      },
      {
        id: 10,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/124141/a8-l-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "R8",
        price: "$25000",
        year: "2008",
        mileage: "35000",
        status: "Blocked",
        isFavorite: false
      },
      {
        id: 11,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/49294/rs-q8-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "TT",
        price: "$48000",
        year: "2019",
        mileage: "16000",
        status: "Sold",
        isFavorite: true
      },
      {
        id: 12,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/100073/rs5-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Q7",
        price: "$43000",
        year: "2015",
        mileage: "17000",
        status: "Sold",
        isFavorite: false
      },
      {
        id: 13,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/152943/q8-e-tron-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Q8",
        price: "$49000",
        year: "2019",
        mileage: "8000",
        status: "Available",
        isFavorite: true
      },
      {
        id: 14,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/39048/e-tron-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Cabriolet",
        price: "$20000",
        year: "1996",
        mileage: "60000",
        status: "Available",
        isFavorite: false
      }
    ];
    if(storedCarList?.length) {
      setCarsList(storedCarList);
    }
    else {
      setCarsList(carsArr);
      localStorage.setItem('carsArr', JSON.stringify(carsArr));
    }    

    const storedFavoriteItems = JSON.parse(localStorage.getItem('favCarsList'));
    if (storedFavoriteItems?.length) {
      setFavCarsList(storedFavoriteItems);
    }else{
      filterFavList(storedCarList?.length ? storedCarList : carsArr)
    } 
  }, []);

  const filterFavList = (list)=> {
    const favList = list.filter((e) => e.isFavorite)
    console.log("fav list filter",favList)
    setFavCarsList(favList);
    localStorage.setItem('favCarsList', JSON.stringify(favList));
  }

  // useEffect(() => {
  //   setFavCarsList(carsList.filter((e) => e.isFavorite));
  // }, [carsList]);
  

  // const Addnew = (item) => {
  //   if (item?.id) {
  //     setSelectedRowData(item)
  //   }
  //   setIsModalOpen(true);
  // };
  const Addnew = (item) => {
    console.log("car LIse",carsList,"id",item)
    if(item?.id){      
      setSelectedRowData(item)
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRowData(null);
    setIsModalOpen(false);
  };

  // const addItem = (item) => {
  //   setCarsList([...carsList, item]);
  // };
  const addItem = (item) => {
    console.log("add item", item,carsList)
    const updatedList = [...carsList, item];
    setCarsList(updatedList);
    localStorage.setItem('carsArr', JSON.stringify(updatedList));
    filterFavList(updatedList);
  };

  // const editItem = (item) => {
  //   const updatedNewData = carsList.map((d) =>
  //     d.id === item.id
  //       ? { ...d, make: item.make, model: item.model, year: item.year, mileage: item.mileage, price: item.price, image: item.image, status: item.status, isFavorite: item.isFavorite, }
  //       : d
  //   );
  //   setCarsList(updatedNewData)
  //   setFavCarsList(updatedNewData.filter((e) => e.isFavorite));
  // };
  const editItem = (item) => {
    console.log("item",item)
    const updatedNewData = carsList.map((d) =>
      d.id === item.id
        ? { ...d, make: item.make, model: item.model, year: item.year, mileage: item.mileage, price: item.price, image: item.image, status: item.status, isFavorite: item.isFavorite, }
        : d
    );
    console.log("updated a",updatedNewData)
    // setUpdateData(updatedNewData);
    setCarsList(updatedNewData)
    localStorage.setItem('carsArr', JSON.stringify(updatedNewData));
    filterFavList(updatedNewData);
    // make, model, year, mileage, price, image, status, isFavorite
  };

  // const deleteItem = (id) => {
  //   setCarsList((items) => {
  //     return items.filter((d) => d.id !== id)
  //   }
  //   );
  // };
  const deleteItem = (id) => {
    setCarsList((items) =>{
      const updatedList = items.filter((d) => d.id !== id)
      localStorage.setItem('carsArr', JSON.stringify(updatedList));
      filterFavList(updatedList);
      return updatedList
    }    
    );
  };

  // const handleFav = (id) => {
  //   setCarsList((items) => {
  //     return items.map((e, i) => {
  //       return e.id === id ? { ...e, isFavorite: !e.isFavorite } : e;
  //     })
  //   }
  //   );
  // };
  const handleFav = (id) => {
    setCarsList((items) =>{
      const updatedList = items.map((e, i) => {
        return e.id === id ? { ...e, isFavorite: !e.isFavorite } : e;
      })
      localStorage.setItem('carsArr', JSON.stringify(updatedList));
      filterFavList(updatedList);
      return updatedList
    }      
    );
  };

  return (
    <div className="w-full p-2 text-center">
      <h1 className="p-3">AutoHub - Your Ultimate Vehicle Marketplace</h1>
      <div className='w-full'>
        <div className='w-40 items-start'>
          <button className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 '
            onClick={toggleVisibility}>
            Kanban Board
          </button>

          {isComponentVisible && <Kanban />}
        </div>
      </div>
      <div className="float-right">
        <button type="button" data-modal-target="defaultModal" data-modal-toggle="defaultModal" onClick={() => Addnew()}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><span className='addButtonSpan'>+</span> Add Vehicle</button>
      </div>
      <DataTable data={carsList} handleFav={handleFav} deleteItem={deleteItem} Addnew={Addnew} />

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
          item={selectedRowData} />
      </div>
    </div>
  );
}

export default App;
