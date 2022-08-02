import React, { useState } from "react";
import Joi from "joi";
import { Alert } from "@mui/material";

const Login = () => {
	const [form, setForm] = useState({ userId: "", password: "" });

	const [error, setError] = useState({
		message: undefined,
		show: false,
		label: "",
	});

	const schema = Joi.object({
		userId: Joi.string().required().min(8).label("User Id"),
		password: Joi.string().required().min(8).label("Password"),
	});

	//========================== Event Handlers Start ================================

	const handleChange = (e) => {
		const name = e.target.name;
		setForm({ ...form, [name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(form);
		const { error } = schema.validate(form, { allowUnknown: true });
		if (error) {
			return setError({
				message: error.message,
				show: true,
				label: error.details[0].context.label,
			});
		}
		setForm({ userId: "", password: "" });
	};

	const handleAlertChange = () => {
		setError({ message: error.message, show: false });
	};

	return (
		<div className="w-full flex justify-center">
			<section className="h-[80vh] w-[80%]">
				<div className="px-6 h-full text-gray-800">
					<div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
						<div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
							<img
								src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
								className="w-full"
								alt=""
							/>
						</div>
						<div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
							<form onSubmit={handleSubmit}>
								{/* Username */}
								<div className="mb-6">
									<input
										type="text"
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										name="userId"
										placeholder="Email address"
										value={form.userId}
										onChange={handleChange}
									/>
									{error.message &&
										error.show &&
										error.label === "User Id" && (
											<Alert
												onClose={handleAlertChange}
												severity="error"
											>
												{error.message}
											</Alert>
										)}
								</div>
								{/* Password */}
								<div className="mb-6">
									<input
										type="password"
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										name="password"
										placeholder="Password"
										value={form.password}
										onChange={handleChange}
									/>
									{error.message &&
										error.show &&
										error.label === "Password" && (
											<Alert
												onClose={handleAlertChange}
												severity="error"
											>
												{error.message}
											</Alert>
										)}
								</div>

								<div className="flex justify-between items-center mb-6">
									<div className="form-group form-check">
										<input
											type="checkbox"
											className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
											id="exampleCheck2"
										/>
										<label className="form-check-label inline-block text-gray-800">
											Remember me
										</label>
									</div>
									<a href="#!" className="text-gray-800">
										Forgot password?
									</a>
								</div>

								<div className="text-center lg:text-left">
									<button
										type="submit"
										className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
									>
										Login
									</button>
									<p className="text-sm font-semibold mt-2 pt-1 mb-0">
										Don't have an account?
										<a
											href="#!"
											className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
										>
											Register
										</a>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;
