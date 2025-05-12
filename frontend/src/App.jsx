// App.jsx
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content Area */}
			<div className="flex-1 flex flex-col">
				{/* Navbar */}
				<Navbar />

				{/* This is where content from the routes will go */}
			</div>
		</div>
	);
}

export default App;
