import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, Login, ProtectedRoute } from "./comp";
import {
	postLogins,
	getUserLogin,
	getLoading,
	// eslint-disable-next-line
	loading,
} from "./redux/loginSlice/loginSlice";

function App() {
	//==================== Redux Call =========================

	const dispatch = useDispatch();
	const isAuth = useSelector(getUserLogin);
	const loading = useSelector(getLoading);

	//==================== Event Handlers =========================

	const handleLogin = (req) => {
		dispatch(postLogins(req));
		dispatch(loading());
	};

	// login props
	const loginProps = {
		isAuth,
		loading,
		handleLogin,
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
				<Route path="/login" element={<Login {...loginProps} />} />
				{/* Page Not Found */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
