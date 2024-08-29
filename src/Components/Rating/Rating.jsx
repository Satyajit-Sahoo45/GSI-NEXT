import React, { useState, useEffect } from "react";
import {
    collection,
    addDoc,
    query,
    orderBy,
    getDocs,
    serverTimestamp,
} from "firebase/firestore";
import { CiStar } from "react-icons/ci";
import { db } from "../../util/db";
import toast from "react-hot-toast";

const ReviewAndRating = () => {
    const [username, setUsername] = useState("");
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);
    const [showWidget, setShowWidget] = useState(true);

    const submitReview = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "reviews"), {
                username,
                rating,
                review,
                timestamp: serverTimestamp(),
            });
            displayReviews();
            setShowWidget(false);
            toast.success("Review Added 😊")
        } catch (error) {
            toast.error("Error adding review:");
        }
    };

    const displayReviews = async () => {
        const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const reviewsData = [];
        querySnapshot.forEach((doc) => {
            reviewsData.push(doc.data());
        });
        console.log(reviewsData, "reviewsData")
        setReviews(reviewsData);
    };

    useEffect(() => {
        displayReviews();
    }, []);

    console.log(reviews, "reviews")

    return (
        <div className="grid place-items-center bg-yellow-500 text-center py-4">
            <div className="relative w-96 bg-blue-600 p-8 border border-black rounded flex flex-col items-center">
                {showWidget ? (
                    <div className="star-widget">
                        <form onSubmit={submitReview}>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full h-10 mb-5 p-2 text-lg border border-gray-800 bg-gray-200 text-black focus:outline-none"
                            />
                            <div className="flex justify-center space-x-1">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <label key={num} onClick={() => setRating(num)}>
                                        <CiStar
                                            className={`text-4xl cursor-pointer ${rating >= num ? "text-yellow-400" : "text-gray-800"} hover:text-yellow-400 transition`}
                                        />
                                    </label>
                                ))}
                            </div>
                            <section className="w-full text-2xl text-yellow-400 font-semibold my-4 text-center transition">
                                {rating === 1 && "I just hate it 😤"}
                                {rating === 2 && "I don't like it 🙁"}
                                {rating === 3 && "It is awesome 😎"}
                                {rating === 4 && "I just like it 😁"}
                                {rating === 5 && "I just love it 😍"}
                            </section>
                            <div className="textarea mb-5">
                                <textarea
                                    cols="30"
                                    placeholder="Describe your experience.."
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    className="w-full h-24 p-2 text-lg border border-gray-800 bg-gray-800 text-gray-200 focus:border-gray-700"
                                ></textarea>
                            </div>
                            <div className="btn">
                                <button
                                    type="submit"
                                    className="w-full h-12 bg-gray-800 text-gray-400 font-semibold uppercase hover:bg-gray-900 transition"
                                >
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="post">
                        <div className="text text-2xl text-gray-600 font-semibold">
                            Thanks for rating us!
                        </div>
                        <div
                            className="edit absolute right-2 top-2 text-lg text-red-600 font-semibold cursor-pointer hover:underline"
                            onClick={() => setShowWidget(true)}
                        >
                            EDIT
                        </div>
                    </div>
                )}

                <div className="mt-8">
                    <h2 className="text-2xl text-white font-semibold mb-4">Reviews:</h2>
                    <ul className="grid grid-cols-2 gap-6" >
                        {reviews.map((rev, index) => (
                            <li key={index} className="text-left text-white mb-4">
                                <h3 className="text-lg font-semibold">{rev.username}</h3>
                                <p>Rating: {rev.rating}/5</p>
                                <p>{rev.review}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReviewAndRating;
