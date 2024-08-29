import React, { useState } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

const Invoice = () => {
    const initialUser = {
        name: '',
        email: '',
        phone: '',
    };

    const [customerDetails, setCustomerDetails] = useState(initialUser);
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [hours, setHours] = useState(0);
    const [total, setTotal] = useState(0);
    const [invoiceItems, setInvoiceItems] = useState([]);
    const costPerHour = 500;

    const formatCurrency = (value) => `₹ ${value.toFixed(2)}`;

    const calculateTotal = () => {
        const totalCost = hours * costPerHour;
        setTotal(totalCost);
        setInvoiceItems([{
            item: 'Turf Service',
            description: `High-quality turf service for ${hours} hours`,
            price: costPerHour,
            total: totalCost
        }]);
    };

    const handleGenerateInvoice = () => {
        if (!time || !hours) {
            toast.error("fill up turf details")
            return;
        }
        calculateTotal();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const currentDate = format(new Date(), 'MMMM d, yyyy');

    const printInvoice = () => {
        if (invoiceItems.length > 0) {
            window.print();
        } else {
            toast.error("Add all details")
            return;
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-green-100">
            <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
                <div className="border-b-2 border-teal-400 pb-4 text-center mb-4">
                    <h1 className="text-3xl font-bold text-teal-700">Turf Invoice</h1>
                    <p className="mt-2">Date: {currentDate}</p>
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
                                        name="name"
                                        value={customerDetails.name}
                                        onChange={handleChange}
                                        className="form-input w-full border border-teal-400 rounded p-2"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th className="border px-4 py-2 text-teal-800">Email:</th>
                                <td className="border px-4 py-2">
                                    <input
                                        type="email"
                                        name="email"
                                        value={customerDetails.email}
                                        onChange={handleChange}
                                        className="form-input w-full border border-teal-400 rounded p-2"
                                    />
                                </td>
                            </tr>
                            <tr className="bg-green-100">
                                <th className="border px-4 py-2 text-teal-800">Phone:</th>
                                <td className="border px-4 py-2">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={customerDetails.phone}
                                        onChange={handleChange}
                                        className="form-input w-full border border-teal-400 rounded p-2"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th className="border px-4 py-2 text-teal-800">Location:</th>
                                <td className="border px-4 py-2">
                                    <select
                                        value={location}
                                        placeholder="Choose Location"
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="form-select w-full border border-teal-400 rounded p-2"
                                    >
                                        <option value="" disabled>Select Location</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Kolkata">Kolkata</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Bangalore">Bangalore</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Noida">Noida</option>
                                        <option value="Gandhinagar">Gandhinagar</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Jaipur">Jaipur</option>
                                        <option value="Patna">Patna</option>
                                    </select>
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
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
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
                        {invoiceItems.length > 0 ? (
                            <tbody>
                                {invoiceItems.map((item, index) => (
                                    <tr key={index} className="bg-green-100">
                                        <td className="border px-4 py-2">{item.item}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                        <td className="border px-4 py-2">{formatCurrency(item.price)}</td>
                                        <td className="border px-4 py-2">{formatCurrency(item.total)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <p className='text-center w-full'>No items to display.</p>
                        )}
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
                        onClick={printInvoice}
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
