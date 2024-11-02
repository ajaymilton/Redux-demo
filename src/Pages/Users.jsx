import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../slices/userSlice'

const Users = () => {
  const users = useSelector((state) => state.usersInfo.users)
  const dispatch = useDispatch()
  console.log(users) 

  const deleteUserInfo = (index) => {
    dispatch(deleteUser(index))
  }
  
  return (
    <div className="max-w-2xl mx-auto p-4 ">
      {users?.map((user, index) => (
        <div key={index} className="bg-black shadow-md rounded-lg p-4 mb-4">
          <h1 className="text-lg font-bold text-white">{user.name}</h1>
          <h2 className="text-white">Age: {user.age}</h2>
          <h2 className="text-white">Email: {user.email}</h2>
          <h2 className="text-white">Contact: {user.contact}</h2>
          <button
            onClick={() => deleteUserInfo(index)}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users