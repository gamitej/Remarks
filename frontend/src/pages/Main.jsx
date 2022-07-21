import React, { useState, useEffect } from "react";
import { Remarks } from "../comp";
import { getRemarks, postRemark, putRemark, delRemark } from "../services";

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

	const handleUpdateRemark = (id, req) => {
		const call = async (id, req) => {
			const res = await putRemark(id, req);
			console.log(res);
		};
		call(id, req);
	};

	const handleDelRemark = (id) => {
		const call = async (id) => {
			const res = await delRemark(id);
			console.log(res);
		};
		call(id);
	};

	return (
		<div className="flex flex-col justify-center items-center h-[90vh]">
			<Remarks
				remarksData={remarksData}
				handlePostRemark={handlePostRemark}
				handleUpdateRemark={handleUpdateRemark}
				handleDelRemark={handleDelRemark}
			/>
		</div>
	);
};

export default Main;
