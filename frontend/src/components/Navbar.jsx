import { useState } from "react";
import { Menu, X, Bell, User } from "lucide-react";

const Navbar = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const login = () => {
		setLoading(true);
		// Simulate API call
		setTimeout(() => {
			setUser({ name: "Prathviraj" });
			setLoading(false);
		}, 800);
	};

	const toggleMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<header className="bg-gradient-to-r from-indigo-700 to-blue-800 shadow-md">
			<div className="max-w-7xl mx-auto">
				<nav className="px-4 py-3 md:px-6 lg:px-8">
					{/* Top Navigation Bar */}
					<div className="flex justify-between items-center">
						{/* Logo and Brand */}
						<div className="flex items-center space-x-2">
							<div className="h-8 w-8 bg-white rounded-md flex items-center justify-center">
								<svg
									className="h-6 w-6 text-indigo-700"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12z" />
								</svg>
							</div>
							<span className="text-xl font-bold text-white tracking-tight">
								Disaster Relief
							</span>
						</div>

						{/* Desktop Navigation Links - Hidden on mobile */}
						<div className="hidden md:flex md:items-center md:space-x-6">
							<a
								href="#"
								className="text-indigo-100 hover:text-white transition-colors px-2 py-1"
							>
								Dashboard
							</a>
							<a
								href="#"
								className="text-indigo-100 hover:text-white transition-colors px-2 py-1"
							>
								Reports
							</a>
							<a
								href="#"
								className="text-indigo-100 hover:text-white transition-colors px-2 py-1"
							>
								Settings
							</a>
						</div>

						{/* Right Side User Menu */}
						<div className="flex items-center space-x-3">
							{/* Status Indicator */}
							<div className="hidden md:flex items-center px-3 py-1 rounded-full bg-indigo-800 text-xs text-indigo-100">
								<span
									className={`h-2 w-2 rounded-full mr-2 ${
										loading ? "bg-yellow-400" : "bg-green-400"
									}`}
								></span>
								<span>{loading ? "Processing..." : "Ready"}</span>
							</div>

							{/* Notification Bell */}
							<button className="p-1 rounded-full text-indigo-100 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-white">
								<Bell size={20} />
							</button>

							{/* User or Login Button */}
							{user ? (
								<div className="flex items-center space-x-2">
									<div className="hidden md:block text-sm font-medium text-white">
										{user.name}
									</div>
									<div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
										<User size={16} className="text-white" />
									</div>
								</div>
							) : (
								<button
									onClick={login}
									disabled={loading}
									className="bg-white text-indigo-700 px-3 py-1.5 text-sm font-medium rounded-md hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 transition-colors"
								>
									{loading ? "Signing in..." : "Sign In"}
								</button>
							)}

							{/* Mobile menu button */}
							<button
								onClick={toggleMenu}
								className="md:hidden rounded-md p-1 text-indigo-100 hover:text-white hover:bg-indigo-600 focus:outline-none"
							>
								{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>

					{/* Mobile Navigation Menu */}
					{mobileMenuOpen && (
						<div className="md:hidden mt-3 pt-3 pb-2 border-t border-indigo-600">
							<div className="space-y-2">
								<a
									href="#"
									className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-600 rounded-md"
								>
									Dashboard
								</a>
								<a
									href="#"
									className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-600 rounded-md"
								>
									Reports
								</a>
								<a
									href="#"
									className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-600 rounded-md"
								>
									Settings
								</a>

								{/* Status indicator for mobile */}
								<div className="px-3 py-2 text-sm text-indigo-100">
									Status: {loading ? "Processing..." : "Ready"}
								</div>
							</div>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
