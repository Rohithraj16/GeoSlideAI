import { useState } from "react";
const Navbar = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);

	const login = () => {
		setUser({ name: "Prathviraj" });
		setLoading(false);
	};

	return (
		<nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
			<h1>Welcome {user ? user.name : "Guest"}</h1>
			<button
				onClick={login}
				className="bg-white text-blue-600 px-4 py-2 rounded-md"
			>
				Login
			</button>
			<div>
				{loading ? "Loading..." : "Ready"}
				{data && <p>Data: {data}</p>}
			</div>
		</nav>
	);
};

export default Navbar;
