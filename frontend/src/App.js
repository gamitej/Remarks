import "./App.css";
import Main from "./pages/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./comp";

function App() {
	// eslint-disable-next-line
	const hi = "";
	return (
		<div>
			<ToastContainer />
			<Navbar />
			<Main />
		</div>
	);
}

export default App;
