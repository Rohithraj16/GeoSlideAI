import axios from "../services/api"; // Axios instance
import { useState } from "react";
//import { useGlobalContext } from "../context/GlobalContext";

const useUpload = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const uploadFile = async (endpoint, file) => {
		const formData = new FormData();
		formData.append("file", file);

		setLoading(true);
		try {
			const res = await axios.post(endpoint, formData); // API call
			setData(res.data); // Update data in global context
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false); // Stop loading after response
		}
	};

	return { uploadFile };
};

export default useUpload;
