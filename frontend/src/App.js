import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main";
import { Navbar, Login, ProtectedRoute } from "./comp";
import { postLogins, getUserLogin } from "./redux/loginSlice/loginSlice";
import { checkUser } from "./services/ApiServices/loginService";
import { useEffect, useState } from "react";

function App() {
	const [user, setUser] = useState(false);
	const dispatch = useDispatch();

	const check = useSelector(getUserLogin);

	const handleLogin = (req) => {
		dispatch(postLogins(req));
	};

	console.log(check);
	useEffect(() => {
		if (checkUser()) {
			setUser(true);
		}
	}, [check]);

	return (
		<div>
			<ToastContainer />
			<Navbar />
			{/* Routes */}
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Main />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/login"
					element={
						!user ? <Login handleLogin={handleLogin} /> : <Main />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
