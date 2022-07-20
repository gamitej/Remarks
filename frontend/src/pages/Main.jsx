import React, { useState, useEffect } from "react";
import { Remarks } from "../comp";
import { getRemarks } from "../services";

const Main = () => {
	// ============ State Handles ===============
	const [remarksData, setRemarksData] = useState([]);

	// ============ Api Call ===============
	useEffect(() => {
		const call = async () => {
			const res = await getRemarks();
			setRemarksData(res);
		};
		call();
	}, []);
	return (
		<div className="flex flex-col justify-center items-center h-[90vh]">
			<Remarks remarksData={remarksData} />
		</div>
	);
};

export default Main;
