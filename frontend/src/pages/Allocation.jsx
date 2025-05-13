import { useState } from "react";
import useUpload from "../hooks/useUpload";
import Loader from "../components/Loader";

const Allocation = () => {
	const { uploadFile } = useUpload();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState("");

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (!file) return;

		// Optional: Basic validation
		const maxSizeMB = 500;
		if (file.size > maxSizeMB * 1024 * 1024) {
			setError("File too large. Max size allowed: 500MB.");
			return;
		}

		setError("");
		setLoading(true);
		uploadFile("/allocate", file)
			.then((response) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error("Upload error:", err);
				setError("Upload failed. Please try again.");
				setLoading(false);
			});
	};

	const resetUpload = () => {
		setData(null);
		setError("");
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
			{/* Header */}
			<header className="bg-blue-700 text-white p-4 shadow">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-2xl font-bold">Resource Allocation</h1>
				</div>
			</header>

			{/* Main Content */}
			<main className="flex-1 p-6 max-w-7xl mx-auto w-full">
				<section className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						Upload Allocation Data
					</h2>

					<div className="flex flex-col gap-4">
						<input
							type="file"
							onChange={handleFileChange}
							accept=".csv,.json"
							className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
								file:rounded-md file:border-0 file:text-sm file:font-semibold
								file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
						/>

						{error && <p className="text-red-600 text-sm">{error}</p>}

						{loading && (
							<div className="flex items-center gap-2">
								<Loader />
								<span className="text-sm text-gray-600">
									Uploading and processing...
								</span>
							</div>
						)}

						{data && !loading && (
							<>
								<div className="bg-gray-50 border border-gray-200 p-4 rounded-md overflow-auto max-h-[400px]">
									<h3 className="text-md font-medium mb-2 text-gray-700">
										Allocation Results
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

export default Allocation;
