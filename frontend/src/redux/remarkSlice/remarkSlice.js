import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRemarks } from "../../services/index";

export const fetchRemarks = createAsyncThunk(
	"remark/fetchRemarks",
	async () => {
		const { data } = await getRemarks();
		return data.data;
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
			return { ...state, remarks: payload };
		},
		[fetchRemarks.rejected]: (state) => {
			console.log("Rejected -> Fetch Remarks");
		},
	},
});

export const getRemarksData = (state) => state.remark.remarks;

export default remarkSlice.reducer;
