import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import SessionProvider from '../../Provider/SessionProvider';

const Navbar = () => {
    const { currentUser, loading } = SessionProvider();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative px-4 py-4 flex justify-between items-center bg-gray-100">
            <div className='sm:w-full sm:flex sm:justify-between'>
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <span className="font-semibold text-xl tracking-tight">QuickTime</span>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="flex items-center text-blue-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <ul className={`lg:flex lg:items-center lg:w-auto lg:space-x-6 ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-full left-0 w-full lg:w-auto bg-gray-100 lg:bg-transparent`}>
                <li><Link className="block lg:inline-block text-sm text-gray-400 hover:text-gray-500 px-4 py-2 lg:px-0" to="/admin/dashboard">Dashboard</Link></li>
                <li><Link className="block lg:inline-block text-sm text-gray-400 hover:text-gray-500 px-4 py-2 lg:px-0" to="/invoice">Invoice</Link></li>
                <li><Link className="block lg:inline-block text-sm text-gray-400 hover:text-gray-500 px-4 py-2 lg:px-0" to="/ReviewandRating">Review&Rating</Link></li>
                <li><Link className="block lg:inline-block text-sm text-gray-400 hover:text-gray-500 px-4 py-2 lg:px-0" to="/quickbook">QuickBook</Link></li>
            </ul>

            {!loading && (
                currentUser ? (
                    <div className="flex items-center">
                        <Link to="/profile" className="hidden lg:inline-block py-2 px-6 hover:bg-gray-50 text-sm text-gray-900 font-bold rounded-xl transition duration-200">
                            <FaRegUserCircle className="text-gray-900 text-2xl mr-1" />
                        </Link>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <Link to="/login" className="hidden min-w-max lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-gray-900 font-bold rounded-xl transition duration-200">
                            Sign In
                        </Link>
                        <Link to="/signup" className="hidden min-w-max lg:inline-block py-2 px-4 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">
                            Sign Up
                        </Link>
                    </div>
                )
            )}
        </nav>
    );
};

export default Navbar;
