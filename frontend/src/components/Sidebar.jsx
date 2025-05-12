import { Link } from "react-router-dom";

const Sidebar = () => (
	<aside className="w-64 p-4 bg-gray-800 text-white hidden md:block">
		{" "}
		<ul className="space-y-4">
			{" "}
			<li>
				<Link to="/">Home</Link>
			</li>{" "}
			<li>
				<Link to="/detection">Detection</Link>
			</li>{" "}
			<li>
				<Link to="/severity">Severity</Link>
			</li>{" "}
			<li>
				<Link to="/forecast">Forecast</Link>
			</li>{" "}
			<li>
				<Link to="/allocation">Allocation</Link>
			</li>{" "}
		</ul>{" "}
	</aside>
);
export default Sidebar;
