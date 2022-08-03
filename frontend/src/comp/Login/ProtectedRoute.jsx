import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { checkUser } from "../../services";

const ProtectedRoute = () => {
	const isLoggined = checkUser();
	return !isLoggined ? <Navigate to="/login" replace /> : <Outlet />;
};

export default ProtectedRoute;
