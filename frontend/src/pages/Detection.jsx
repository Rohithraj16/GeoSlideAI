import useUpload from "../hooks/useUpload";
import Loader from "../components/Loader";
import { useState } from "react";

const Detection = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);

	const { uploadFile } = useUpload(); // Custom hook for file upload

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setLoading(true);
			uploadFile("/detect", file)
				.then((response) => {
					setData(response.data);
					setLoading(false);
				})
				.catch((err) => {
					console.error("Error during file upload:", err);
					setLoading(false);
				});
		}
	};

	return (
		<div className="flex flex-col h-screen bg-gray-100">
			{/* Navbar */}
			<nav className="p-4 bg-blue-600 text-white">
				<h1 className="text-xl font-bold">Landslide Detection</h1>
			</nav>

			{/* Main Content */}
			<div className="flex-1 p-6">
				<h2 className="text-2xl font-bold mb-4">Landslide Detection</h2>

				<div className="flex flex-col items-start gap-4">
					{/* File input for uploading detection file */}
					<input
						type="file"
						onChange={handleFileChange}
						className="
              block w-full text-sm text-gray-500 
              file:mr-4 file:py-2 file:px-4 
              file:rounded-md file:border-0 
              file:text-sm file:font-semibold 
              file:bg-green-50 file:text-green-700 
              hover:file:bg-green-100
            "
					/>

					{/* Conditional rendering for loading state */}
					{loading ? (
						<Loader />
					) : (
						// Display data if available
						data && (
							<div className="w-full bg-white rounded-md shadow p-4 overflow-auto">
								<pre className="text-sm text-gray-800 whitespace-pre-wrap">
									{JSON.stringify(data, null, 2)}
								</pre>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Detection;
