import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// create the useAuth hook with its own context
export const AuthContext = React.createContext();

// export const useAuth = () => {
// 	return useContext(AuthContext);
// };

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// define a função submitLogin
	const submitLogin = (e, userData) => {
		if (e) e.preventDefault();
		setEmail(userData.email);
		setPassword(userData.password);
		console.log("handleSubmitLogin", userData.email, userData.password);

		if (
			userData.email === "teste@teste.com" &&
			userData.password === "123456"
		) {
			console.log("Login success");
			toast.success("Login success");
			setIsLoading(false);
		} else {
			console.log("Login failed");
			toast.error("Login failed");
			setError("Login Failed");
			setIsLoading(false);
		}
	};

	// call the fetchShipments function once on mount
	useEffect(() => {}, []);

	// define the context value with submitLogin as a separate property
	const context = {
		isLoading,
		error,
		isAuthenticated,
		email,
		password,
		submitLogin, // export submitLogin as a separate property
	};

	// pass the value in the provider and return it
	return (
		<AuthContext.Provider
			value={{
				isLoading,
				error,
				isAuthenticated,
				email,
				password,
				submitLogin,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
