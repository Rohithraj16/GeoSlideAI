// Layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const Layout = () => {
	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content Area */}
			<div className="flex-1 flex flex-col">
				{/* Navbar */}
				<Navbar />

				{/* Routes' Content */}
				<main className="p-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Layout;
