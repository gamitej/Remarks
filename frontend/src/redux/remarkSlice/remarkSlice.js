import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRemarks } from "../../services";

export const fetchRemarks = createAsyncThunk(
	"remark/fetchRemarks",
	async () => {
		const data = await getRemarks();
		console.log(data);
		return data;
	}
);

const initialState = {
	remarks: [],
};

const remarkSlice = createSlice({
	name: "remark",
	initialState,
	reducers: {
		handleGetRemark: (state, { payload }) => {
			state.remarks = payload;
		},
	},
	extraReducers: {
		[fetchRemarks.pending]: (state) => {
			console.log("Pending -> Fetch Remarks");
		},
		[fetchRemarks.fulfilled]: (state, { payload }) => {
			console.log("Success -> Fetch Remarks");
			console.log(payload);
			return { ...state, remarks: payload };
		},
		[fetchRemarks.rejected]: (state) => {
			console.log("Rejected -> Fetch Remarks");
		},
	},
});

export const getRemarksData = (state) => state.remark.remarks;

export default remarkSlice.reducer;
