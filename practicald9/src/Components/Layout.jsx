import React from "react";
import Header from "./Global/Header";
import Footer from "./Global/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
