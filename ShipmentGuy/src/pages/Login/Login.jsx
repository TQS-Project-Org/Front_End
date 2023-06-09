import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import { useAuth } from "../../hooks/useAuth";
import logoPng from "../../assets/AmanacuShipments.png";

export default function Login() {
	const { auth, submitLogin } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmitLogin = (e) => {
		e.preventDefault();
		console.log("handleSubmitLogin", email, password);
		submitLogin(e, { email, password });
	};

	return (
		<div className={styles.login_page}>
			<div className={styles.login_logo_wrapper}>
				{logoPng ? <img src={logoPng} alt={logoPng}/> : "failed to load this image"}
			</div>
			<Form
				className={styles.login_wrapper}
				onSubmit={(e) => handleSubmitLogin(e)}
			>
				<div className={styles.login_upper_section}>Login</div>
				<Form.Group
					className={styles.login_form_field}
					controlId="formBasicEmail"
				>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
						placeholder="Enter email"
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group
					className={styles.login_form_field}
					controlId="formBasicPassword"
				>
					<Form.Label>Password</Form.Label>
					<Form.Control
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Form.Group className={styles.login_form_field_bottom_section}>
					<Button
						className={styles.login_form_login_button}
						variant="secondary"
						type="submit"
					>
						Login
					</Button>
				</Form.Group>
				{auth.error && (
					<Form.Group >
						<Form.Text className="text-muted">
							{auth.error}
						</Form.Text>
					</Form.Group>
				)}
			</Form>
		</div>
	);
}
