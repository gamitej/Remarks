import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postlogin } from "../../services";
import { checkUser } from "../../services";
import { toast } from "react-toastify";

export const postLogins = createAsyncThunk("login/postLogins", async (req) => {
	try {
		const data = await postlogin(req);
		window.sessionStorage.setItem("user", req.userId);
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
	loading: false,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		logout: (state) => {
			state.isLoggedIn = false;
		},
		loading: (state) => {
			state.loading = true;
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
				loading: false,
			};
		},
		[postLogins.rejected]: (state) => {
			console.log("Rejected -> Login");
		},
	},
});

export const { logout, loading } = loginSlice.actions;

export const getUserLogin = (state) => state.login.isLoggedIn;
export const getLoading = (state) => state.login.loading;

export default loginSlice.reducer;
