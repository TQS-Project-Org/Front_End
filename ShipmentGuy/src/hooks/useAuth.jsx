import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
// create the useAuth hook with its own context
export const AuthContext = React.createContext();

// export const useAuth = () => {
// 	return useContext(AuthContext);
// };

const initialAuthState = {
	isAuthenticated: false,
	isLoading: false,
	error: "",
	username: "",
	email: "",
	password: "",
	token: ""
}

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialAuthState);
	// utilizado para navegar para outras paginas apos fazer o login
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	// define a função submitLogin
	const submitLogin = (e, userData) => {
		if (e) e.preventDefault();
		let newAuth = { ...auth };
		newAuth.email = userData.email;
		newAuth.password = userData.password;
		console.log("handleSubmitLogin", userData.email, userData.password);

		if (userData.email === "teste@teste.com" && userData.password === "123") {
			console.log("Login success");
			toast.success("Login success");
			newAuth.isAuthenticated = true;
			newAuth.isLoading = false;
			newAuth.error = "";
			setAuth(newAuth);
			navigate(from, { replace: true });
		} else {
			console.log("Login failed");
			toast.error("Login failed");
			setError("Login Failed");
			setIsLoading(false);
			newAuth.isAuthenticated = false;
			newAuth.isLoading = false;
			newAuth.error = "Login Failed";
			setAuth(newAuth);
		}
	};
	
	// DEVE-SE ALTERAR PARA FAZER O REGISTRO
	const submitRegister = (e, userData) => {
		if (e) e.preventDefault();
		let newAuth = { ...auth };
		newAuth.email = userData.email;
		newAuth.password = userData.password;
		console.log("handleSubmitRegister", userData.email, userData.password);

		if (userData.email === "teste@teste.com" && userData.password === "123") {
			console.log("Register success");
			toast.success("Register success");
			newAuth.isAuthenticated = true;
			newAuth.isLoading = false;
			newAuth.error = "";
			setAuth(newAuth);
			navigate(from, { replace: true });
		} else {
			console.log("Register failed");
			toast.error("Register failed");
			setError("Register Failed");
			setIsLoading(false);
			newAuth.isAuthenticated = false;
			newAuth.isLoading = false;
			newAuth.error = "Register Failed";
			setAuth(newAuth);
		}
	};

	// call the fetchShipments function once on mount
	// useEffect(() => {}, []);

	// pass the value in the provider and return it
	return (
		<AuthContext.Provider value={{ auth, submitLogin, submitRegister }}>{children}</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
