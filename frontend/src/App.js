import "./App.css";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main";
import { Navbar, Login, ProtectedRoute } from "./comp";
import { postLogins } from "./redux/loginSlice/loginSlice";


function App() {
	const dispatch = useDispatch();


	const handleLogin = (req) => {
		dispatch(postLogins(req));
	};



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
						<Login handleLogin={handleLogin} /> 
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
