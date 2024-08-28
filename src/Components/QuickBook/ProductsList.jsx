import React, { useState } from "react";
import { useEffect } from "react";

const ProductsList = ({ products }) => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        const productList = products.filter((product) => {
            const matchesFilter = activeFilter === "all" || product.sports.includes(activeFilter);
            const matchesSearch = product.location.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        setFilteredProducts(productList);
    }, [activeFilter, searchTerm, products]);

    return (
        <main className="p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by location..."
                    className="p-2 border rounded"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="flex space-x-2 mb-4">
                {["all", "Volleyball", "Basketball", "Cricket", "Football"].map((sport) => (
                    <button
                        key={sport}
                        className={`px-4 py-2 rounded ${activeFilter === sport ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        onClick={() => setActiveFilter(sport)}
                    >
                        {sport}
                    </button>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 h-12 w-12 font-medium"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Book Now</h2>
                        <form action="https://www.paypal.com/ie/home">
                            <label className="block mb-2 text-gray-700">Name:</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="block w-full p-2 mb-4 border border-gray-300 rounded"
                            />
                            <label className="block mb-2 text-gray-700">Username:</label>
                            <input
                                type="text"
                                placeholder="Enter User Name"
                                className="block w-full p-2 mb-4 border border-gray-300 rounded"
                            />
                            <label className="block mb-2 text-gray-700">Email:</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="block w-full p-2 mb-4 border border-gray-300 rounded"
                            />
                            <label className="block mb-2 text-gray-700">Mobile No:</label>
                            <input
                                type="text"
                                placeholder="Enter Your Mobile No"
                                className="block w-full p-2 mb-4 border border-gray-300 rounded"
                            />
                            <button
                                type="submit"
                                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 cursor-pointer"
                            >
                                Confirm
                            </button>
                        </form>
                    </div>
                </div>
            )
            }

            <div id="results" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div key={index} className="product p-4 border rounded-lg shadow-md">
                            <img src={product.image} alt={product.location} className="w-full h-48 object-cover rounded-lg" />
                            <div className="prod-detail mt-4">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined">Location: </span>
                                    <h2 className="ml-2 text-lg font-bold">{product.location}</h2>
                                </div>
                            </div>
                            <div id="feedback" className="mt-2">
                                <div id="SportField">
                                    <h5 className="font-semibold">{product.name} Field</h5>
                                </div>
                                <div id="location" className="mt-1">
                                    <p className="text-sm">
                                        <strong>Address:</strong><br />
                                        <i>{product.address}</i>
                                    </p>
                                </div>
                                <div id="prc" className="mt-2 flex justify-between">
                                    <div>
                                        <p><b>Sport:</b><br /><i>Tennis</i><br /><i>{product.name}</i></p>
                                    </div>
                                    <div className="action">
                                        <h3 className="font-bold">Amount:<br />{product.amount}</h3>
                                        <a href={product.bookingLink} className="text-blue-500 cursor-pointer" onClick={() => setIsModalOpen(true)}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="rating mt-2">
                                <img src={product.ratingImage} alt="rating" className="w-6 h-6" />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center">No products found.</p>
                )}
            </div>
        </main >
    );
};

export default ProductsList;
