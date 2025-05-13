import { useState } from "react";
import useUpload from "../hooks/useUpload";
import Loader from "../components/Loader";

const Forecast = () => {
	const { uploadFile } = useUpload();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState("");

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (!file) return;

		// Optional validation
		const maxSizeMB = 500;
		const allowedTypes = ["application/json", "text/csv"];
		if (!allowedTypes.includes(file.type)) {
			setError("Invalid file type. Please upload a CSV or JSON file.");
			return;
		}
		if (file.size > maxSizeMB * 1024 * 1024) {
			setError("File size exceeds 500MB limit.");
			return;
		}

		setError("");
		setLoading(true);
		uploadFile("/forecast", file)
			.then((response) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error("Error during file upload:", err);
				setError("Upload failed. Please try again.");
				setLoading(false);
			});
	};

	const resetUpload = () => {
		setData(null);
		setError("");
	};

	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
			{/* Header */}
			<header className="bg-blue-700 text-white shadow p-4">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-2xl font-semibold">Disaster Forecasting</h1>
				</div>
			</header>

			{/* Main */}
			<main className="flex-1 p-6 max-w-7xl mx-auto w-full">
				<section className="bg-white p-6 rounded-lg shadow">
					<h2 className="text-xl font-bold text-gray-800 mb-4">
						Upload Forecast Data
					</h2>

					<div className="flex flex-col gap-4">
						<input
							type="file"
							onChange={handleFileChange}
							accept=".json,.csv"
							className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
								file:rounded-md file:border-0 file:text-sm file:font-semibold
								file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
						/>

						{error && <div className="text-red-600 text-sm">{error}</div>}

						{loading && (
							<div className="flex flex-col items-center gap-2">
								<Loader />
								<p className="text-sm text-gray-500">
									Processing forecast data...
								</p>
							</div>
						)}

						{data && !loading && (
							<>
								<div className="bg-gray-50 border border-gray-200 p-4 rounded-md overflow-auto max-h-[400px]">
									<h3 className="text-md font-semibold mb-2 text-gray-700">
										Forecast Results
									</h3>
									<pre className="text-sm text-gray-800 whitespace-pre-wrap">
										{JSON.stringify(data, null, 2)}
									</pre>
								</div>
								<div className="flex justify-end">
									<button
										onClick={resetUpload}
										className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
									>
										Upload Another File
									</button>
								</div>
							</>
						)}

						{!data && !loading && !error && (
							<p className="text-sm text-gray-500">
								Accepted formats: <code>.csv</code>, <code>.json</code> — Max
								size: 500MB
							</p>
						)}
					</div>
				</section>
			</main>
		</div>
	);
};

export default Forecast;
