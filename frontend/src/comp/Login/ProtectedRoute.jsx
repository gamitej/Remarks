import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuth }) => {
	const isLoggined = isAuth;
	return !isLoggined ? <Navigate to="/login" replace /> : <Outlet />;
};

export default ProtectedRoute;
