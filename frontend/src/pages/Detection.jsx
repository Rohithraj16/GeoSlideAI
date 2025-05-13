import { useState } from "react";
import useUpload from "../hooks/useUpload";
import Loader from "../components/Loader";

const Detection = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [fileName, setFileName] = useState("");
	const [dragActive, setDragActive] = useState(false);
	const { uploadFile } = useUpload();

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		processFile(file);
	};

	const processFile = (file) => {
		if (file) {
			setFileName(file.name);
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

	const handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			processFile(e.dataTransfer.files[0]);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
			<div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
				{/* Page Header */}
				<div className="mb-8">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-3xl font-bold text-gray-900">
								Landslide Detection
							</h1>
							<p className="mt-1 text-sm text-gray-500">
								Upload satellite imagery to detect potential landslide areas.
							</p>
						</div>
						<div className="hidden sm:block">
							<span className="inline-flex rounded-md shadow-sm">
								<button
									type="button"
									className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									View History
								</button>
							</span>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					{/* Upload Section */}
					<div className="p-6 border-b border-gray-200">
						<h2 className="text-lg font-medium text-gray-900 mb-4">
							Upload Imagery
						</h2>

						{/* Drag & Drop Area */}
						<div
							className={`relative border-2 border-dashed rounded-lg p-8 text-center ${
								dragActive
									? "border-blue-500 bg-blue-50"
									: "border-gray-300 hover:border-gray-400"
							}`}
							onDragEnter={handleDrag}
							onDragLeave={handleDrag}
							onDragOver={handleDrag}
							onDrop={handleDrop}
						>
							<div className="space-y-3">
								<svg
									className="mx-auto h-12 w-12 text-gray-400"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 48 48"
									aria-hidden="true"
								>
									<path
										d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>

								<div className="text-sm text-gray-600">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
									>
										<span>Upload a file</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
											onChange={handleFileChange}
											accept="image/*,.tif,.tiff"
										/>
									</label>
									<p className="pl-1 inline">or drag and drop</p>
								</div>
								<p className="text-xs text-gray-500">
									TIFF, GeoTIFF, JPEG, or PNG up to 500MB
								</p>
								{fileName && (
									<div className="mt-2 flex items-center justify-center text-sm text-gray-600">
										<svg
											className="flex-shrink-0 h-5 w-5 text-green-500"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="ml-1">{fileName}</span>
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Results Section */}
					<div className="p-6">
						<h2 className="text-lg font-medium text-gray-900 mb-4">
							Detection Results
						</h2>

						{loading ? (
							<div className="flex flex-col items-center justify-center py-12">
								<Loader />
								<p className="mt-4 text-sm text-gray-500">
									Processing your imagery, please wait...
								</p>
							</div>
						) : data ? (
							<div className="space-y-6">
								{/* Results summary card */}
								<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<svg
												className="h-5 w-5 text-blue-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<div className="ml-3">
											<h3 className="text-sm font-medium text-blue-800">
												Detection Summary
											</h3>
											<div className="mt-2 text-sm text-blue-700">
												<p>
													The analysis has identified potential landslide areas
													in the uploaded imagery. Please review the detailed
													results below.
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* Visualization placeholder */}
								<div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
									<div className="p-4 border-b border-gray-200 bg-gray-50">
										<h3 className="text-md font-medium text-gray-900">
											Detection Visualization
										</h3>
									</div>
									<div className="h-64 bg-gray-100 flex items-center justify-center p-4">
										<p className="text-gray-500 text-center">
											Visualization would appear here
										</p>
									</div>
								</div>

								{/* Data results */}
								<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
									<div className="p-4 border-b border-gray-200 bg-gray-50">
										<h3 className="text-md font-medium text-gray-900">
											Raw Detection Data
										</h3>
									</div>
									<div className="p-4 overflow-auto max-h-96">
										<pre className="text-xs md:text-sm text-gray-800 whitespace-pre-wrap">
											{JSON.stringify(data, null, 2)}
										</pre>
									</div>
								</div>

								{/* Actions */}
								<div className="flex justify-end space-x-3">
									<button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
										Export Data
									</button>
									<button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
										Continue to Analysis
									</button>
								</div>
							</div>
						) : (
							<div className="text-center py-12">
								<svg
									className="mx-auto h-12 w-12 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
									></path>
								</svg>
								<h3 className="mt-2 text-sm font-medium text-gray-900">
									No data available
								</h3>
								<p className="mt-1 text-sm text-gray-500">
									Upload an image to begin detection
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detection;
