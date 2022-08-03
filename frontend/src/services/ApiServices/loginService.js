import http from "../httpServices/httpServices";
import config from "../config.json";
import { toast } from "react-toastify";

const endpoint = config.apiEndpoint + "/login";

export async function postlogin(req) {
	const { data } = await http.post(endpoint, req);
	if (
		data.msg === "Username not found" ||
		data.msg === "Password Incorrect"
	) {
		toast.error(data.msg, { autoClose: 1000 });
	} else if (data.msg === "Login Successfull") {
		toast.success(data.msg, { autoClose: 1000 });
		window.sessionStorage.setItem("user", req.userId);
	} else {
		toast.error("Something Went Wrong",{autoClose:1200});
	}
	return data.msg;
}

export const checkUser = () => {
	const val = window.sessionStorage.getItem("user");
	return val;
};
