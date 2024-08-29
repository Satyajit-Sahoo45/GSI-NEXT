import { useRef, useState } from "react";
import { auth } from "../../util/db";
import { createUserWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const navigate = useNavigate();
    const recaptchaRef = useRef(null);

    const validatePasswordComplexity = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!.@#$%^&*()])[A-Za-z\d!.@#$%^&*()]{8,}$/;
        return re.test(password);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (username.length < 6) {
            toast.error('Username must have at least 6 characters');
            return;
        }

        if (!validateEmail(email)) {
            toast.error('Enter Valid Email');
            return;
        }

        if (password.length < 8 || !validatePasswordComplexity(password)) {
            toast.error('Password must have 8 characters and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.');
            return;
        }

        if (phone === '' || phone.length < 12) {
            toast.error('Phone number must have 10 digits + code.');
            return;
        }

        try {
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            updateProfile(user, {
                displayName: username,
                email: email,
                phoneNumber: phone,
                gender: gender,
            })
            setLoading(false);
            toast.success('Signup Successfully ✅');
            navigate("/admin/dashboard");
        } catch (error) {
            console.log(error)
            toast.error(`Error: ${error.message}`);
            setLoading(false);
        }
    };

    const handleSendOtp = async () => {
        if (recaptchaRef.current) {
            recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>'
        }

        const recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {
                size: "invisible",
            }
        );

        try {
            const confirmationResult = await signInWithPhoneNumber(
                auth,
                phone,
                recaptchaVerifier
            );

            setConfirmationResult(confirmationResult);
            toast.success("OTP sent successfully.");
        } catch (err) {
            console.log(err);

            if (err.code === "auth/invalid-phone-number") {
                toast.error("Invalid phone number. Please check the number.");
            } else if (err.code === "auth/too-many-requests") {
                toast.error("Too many requests. Please try again later.");
            } else {
                toast.error("Failed to send OTP. Please try again.");
            }
        }
    };

    const handleVerifyOtp = () => {
        if (otp.length !== 6) {
            toast.error("Please enter a valid OTP");
            return;
        }

        confirmationResult.confirm(otp)
            .then((result) => {
                toast.success("OTP verified successfully");
                setOtpSent(false);
                setOtp('');
            })
            .catch((error) => {
                toast.error(`Invalid OTP: ${error.message}`);
            });
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up for your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleRegister}>
                    {/* Input fields for username, email, password, phone, and gender */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <div className="mt-1">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                        <div className="mt-1">
                            <select
                                id="gender"
                                name="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="" disabled>Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="non-binary">Non-binary</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <div className="mt-1">
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <button type="button" onClick={handleSendOtp} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Send OTP</button>
                        </div>
                    </div>

                    {otpSent && (
                        <div>
                            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
                            <div className="mt-1">
                                <input
                                    id="otp"
                                    name="otp"
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <button type="button" onClick={handleVerifyOtp} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Verify OTP</button>
                            </div>
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {loading ? "Signing Up..." : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>

            <div ref={recaptchaRef}></div>
        </div>
    );
};
