import { useState } from "react";
import ProductsList from "./ProductsList";
import { ProductsData } from "../../ProductsData";

export const QuickBook = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");

    const [filteredProducts, setFilteredProducts] = useState(ProductsData);


    const applyFilters = () => {
        const filtered = filteredProducts.filter(product => {
            const productDate = product.date;
            const productLocation = product.location;
            const productPrice = parseInt(product.amount);

            const matchesDate = !selectedDate || productDate === selectedDate;
            const matchesLocation = !selectedLocation || productLocation.toLowerCase() === selectedLocation.toLowerCase();
            const matchesPrice = !selectedPrice || productPrice <= selectedPrice;
            const matchesSportFilter = activeFilter === "all" || product.sports.includes(activeFilter);

            return matchesDate && matchesLocation && matchesPrice && matchesSportFilter;
        });

        setFilteredProducts(filtered);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <main className="hero-section p-6 bg-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Sport Events</h1>
                <div className="flex gap-2">

                    <button
                        onClick={toggleModal}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                    >
                        Filter
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                        <button
                            onClick={() => { toggleModal(); }}
                            className="absolute right-4 top-6 text-blue-400 hover:text-gray-600 h-4 w-4"
                        >
                            X
                        </button>
                        <h2 className="text-lg font-semibold mb-4">Filters</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="dateFilter" className="block text-sm font-medium">
                                    Date:
                                </label>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(new Date(e.target.value).toISOString().split('T')[0])}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <label htmlFor="locationFilter" className="block text-sm font-medium">
                                    Location:
                                </label>
                                <input
                                    list="location"
                                    id="locationFilter"
                                    placeholder="Choose Location"
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value.trim())}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                                />
                                <datalist id="location">
                                    <option value="Mumbai" />
                                    <option value="Delhi" />
                                    <option value="Kerala" />
                                    <option value="Kolkata" />
                                    <option value="Punjab" />
                                    <option value="Bangalore" />
                                    <option value="Hyderabad" />
                                    <option value="Chennai" />
                                    <option value="Noida" />
                                    <option value="Gandhinagar" />
                                    <option value="Pune" />
                                    <option value="Jaipur" />
                                    <option value="Patna" />
                                </datalist>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <h6 className="text-sm font-medium">Price Range</h6>
                                    <div id="LengthDisplay" className="text-sm">{selectedPrice}</div>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="10000"
                                    step="100"
                                    value={selectedPrice}
                                    onChange={(e) => setSelectedPrice(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    onClick={applyFilters}
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto p-4">
                <ProductsList products={filteredProducts} />
            </div>
        </main>
    );
};
