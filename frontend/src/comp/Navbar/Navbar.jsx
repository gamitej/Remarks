import React from "react";
import { checkUser } from "../../services";
import { logout } from "../../redux/loginSlice/loginSlice.js";
import { useDispatch } from "react-redux";

const Navbar = () => {
	const dispatch = useDispatch();

	//========================== Event Handlers ================================

	const handleLogout = () => {
		window.sessionStorage.removeItem("user");
		dispatch(logout());
	};

	return (
		<>
			<nav className="flex items-center justify-between flex-wrap bg-blue-400 p-6">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<span className="font-semibold text-xl tracking-tight">
						Remarks
					</span>
				</div>
				<div>
					{checkUser() && (
						<button
							onClick={handleLogout}
							className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white  lg:mt-0"
						>
							Logout
						</button>
					)}
					{!checkUser() && (
						<p className="text-white text-lg">User Login</p>
					)}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
