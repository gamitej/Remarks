import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import { Navbar, Login, ProtectedRoute } from "./comp";
import { postLogins, getUserLogin } from "./redux/loginSlice/loginSlice";

function App() {
	const dispatch = useDispatch();
	const isAuth = useSelector(getUserLogin);

	const handleLogin = (req) => {
		dispatch(postLogins(req));
	};

	return (
		<div>
			<ToastContainer />
			<Navbar />
			{/* Routes */}
			<Routes>
				{/* Protected Route */}
				<Route path="/" element={<ProtectedRoute isAuth={isAuth} />}>
					<Route path="/" element={<Main />} />
				</Route>
				<Route
					path="/login"
					element={
						<Login handleLogin={handleLogin} isAuth={isAuth} />
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
