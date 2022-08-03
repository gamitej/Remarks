import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postlogin } from "../../services";
import { checkUser } from "../../services";

export const postLogins = createAsyncThunk("login/postLogins", async (req) => {
	const data = await postlogin(req);
	return data;
});

const check = checkUser() || false;

const initialState = {
	isLoggined: check,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		logout: (state) => {
			state.isLoggined = false;
		},
	},
	extraReducers: {
		// post
		[postLogins.pending]: (state) => {
			console.log("Pending -> Login");
		},
		[postLogins.fulfilled]: (state, { payload }) => {
			console.log("Success -> Login");
			return {
				...state,
				isLoggined: checkUser(),
			};
		},
		[postLogins.rejected]: (state) => {
			console.log("Rejected -> Login");
		},
	},
});

export const { logout } = loginSlice.actions;

export const getUserLogin = (state) => state.login.isLoggined;

export default loginSlice.reducer;
