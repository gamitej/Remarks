import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main";
import { Navbar, Login, ProtectedRoute } from "./comp";

function App() {
	// eslint-disable-next-line
	const hi = "";
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
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
