import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const isAuth = true;
	if (!isAuth) return <Navigate to="/login" replace />;
	return children;
};

export default ProtectedRoute;
