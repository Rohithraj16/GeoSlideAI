import Card from "../components/Card";

const Home = () => (
	<div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
		{/* Main Content */}
		<div className="flex-1 px-4 py-6 md:px-8 lg:px-12">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
					Welcome to the Disaster Relief System
				</h2>
				<p className="text-gray-600 mb-6">
					Monitor and manage disaster response operations
				</p>

				{/* Overview Stats */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
					<Card
						title="Total Cases"
						value="124"
						icon="chart-bar"
						className="bg-white border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow"
					/>
					<Card
						title="Active Alerts"
						value="5"
						icon="bell"
						className="bg-white border-l-4 border-red-500 shadow-md hover:shadow-lg transition-shadow"
					/>
					<Card
						title="Resources Deployed"
						value="320"
						icon="truck"
						className="bg-white border-l-4 border-green-500 shadow-md hover:shadow-lg transition-shadow"
					/>
				</div>

				{/* Quick Access Section */}
				<h3 className="text-xl font-semibold mb-4 text-gray-700">
					Quick Access
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<div className="bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors cursor-pointer">
						<h4 className="font-bold mb-1">Detection</h4>
						<p className="text-sm opacity-90">Monitor incoming alerts</p>
					</div>
					<div className="bg-orange-500 text-white p-4 rounded-lg shadow-md hover:bg-orange-600 transition-colors cursor-pointer">
						<h4 className="font-bold mb-1">Severity</h4>
						<p className="text-sm opacity-90">Assess impact levels</p>
					</div>
					<div className="bg-purple-600 text-white p-4 rounded-lg shadow-md hover:bg-purple-700 transition-colors cursor-pointer">
						<h4 className="font-bold mb-1">Forecast</h4>
						<p className="text-sm opacity-90">Predictive analysis</p>
					</div>
					<div className="bg-green-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition-colors cursor-pointer">
						<h4 className="font-bold mb-1">Allocation</h4>
						<p className="text-sm opacity-90">Resource management</p>
					</div>
				</div>

				{/* Recent Activity Section */}
				<div className="mt-8">
					<h3 className="text-xl font-semibold mb-4 text-gray-700">
						Recent Activity
					</h3>
					<div className="bg-white rounded-lg shadow">
						<div className="p-4 border-b border-gray-200">
							<div className="flex justify-between items-center">
								<div>
									<p className="font-medium text-gray-800">
										Alert: Flooding in Coastal Region
									</p>
									<p className="text-sm text-gray-600">
										Resources deployed: Emergency response team
									</p>
								</div>
								<span className="text-sm text-gray-500">3 hours ago</span>
							</div>
						</div>
						<div className="p-4 border-b border-gray-200">
							<div className="flex justify-between items-center">
								<div>
									<p className="font-medium text-gray-800">
										Status Update: Wildfire Containment
									</p>
									<p className="text-sm text-gray-600">
										Progress: 65% contained
									</p>
								</div>
								<span className="text-sm text-gray-500">Yesterday</span>
							</div>
						</div>
						<div className="p-4">
							<div className="flex justify-between items-center">
								<div>
									<p className="font-medium text-gray-800">
										Resource Allocation Updated
									</p>
									<p className="text-sm text-gray-600">
										Medical supplies redirected to southern district
									</p>
								</div>
								<span className="text-sm text-gray-500">2 days ago</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Footer */}
		<footer className="bg-gray-800 text-gray-300 py-4 px-6 text-center text-sm">
			<p>© 2025 Disaster Relief System | All Rights Reserved</p>
		</footer>
	</div>
);

export default Home;
