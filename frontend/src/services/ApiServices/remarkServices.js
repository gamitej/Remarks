import http from "../httpServices/httpServices";
import config from "../config.json";
import { toast } from "react-toastify";

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
		toast.success("Remark Added Successfull!!!");
		return data;
	} catch (error) {
		return [];
	}
}

export async function putRemark(id, req) {
	try {
		const { data } = await http.put(`${endpoint}/${id}`, req);
		toast.success("Remark Updated Successfull!!!");
		return data;
	} catch (error) {
		return [];
	}
}

export async function delRemark(id) {
	try {
		const { data } = await http.delete(`${endpoint}/${id}`);
		toast.success("Remark Deleted Successfull!!!");
		return data;
	} catch (error) {
		return [];
	}
}
