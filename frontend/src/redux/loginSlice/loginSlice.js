import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postlogin } from "../../services";
import { checkUser } from "../../services";

export const postLogins = createAsyncThunk("login/postLogins", async (req) => {
	const data = await postlogin(req);
	return data;
});

// check user in sessionStorage
const check = checkUser() || false;

const initialState = {
	isLoggedIn: check,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		logout: (state) => {
			state.isLoggedIn = false;
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
				isLoggedIn: checkUser(),
			};
		},
		[postLogins.rejected]: (state) => {
			console.log("Rejected -> Login");
		},
	},
});

export const { logout } = loginSlice.actions;

export const getUserLogin = (state) => state.login.isLoggedIn;

export default loginSlice.reducer;
