import { useNavigate } from "react-router-dom";
import SessionProvider from "../../Provider/SessionProvider";
import { signOut } from 'firebase/auth';
import { auth } from "../../util/db";

export const Profile = () => {

    const { currentUser } = SessionProvider();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div className="p-16">
            <div className="p-8 bg-white shadow mt-24 flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-1">
                    <div className="relative">
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            {
                                currentUser?.photoURL ? <img src={currentUser?.photoURL} alt="User Avatar" /> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                    </svg>
                            }
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col">
                        <span className="font-light text-gray-500">{currentUser?.username}</span>
                        <span className="font-light text-gray-500">{currentUser?.phone}</span>
                        <span className="font-light text-gray-500">{currentUser?.email}</span>
                        <button
                            onClick={handleLogout}
                            className="mt-2 py-2 px-6 bg-red-500 hover:bg-red-600 text-sm text-white font-bold rounded-xl transition duration-200"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}