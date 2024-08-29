import React from 'react';
import SessionProvider from './SessionProvider';
import { Navigate } from 'react-router-dom';

const AuthProvider = ({ children }) => {
    const { currentUser, loading } = SessionProvider();

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>;
    }

    return currentUser ? children : <Navigate to="/login" />;
};

export default AuthProvider;
