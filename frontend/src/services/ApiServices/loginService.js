import http from "../httpServices/httpServices";
import config from "../config.json";

const endpoint = config.apiEndpoint + "/login";

export async function postlogin(req) {
	// eslint-disable-next-line
	const data  = await http.post(endpoint, req);
}

export const checkUser = () => {
	const val = window.sessionStorage.getItem("user");
	return val;
};
