import React, { useState, useEffect } from "react";
import { Remarks } from "../comp";
import { getRemarks, postRemark } from "../services";

const Main = () => {
	// ============ State Handles ===============
	const [remarksData, setRemarksData] = useState([]);

	// ============ Api Calls ===============
	useEffect(() => {
		const call = async () => {
			const res = await getRemarks();
			setRemarksData(res);
		};
		call();
	}, []);

	const handlePostRemark = (req) => {
		const call = async (req) => {
			const res = await postRemark(req);
			console.log(res);
		};
		call(req);
	};

	return (
		<div className="flex flex-col justify-center items-center h-[90vh]">
			<Remarks
				remarksData={remarksData}
				handlePostRemark={handlePostRemark}
			/>
		</div>
	);
};

export default Main;
