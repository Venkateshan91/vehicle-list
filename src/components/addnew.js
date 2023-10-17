import React, { useState, useEffect } from "react";

function AddNew({ isOpen, onClose, onSave, item, editItem }) {
    
    const [itemId, setItemId] = useState(0);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [mileage, setMileage] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [carStatus, setCarStatus] = useState("");
    const [carIsFavorite, setCarIsFavorite] = useState("");

    useEffect(() => {
        setItemId(item ? item.id : 0)
        setMake(item ? item.make : "")
        setModel(item ? item.model : "")
        setYear(item ? item.year : "")
        setMileage(item ? item.mileage : "")
        setPrice(item ? item.price : "")
        setImage(item ? item.image : "")
        setCarStatus(item ? item.status : "")
        setCarIsFavorite(item ? item.isFavorite : "")
    }, [item]);

    if (!isOpen) return null;

    const addNewCar = () => {
        onSave({ id: itemId, make, model, year, mileage, price, image, status: carStatus, isFavorite:carIsFavorite });
        
        onClose();
    };

    const status = ['Available', 'Blocked', 'Sold'];
    const isFavorite = ['true', 'false'];

    return (
        <div tabindex="-1" aria-hidden="true" className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="modal-overlay" onClick={onClose}></div>
                <div className="modal-content bg-white p-4 rounded shadow-lg relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <h2 className="text-lg text-left font-semibold mb-4">{item ? "Update Vehicle" : "Add New Vehicle"}</h2>
                    <div className='container'>
                        <div className="w-full">
                            <div className='w-80'>
                                {/* <form className='w-80' onSubmit={handleSubmit}> */}
                                <div className="mb-2">
                                    <label className="block text-left text-gray-700 text-md font-bold mb-2" >
                                        Make
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="make" type="text" value={make} onChange={(e) => { setMake(e.target.value) }} placeholder="Enter Make" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="model">
                                        Model
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="model" type="text" value={model} onChange={(e) => { setModel(e.target.value) }} placeholder="Enter Model" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="image">
                                        Image Url
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="text" value={image} onChange={(e) => { setImage(e.target.value) }} placeholder="Enter Imageurl" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="price">
                                        Price
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder="Enter Price" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="year">
                                        Year
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="year" type="text" value={year} onChange={(e) => { setYear(e.target.value) }} placeholder="Enter Price" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="mileage">
                                        Mileage
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mileage" type="text" value={mileage} onChange={(e) => { setMileage(e.target.value) }} placeholder="Enter Mileage" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="status">
                                        Status
                                    </label>
                                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={carStatus} onChange={(e) => {
                                        setCarStatus(e.target.value)
                                    }

                                    }>
                                        <option value="">Select an option</option>
                                        {status.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="isFavorite">
                                        isFavorite
                                    </label>
                                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={carIsFavorite} onChange={(e) =>
                                        setCarIsFavorite(e.target.value)
                                    }>
                                        <option value="">Select an option</option>
                                        {isFavorite.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                    <button
                        className="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600" onClick={addNewCar}>
                        {item ? "Update" : "Save"}

                    </button>
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600 ms-3 ">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNew;
