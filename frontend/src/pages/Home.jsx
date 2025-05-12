import Card from "../components/Card"; // Assuming this is the card component you're using.

const Home = () => (
	<div className="flex flex-col h-screen bg-gray-100">
		{/* Dashboard Navbar */}

		{/* Main Content */}
		<div className="flex-1 p-6">
			<h2 className="text-2xl font-bold mb-4">
				Welcome to the Disaster Relief System
			</h2>

			{/* Grid for cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<Card title="Total Cases" value="124" />
				<Card title="Active Alerts" value="5" />
				<Card title="Resources Deployed" value="320" />
			</div>
		</div>
	</div>
);

export default Home;
