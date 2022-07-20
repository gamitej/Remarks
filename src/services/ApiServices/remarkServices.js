import http from "../httpServices/httpServices";
import config from "../config.json";

const endpoint = config.apiEndpoint + "/hi";

export default async function getRemarks() {
	try {
		const { data } = await http.get(endpoint);
		return data;
	} catch (error) {
		return [];
	}
}

export default async function postRemark(req) {
	try {
		const { data } = await http.post(endpoint,req);
		return data;
	} catch (error) {
		return [];
	}
}