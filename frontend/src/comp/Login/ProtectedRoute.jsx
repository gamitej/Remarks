import React from "react";
import { Navigate } from "react-router-dom";
import { checkUser } from "../../services";

const ProtectedRoute = ({ children }) => {
	const isLoggined = checkUser()
	if (!isLoggined) return <Navigate to="/login" replace />;
	return children;
};

export default ProtectedRoute;
