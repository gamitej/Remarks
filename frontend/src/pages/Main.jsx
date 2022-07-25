import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { Remarks } from "../comp";
import { getRemarksData } from "../redux/remarkSlice/remarkSlice.js";
import { getRemarks, postRemark, putRemark, delRemark } from "../services";
import { fetchRemarks } from "../redux/remarkSlice/remarkSlice.js";

const Main = () => {
	const dispatch = useDispatch();

	const remarksData = useSelector(getRemarksData);
	console.log(remarksData);
	// ============ State Handles ===============
	//const [remarksData, setRemarksData] = useState([]);

	// ============ Api Calls ===============

	// On page load
	useEffect(() => {
		dispatch(fetchRemarks());
		// eslint-disable-next-line
	}, []);

	const handleGetRemark = () => {
		dispatch(fetchRemarks());
	};

	const handlePostRemark = (req) => {
		const call = async (req) => {
			const res = await postRemark(req);
			toast.success(res.message);
			handleGetRemark();
		};
		call(req);
	};

	const handleUpdateRemark = (id, req) => {
		const call = async (id, req) => {
			const res = await putRemark(id, req);
			toast.success(res.message);
			handleGetRemark();
		};
		call(id, req);
	};

	const handleDelRemark = (id) => {
		const call = async (id) => {
			const res = await delRemark(id);
			toast.success(res.message);
			handleGetRemark();
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
