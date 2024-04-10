// routes.js
import React from 'react';
// import { Route, Routes } from 'react-router-dom';'
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../components/login/Login';
import Dashboard from '../components/dashboard/Dashboard.tsx'

export function PrivateRoute({ children }) {
    const auth = localStorage.getItem('authToken');
    if (!auth) {
        return <Navigate to='/' />
    }
    return children;
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
    );
};

export default AppRoutes;
