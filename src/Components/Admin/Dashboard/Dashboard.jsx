import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-purple-700 text-white">
            <header className="pt-8">
                <h1 className="text-center text-3xl font-bold mb-4">QuickBooks Dashboard</h1>
                {/* <div className="flex justify-center">
                    <div className="w-8 h-8 border-4 border-t-4 border-t-blue-500 border-blue-300 rounded-full animate-spin"></div>
                </div> */}
            </header>
            <main className="flex flex-wrap justify-around mt-6">
                <section className="w-full md:w-1/3 p-4">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-300">Summary</h2>
                    <div className="mb-6 p-4 bg-gray-100 text-gray-800 rounded shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Profit and Loss</h3>
                        <p>Total Income: <span className="font-bold">₹10,000</span></p>
                        <p>Total Expenses: <span className="font-bold">₹5,000</span></p>
                        <p>Net Profit: <span className="font-bold">₹5,000</span></p>
                    </div>
                    <div className="mb-6 p-4 bg-gray-100 text-gray-800 rounded shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Balance Sheet</h3>
                        <p>Assets: <span className="font-bold">₹20,000</span></p>
                        <p>Liabilities: <span className="font-bold">₹10,000</span></p>
                        <p>Equity: <span className="font-bold">₹10,000</span></p>
                    </div>
                </section>

                <section className="w-full md:w-1/3 p-4">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-300">Sales</h2>
                    <div className="mb-6 p-4 bg-gray-100 text-gray-800 rounded shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Invoices</h3>
                        <p>Outstanding: <span className="font-bold">₹2,000</span></p>
                        <p>Paid: <span className="font-bold">₹8,000</span></p>
                    </div>
                    <div className="mb-6 p-4 bg-gray-100 text-gray-800 rounded shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Sales Overview</h3>
                        <p>Total Sales: <span className="font-bold">₹10,000</span></p>
                        <p>Open Invoices: <span className="font-bold">₹2,000</span></p>
                        <p>Overdue Invoices: <span className="font-bold">₹500</span></p>
                    </div>
                </section>

                <section className="w-full md:w-1/3 p-4">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-300">Expenses</h2>
                    <div className="mb-6 p-4 bg-gray-100 text-gray-800 rounded shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Expense Overview</h3>
                        <p>Total Expenses: <span className="font-bold">₹5,000</span></p>
                        <p>Recent Expenses: <span className="font-bold">₹1,200</span></p>
                    </div>
                    <div className="mb-6 p-4 bg-gray-100 text-gray-800 rounded shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Bills</h3>
                        <p>Outstanding: <span className="font-bold">₹1,000</span></p>
                        <p>Paid: <span className="font-bold">₹4,000</span></p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
