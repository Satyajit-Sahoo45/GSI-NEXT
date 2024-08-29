import React, { useState } from "react";
import { useEffect } from "react";

const ProductsList = ({ products }) => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selected, setSelected] = useState({})

    useEffect(() => {
        const productList = products.filter((product) => {
            const matchesFilter = activeFilter === "all" || product.sports.includes(activeFilter);
            const matchesSearch = product.location.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        setFilteredProducts(productList);
    }, [activeFilter, searchTerm, products]);

    const handlePayment = (e) => {
        e.preventDefault();

        var options = {
            key: "rzp_test_W1oT8Zcu6E3Jrk",
            key_secret: "DII6Ec88ZrD5mxrtucM9IC8h",
            amount: parseInt(selected.amount) * 100,
            currency: "INR",
            name: "QuickTime",
            description: "for testing purpose",
            handler: function (response) {
                const paymentId = response.razorpay_payment_id;
                console.log("payment id", paymentId);
            },
            theme: {
                color: "#07a291db",
            },
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }

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
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-max gap-2 flex justify-between">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-green-600 cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 cursor-pointer"
                            onClick={handlePayment}
                        >
                            Confirm
                        </button>
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
                                        <a href={product.bookingLink} className="text-blue-500 cursor-pointer" onClick={() => { setIsModalOpen(true); setSelected(product) }}>Book Now</a>
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
