import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postlogin } from "../../services";
import { checkUser } from "../../services";
import { toast } from "react-toastify";

export const postLogins = createAsyncThunk("login/postLogins", async (req) => {
	try {
		const data  = await postlogin(req);
		window.sessionStorage.setItem("user", req.userId);
		console.log(data);
		toast.success("Login SuccessFull", { autoClose: 1000 });
		return data;
	} catch (error) {
		if (error.response && error.response.status === 400) {
			const msg = error.response.data.msg;
			toast.error(msg, { autoClose: 1000 });
		}
		return "error";
	}
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
