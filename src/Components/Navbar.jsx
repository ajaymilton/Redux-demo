import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-black py-4 px-40 flex justify-between items-center">
        <h1 className="text-3xl font-medium text-white">React</h1>
        <ul className="flex space-x-4 text-xl font-light">
            <li><Link to="/" className="text-white hover:text-amber-600 px-2">Home</Link></li>
            <li><Link to="/users" className="text-white hover:text-amber-600 px-2">Users</Link></li>
            <li><Link to="/about" className="text-white hover:text-amber-600 px-2">About</Link></li>
            <li><Link to="/contact" className="text-white hover:text-amber-600 px-2">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar