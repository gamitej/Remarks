import React, { useState, useEffect } from "react";
import { Remarks } from "../comp";
import { getRemarks } from "../services";

const Main = () => {
	const [remarksData, setRemarksData] = useState([]);

	useEffect(() => {
		const res = getRemarks();
		setRemarksData(res);
	}, []);
	return (
		<div className="flex flex-col justify-center items-center h-[90vh]">
			<Remarks remarksData={remarksData} />
		</div>
	);
};

export default Main;
