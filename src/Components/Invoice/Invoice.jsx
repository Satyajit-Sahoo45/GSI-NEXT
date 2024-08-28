import React, { useState, useEffect } from 'react';

const Invoice = () => {
    const loggedInUser = {
        name: 'Muthmain Banu',
        email: 'muthmain@example.com',
        phone: '1234567890',
    };

    const turfLocations = {
        turf1: 'Location A',
        turf2: 'Location B',
        turf3: 'Location C',
    };

    const [customerDetails, setCustomerDetails] = useState(loggedInUser);
    const [location, setLocation] = useState('');
    const [hours, setHours] = useState(0);
    const [total, setTotal] = useState(0);
    const costPerHour = 500;

    useEffect(() => {
        const selectedTurf = new URLSearchParams(window.location.search).get('turf');
        if (selectedTurf && turfLocations[selectedTurf]) {
            setLocation(turfLocations[selectedTurf]);
        } else {
            setLocation('Unknown Location');
        }
    }, []);

    const formatCurrency = (value) => `₹ ${value.toFixed(2)}`;

    const calculateTotal = () => {
        const totalCost = hours * costPerHour;
        setTotal(totalCost);
    };

    const handleGenerateInvoice = () => {
        calculateTotal();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-green-100">
            <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
                <div className="border-b-2 border-teal-400 pb-4 text-center mb-4">
                    <h1 className="text-3xl font-bold text-teal-700">Turf Invoice</h1>
                    <p className="mt-2">Date: August 8, 2024</p>
                    <p>Invoice Number: #001</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl text-teal-700 mb-4">Customer Details</h2>
                    <table className="w-full bg-white rounded-md overflow-hidden mb-4 border-collapse">
                        <tbody>
                            <tr className="bg-green-100">
                                <th className="border px-4 py-2 text-teal-800">Name:</th>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        value={customerDetails.name}
                                        readOnly
                                        className="form-input w-full border border-teal-400 rounded p-2"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th className="border px-4 py-2 text-teal-800">Email:</th>
                                <td className="border px-4 py-2">
                                    <input
                                        type="email"
                                        value={customerDetails.email}
                                        readOnly
                                        className="form-input w-full border border-teal-400 rounded p-2"
                                    />
                                </td>
                            </tr>
                            <tr className="bg-green-100">
                                <th className="border px-4 py-2 text-teal-800">Phone:</th>
                                <td className="border px-4 py-2">
                                    <input
                                        type="tel"
                                        value={customerDetails.phone}
                                        readOnly
                                        className="form-input w-full border border-teal-400 rounded p-2"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th className="border px-4 py-2 text-teal-800">Location:</th>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        value={location}
                                        readOnly
                                        className="form-input w-full border border-teal-400 rounded p-2"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl text-teal-700 mb-4">Turf Details</h2>
                    <table className="w-full bg-white rounded-md overflow-hidden mb-4 border-collapse">
                        <tbody>
                            <tr className="bg-green-100">
                                <th className="border px-4 py-2 text-teal-800">Time:</th>
                                <td className="border px-4 py-2">
                                    <input
                                        type="time"
                                        className="form-input w-full border border-teal-400 rounded p-2"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th className="border px-4 py-2 text-teal-800">Hours:</th>
                                <td className="border px-4 py-2">
                                    <input
                                        type="number"
                                        value={hours}
                                        onChange={(e) => setHours(parseFloat(e.target.value))}
                                        className="form-input w-full border border-teal-400 rounded p-2"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl text-teal-700 mb-4">Invoice Items</h2>
                    <table className="w-full bg-white rounded-md overflow-hidden mb-4 border-collapse">
                        <thead>
                            <tr className="bg-teal-700 text-white">
                                <th className="border px-4 py-2">Item</th>
                                <th className="border px-4 py-2">Description</th>
                                <th className="border px-4 py-2">Price</th>
                                <th className="border px-4 py-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-green-100">
                                <td className="border px-4 py-2">Turf Service</td>
                                <td className="border px-4 py-2">High-quality turf service for {hours} hours</td>
                                <td className="border px-4 py-2">{formatCurrency(costPerHour)}</td>
                                <td className="border px-4 py-2">{formatCurrency(total)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="text-center font-bold text-2xl text-teal-700 mb-6">
                    <h2>Total:</h2>
                    <p>{formatCurrency(total)}</p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <button
                        onClick={handleGenerateInvoice}
                        className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition"
                    >
                        Generate Invoice
                    </button>
                    <button
                        onClick={() => window.print()}
                        className="bg-teal-300 text-white py-2 px-6 rounded hover:bg-teal-400 transition"
                    >
                        Print Invoice
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
