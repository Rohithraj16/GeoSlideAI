import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	// Check if the current route matches the link path
	const isActive = (path) => location.pathname === path;

	// Navigation items with icons
	const navItems = [
		{
			to: "/",
			name: "Home",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
				</svg>
			),
		},
		{
			to: "/detection",
			name: "Detection",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			to: "/severity",
			name: "Severity",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" />
				</svg>
			),
		},
		{
			to: "/forecast",
			name: "Forecast",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
					<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
				</svg>
			),
		},
		{
			to: "/allocation",
			name: "Allocation",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
				</svg>
			),
		},
	];

	// Toggle sidebar on mobile
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{/* Mobile Toggle Button */}
			<button
				onClick={toggleSidebar}
				className="md:hidden fixed z-20 bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</button>

			{/* Mobile Overlay */}
			{isOpen && (
				<div
					className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
					onClick={toggleSidebar}
				></div>
			)}

			{/* Sidebar */}
			<aside
				className={`
          fixed md:static inset-y-0 left-0 z-40
          w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white
          transform transition-transform duration-300 ease-in-out
          shadow-xl md:shadow-none
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
			>
				{/* Logo and Title */}
				<div className="h-16 flex items-center justify-center border-b border-gray-700">
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-white"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<h1 className="text-xl font-bold text-white">GeoSlide AI</h1>
					</div>
				</div>

				{/* Navigation Menu */}
				<nav className="p-4">
					<ul className="space-y-2">
						{navItems.map((item) => (
							<li key={item.to}>
								<Link
									to={item.to}
									className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg
                    transition-all duration-200 ease-in-out
                    ${
											isActive(item.to)
												? "bg-blue-600 text-white font-medium"
												: "text-gray-300 hover:bg-gray-700 hover:text-blue-400"
										}
                  `}
									onClick={() => setIsOpen(false)}
								>
									<span
										className={`${
											isActive(item.to)
												? "text-white"
												: "text-gray-400 group-hover:text-blue-400"
										}`}
									>
										{item.icon}
									</span>
									<span>{item.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Footer Section */}
				<div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
					<div className="flex items-center justify-between text-sm text-gray-400">
						<span>v1.0.0</span>
						<a href="#" className="hover:text-blue-400 transition-colors">
							Help
						</a>
					</div>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
