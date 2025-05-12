import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => (
	<div className="min-h-screen flex flex-col">
		{" "}
		<Navbar />{" "}
		<div className="flex flex-1">
			{" "}
			<Sidebar /> <main className="flex-1 p-4">{children}</main>{" "}
		</div>{" "}
	</div>
);
export default DashboardLayout;
