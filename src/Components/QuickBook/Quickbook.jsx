import { useState } from "react";
import ProductsList from "./ProductsList";
import fourStar from '../../image/4star.png';
import threeStar from '../../image/3star.png';
import mumbai2 from "../../image/mumbai2.jpg"
import Hyderabad from '../../image/Hyderabad.jpg';
import Banglore1 from '../../image/Banglore1.jpg';
import Banglore2 from '../../image/Banglore2.jpg';
import Banglore3 from '../../image/Banglore3.jpg';
import Banglore4 from '../../image/banglore4.jpg';
import Banglore5 from '../../image/Banglore5.jpg';
import Chennai from '../../image/Chennai.jpg';
import Kerala2 from '../../image/kerala2.jpg';
import Chennai3 from '../../image/Chennai3.jpg';
import Delhi3 from '../../image/Delhi3.jpg';
import Delhi2 from '../../image/Delhi2.jpg';

export const QuickBook = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");

    const productsData = [
        {
            id: 1,
            name: 'Tennis',
            date: '2024-07-20',
            image: mumbai2,
            location: 'Delhi',
            mapName: 'img13',
            mapLink: 'https://maps.app.goo.gl/qEN8T4xnYuh3fbJZ9',
            fieldName: 'Tennis Field',
            address: 'inside Ramjas Sports Complex, Block 36, West Patel Nagar, Patel Nagar, Delhi',
            sports: ['Tennis'],
            amount: '8500',
            ratingImage: threeStar,
        },
        {
            id: 2,
            name: 'Tennis',
            date: '2024-07-20',
            image: mumbai2,
            location: 'Patna',
            mapName: 'img14',
            mapLink: 'https://maps.app.goo.gl/jxNCMiRfdCrds2PT8',
            fieldName: 'Tennis Field',
            address: 'Polson Dairy Road, near Patliputra Rail-Parisar, Nirala Nagar, Birla Colony',
            sports: ['Tennis'],
            amount: '7500',
            ratingImage: threeStar,
        },
        {
            id: 3,
            name: 'Football',
            date: '2024-07-20',
            image: Hyderabad,
            location: 'Patna',
            mapName: 'img15',
            mapLink: 'https://maps.app.goo.gl/Wdf3jnWmpHDJwKZL7',
            fieldName: 'Football Field',
            address: 'Atal Path, Yadav Colony, Digha Ghat, Patna, Bihar 800011',
            sports: ['Football'],
            amount: '7500',
            ratingImage: threeStar,
        },
        {
            id: 4,
            name: 'Volleyball',
            date: '2024-07-20',
            image: Banglore1,
            location: 'Bangalore',
            mapName: 'img16',
            mapLink: 'https://maps.app.goo.gl/eqQdPuzZ7s32hwSB6',
            fieldName: 'Volleyball Field',
            address: 'Royal Western India Turf Club Mahalakshmi Mumbai, Maharashtra',
            sports: ['Volleyball'],
            amount: '8500',
            ratingImage: threeStar,
        },
        {
            id: 5,
            name: 'Tennis',
            date: '2024-07-20',
            image: Banglore2,
            location: 'Bangalore',
            mapName: 'img4',
            mapLink: 'https://maps.app.goo.gl/YNedziv2VaXaoyxw6',
            fieldName: 'Tennis Field',
            address: 'Jan Path, Pratik Nagar, Jhotwara, Jaipur, Rajasthan 302012',
            sports: ['Tennis'],
            amount: '8500',
            ratingImage: fourStar,
        },
        {
            id: 6,
            name: 'Tennis',
            date: '2024-07-20',
            image: Banglore3,
            location: 'Bangalore',
            mapName: 'img5',
            mapLink: 'https://maps.app.goo.gl/hvb2rDmqSQqYgeGA6',
            fieldName: 'Tennis Field',
            address: 'Chapparadahalli, Near GITAM University Banglore',
            sports: ['Tennis'],
            amount: '7500',
            ratingImage: threeStar,
        },
        {
            id: 7,
            name: 'Volleyball',
            date: '2024-07-20',
            image: Banglore4,
            location: 'Chennai',
            mapName: 'img6',
            mapLink: 'https://maps.app.goo.gl/V6V6RGuEay4rCe5D7',
            fieldName: 'Volleyball Field',
            address: '47, Bajanai Koil Street, RK Link Rd, Villivakkam, Chennai, Tamil Nadu',
            sports: ['Volleyball'],
            amount: '8500',
            ratingImage: threeStar,
        },
        {
            id: 8,
            name: 'Volleyball',
            date: '2024-07-20',
            image: Banglore5,
            location: 'Delhi',
            mapName: 'img8',
            mapLink: 'https://maps.app.goo.gl/Qhu8feb8CGAAZNhw5',
            fieldName: 'Football Field',
            address: 'Summer Fields School, Greater Kailash-1 Kailash Colony, Greater Kailash',
            sports: ['Volleyball'],
            amount: '8500',
            ratingImage: threeStar,
        },
        {
            id: 9,
            name: 'Football',
            date: '2024-07-20',
            image: Chennai,
            location: 'Delhi',
            mapName: 'img9',
            mapLink: 'https://maps.app.goo.gl/zMuiVeoEtDNm7u5P6',
            fieldName: 'Football Field',
            address: 'Farm 31, 100 Feet Rd, Ghitorni, New Delhi, Delhi',
            sports: ['Football'],
            amount: '8500',
            ratingImage: threeStar,
        },
        {
            id: 10,
            name: 'Football',
            date: '2024-07-20',
            image: Kerala2,
            location: 'Delhi',
            mapName: 'img10',
            mapLink: 'https://maps.app.goo.gl/dMc44rP69JoVY4Xq9',
            fieldName: 'Football Field',
            address: 'MVC7+XHC, Loharka Rd, Gumtala Sub Urban Ranjit Vihar, Nanngli, Amritsar',
            sports: ['Football'],
            amount: '800',
            ratingImage: threeStar,
        },
        {
            id: 11,
            name: 'Football',
            date: '2024-07-20',
            image: Chennai3,
            location: 'Patna',
            mapName: 'img11',
            mapLink: 'https://maps.app.goo.gl/uNnfMQRHAn91LLei9',
            fieldName: 'Football Field',
            address: 'Polson Road, beside Modern School, Yadav Colony, Digha Ghat, Patna',
            sports: ['Football'],
            amount: '7000',
            ratingImage: fourStar,
        },
        {
            id: 12,
            name: 'Volleyball',
            date: '2024-07-20',
            image: Delhi2,
            location: 'Delhi',
            mapName: 'img1',
            mapLink: 'https://maps.app.goo.gl/G4yq3L7NpGMifcKfA',
            fieldName: 'Volleyball Field',
            address: 'Suraj Bhan DAV Public School, Poorvi Marg, New Delhi, Delhi 110057',
            sports: ['Volleyball'],
            amount: '8500',
            ratingImage: threeStar,
        },
        {
            id: 13,
            name: 'Volleyball',
            date: '2024-07-20',
            image: Delhi3,
            location: 'Kerala',
            mapName: 'img23',
            mapLink: 'https://maps.app.goo.gl/qz4L2ympbq56LCWR7',
            fieldName: 'Volleyball Field',
            address: '78C6+25X,Kadukutty,Kerala 680309',
            sports: ['Volleyball'],
            amount: '8500',
            ratingImage: fourStar,
        },
        {
            id: 14,
            name: "Cricket",
            date: "2024-07-20",
            location: "Chennai",
            image: Kerala2,
            mapLink: "https://maps.app.goo.gl/DhFQ6W9rviNuzGiq6",
            sportField: "Cricket Field",
            address: "Thiruvottiyur High Rd,Kasipuram, Tondiarpet,Chennai",
            sports: ["Tennis", "Volleyball"],
            amount: 8500,
            bookingLink: "Booking.html",
            ratingImage: threeStar
        },
        {
            id: 15,
            name: "Cricket",
            date: "2024-07-20",
            location: "Chennai",
            image: Chennai,
            mapLink: "https://maps.app.goo.gl/Ar4hRGtGUs5mLobQ9",
            sportField: "Cricket Field",
            address: "Moolachathiram road,Krishna Nagar,Madhavaram Milk Colony",
            sports: ["Football", "Cricket"],
            amount: 8500,
            bookingLink: "Booking.html",
            ratingImage: threeStar
        },
        {
            id: 16,
            name: "Cricket",
            date: "2024-07-20",
            location: "Kerala",
            image: Hyderabad,
            mapLink: "https://maps.app.goo.gl/YNedziv2VaXaoyxw6",
            sportField: "Cricket Field",
            address: "Kottakuziyil, Kottayam, Kerala 587906",
            sports: ["Cricket", "Volleyball"],
            amount: 8500,
            bookingLink: "Booking.html",
            ratingImage: threeStar
        },
        {
            id: 17,
            name: "Cricket",
            date: "2024-07-20",
            location: "Kerala",
            image: Banglore1,
            mapLink: "https://maps.app.goo.gl/yvXdUYCSnNxVxPbU9",
            sportField: "Cricket Field",
            address: "78C6+25X,Kadukutty,Kerala 680309",
            sports: ["Football", "Cricket"],
            amount: 8500,
            bookingLink: "Booking.html",
            ratingImage: threeStar
        },
        {
            id: 18,
            name: "Basketball",
            date: "2024-07-20",
            location: "Mumbai",
            image: Delhi3,
            mapLink: "https://maps.app.goo.gl/2HRREx6N2cLQuQY57",
            address: "Atal Path, Yadav Colony, Digha Ghat, Patna, Bihar 800011",
            sports: ["Basketball"],
            amount: 7500,
            ratingImage: threeStar
        }

    ]
    const [filteredProducts, setFilteredProducts] = useState(productsData);


    const applyFilters = () => {
        const filtered = productsData.filter(product => {
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
                            onClick={toggleModal}
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
                                    id="dateFilter"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
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
