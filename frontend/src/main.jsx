// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // TailwindCSS or other global styles

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx"; // Layout with Sidebar + Navbar
import Home from "./pages/Home.jsx";
import Detection from "./pages/Detection.jsx";
import Severity from "./pages/Severity.jsx";
import Forecast from "./pages/Forecast.jsx";
import Allocation from "./pages/Allocation.jsx";

// Define routes using RouterProvider and createBrowserRouter
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			{/* Define the pages that will be rendered inside Layout's <Outlet /> */}
			<Route index element={<Home />} />
			<Route path="detection" element={<Detection />} />
			<Route path="severity" element={<Severity />} />
			<Route path="forecast" element={<Forecast />} />
			<Route path="allocation" element={<Allocation />} />
		</Route>
	)
);

// Render the app with RouterProvider to handle routing
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
