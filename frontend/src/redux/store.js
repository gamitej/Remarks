import { configureStore } from "@reduxjs/toolkit";
import remarkSlice from "./remarkSlice/remarkSlice";

export const store = configureStore({
	reducer: {
		remark: remarkSlice,
	},
});
