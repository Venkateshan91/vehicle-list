import React, { useState, useEffect } from "react";

function AddNew({ isOpen, data, onClose, onSave, addVehicle, useRows }) {
    const [addCar, setAddCar] = useState(useRows);
    const [newCar, setNewCar] = useState({ make: "", model: "", year: "", mileage: "", price: "", images: "", status: "", isFavorite: "", })
    if (!isOpen) return null;

    // useEffect(() => {
    //     const storedCar = JSON.parse(localStorage.getItem("addCar"));
    //     if (storedCar) {
    //         setAddCar(storedCar);
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("addCar", JSON.stringify(addCar));
    // }, [addCar]);

    const addNewCar = () => {
        // if (newCar.text.trim() !== "") {
            setAddCar([
                ...addCar,
                {
                    id: new Date().getTime(),
                    ...newCar
                }
            ]);
            setNewCar({ title: "", description: "", text: "", selectValue: "" });
        // }
    };


    // const handleChange = (e) => {

    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    // };
    const status = ['Available', 'Blocked', 'Sold'];
    const isFavorite = ['true', 'false'];
    return (
        <div tabindex="-1" aria-hidden="true" className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="modal-overlay" onClick={onClose}></div>
                <div className="modal-content bg-white p-4 rounded shadow-lg relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <h2 className="text-lg text-left font-semibold mb-4">Add New Vehicle</h2>
                    <div className='container'>
                        <div className="w-full">
                            <div className='w-80'>
                                {/* <form className='w-80' onSubmit={handleSubmit}> */}
                                <div className="mb-2">
                                    <label className="block text-left text-gray-700 text-md font-bold mb-2" >
                                        Make
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="make" type="text" value={newCar.make} onChange={(e) => { setNewCar({ ...newCar, make: e.target.value }) }} placeholder="Enter Make" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="model">
                                        Model
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="model" type="text" value={newCar.model} onChange={(e) => { setNewCar({ ...newCar, model: e.target.value }) }} placeholder="Enter Model" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="image">
                                        Image Url
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="text" value={newCar.image} onChange={(e) => { setNewCar({ ...newCar, image: e.target.value }) }} placeholder="Enter Imageurl" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="price">
                                        Price
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" value={newCar.price} onChange={(e) => { setNewCar({ ...newCar, price: e.target.value }) }} placeholder="Enter Price" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="year">
                                        Year
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="year" type="text" value={newCar.year} onChange={(e) => { setNewCar({ ...newCar, year: e.target.value }) }} placeholder="Enter Price" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="mileage">
                                        Mileage
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mileage" type="text" value={newCar.mileage} onChange={(e) => { setNewCar({ ...newCar, mileage: e.target.value }) }} placeholder="Enter Mileage" />
                                </div>
                                <div className="mb-2">
                                    <label className="block  text-left text-gray-700 text-md font-bold mb-2" for="status">
                                        Status
                                    </label>
                                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={newCar.status} onChange={(e) =>
                                        setNewCar({ ...newCar, status: e.target.value })
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
                                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={newCar.isFavorite} onChange={(e) =>
                                        setNewCar({ ...newCar, isFavorite: e.target.value })
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
                        {/* {data ? "Save" : "Update"} */}
                        Save
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
