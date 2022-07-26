import React from "react";

const Navbar = () => {
	return (
		<>
			<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
				<div class="flex items-center flex-shrink-0 text-white mr-6">
					<span class="font-semibold text-xl tracking-tight">
						Remarks
					</span>
				</div>
				{/* Burger Menu */}
				<div class="block lg:hidden">
					<button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
						<svg
							class="fill-current h-3 w-3"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden">
					<div className="text-sm lg:flex-grow">
						<a
							href="#responsive-header"
							className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
						>
							Docs
						</a>
						<a
							href="#responsive-header"
							className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
						>
							Examples
						</a>
						<a
							href="#responsive-header"
							className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
						>
							Blog
						</a>
					</div>
					<div>
						<button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
							Login
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
