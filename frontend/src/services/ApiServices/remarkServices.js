import http from "../httpServices/httpServices";
import config from "../config.json";

const endpoint = config.apiEndpoint + "/remarks";

export async function getRemarks() {
	try {
		const { data } = await http.get(endpoint);
		return data.data;
	} catch (error) {
		return [];
	}
}

export async function postRemark(req) {
	try {
		const { data } = await http.post(endpoint, req);
		return data;
	} catch (error) {
		return [];
	}
}

export async function putRemark(id, req) {
	try {
		const { data } = await http.put(`${endpoint}/${id}`, req);
		return data;
	} catch (error) {
		return [];
	}
}

export async function delRemark(id) {
	try {
		const { data } = await http.delete(`${endpoint}/${id}`);
		return data;
	} catch (error) {
		return [];
	}
}
