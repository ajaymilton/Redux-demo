import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormInput((currInput) => {
      return {
        ...currInput,
        [name]: value,
      };
    });
  };

  const addUser = (event) => {
    event.preventDefault(); //for avoiding the automatic page refreah
    dispatch(setUsers(formInput));
  };

  return (
    <div>
      <form className="max-w-md mx-auto p-4 bg-black shadow-md rounded-lg mt-8">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Name:
          </label>
          <input
            name="name"
            type="text"
            value={formInput.name}
            onChange={handleChange}
            placeholder="Enter your name..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Age:
          </label>
          <input
            name="age"
            type="number"
            value={formInput.age}
            onChange={handleChange}
            placeholder="Enter your age..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Email:
          </label>
          <input
            name="email"
            type="text"
            value={formInput.email}
            onChange={handleChange}
            placeholder="Enter your email..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Contact:
          </label>
          <input
            name="contact"
            type="number"
            value={formInput.contact}
            onChange={handleChange}
            placeholder="Enter your contact..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-center">
        <button
          onClick={addUser}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button" // Use type="button" to prevent form submission
        >
          Add
        </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
