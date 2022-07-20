import React, { useState, useEffect } from "react";
import { Remarks } from "../comp";
import { getRemarks } from "../services";

const Main = () => {
	const [remarksData, setRemarksData] = useState([]);

	useEffect(() => {
		
	}, []);
	return (
		<div className="flex flex-col justify-center items-center h-[90vh]">
			<Remarks />
		</div>
	);
};

export default Main;
