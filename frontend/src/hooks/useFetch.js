import { useEffect } from "react";
import axios from "../services/api";
//import { useGlobalContext } from "../context/GlobalContext";

const useFetch = (endpoint) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await axios.get(endpoint); // API call
				setData(res.data); // Update global data
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false); // Stop loading indicator
			}
		};

		fetchData();
	}, [endpoint, setLoading, setData]);
};

export default useFetch;
