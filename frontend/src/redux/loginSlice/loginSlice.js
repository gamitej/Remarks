import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postlogin } from "../../services";

export const postLogins = createAsyncThunk("login/postLogins", async (req) => {
	const data = await postlogin(req);
	return data;
});

const initialState = {
	isLoggined: false,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	extraReducers: {
		// post
		[postLogins.pending]: (state) => {
			console.log("Pending -> Login");
		},
		[postLogins.fulfilled]: (state, { payload }) => {
			console.log("Success -> Login");
			return { ...state, isLoggined: true };
		},
		[postLogins.rejected]: (state) => {
			console.log("Rejected -> Login");
		},
	},
});

export const getUserLogin = (state) => state.login.isLoggined;

export default loginSlice.reducer;
