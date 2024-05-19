import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./index.css";
import MainView from "./views/MainView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainView />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
