import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage/HomePage";
import { useAuth } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
	const { auth } = useAuth();
	return (
			<Routes>
				{/* Rotas não Autenticadas */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				{/* Rotas Já Autenticadas*/}
				<Route element={<ProtectedRoute redirectPath="/login" isAllowed={!!auth.isAuthenticated} />}>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="home" element={<HomePage />} />
					</Route>
        </Route>
				<Route path="*" element={<p>There's nothing here: 404!</p>} />
			</Routes>
	);
}

export default App;
