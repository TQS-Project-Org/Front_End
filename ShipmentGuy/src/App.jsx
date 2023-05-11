import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage/HomePage";
import { AuthContext } from "./hooks/useAuth";

function App() {
	return (
		<Router>
			<Routes>
				{/* Rotas não Autenticadas */}
				<Route path="/" element={<Login />} />
				{/* Rotas Já Autenticadas*/}
				{/* <Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
				</Route> */}
			</Routes>
		</Router>
	);
}

export default App;
