import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
   
    if (loading) {
        return "Loading...";
    }
    if (user) {
        return children
    }
    else{
        return <Navigate to="/login" state={location} replace></Navigate>;
    }
};

export default PrivateRoute;