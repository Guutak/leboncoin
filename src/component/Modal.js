import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const Modal = props => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChangeEmail = e => {
		setEmail(e.target.value);
	};

	const handleChangePassword = e => {
		setPassword(e.target.value);
	};

	let history = useHistory();

	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				"https://leboncoin-api.herokuapp.com/api/user/log_in",
				{
					email: email,
					password: password
				}
			);

			if (response.data.token) {
				// console.log("REDIRECT");
				//console.log(response.data.token);
				// Cookies.set("token", response.data.token);
				props.onConnect(response.data.token);
				history.push("/");
			}
		} catch (error) {
			console.log("ERROR");
		}
	};

	return (
		<div className="modal-container">
			<div className="modal-wrapper">
				<div className="modal-item">
					<h2>Connexion</h2>
					<span></span>

					<form
						onSubmit={async e => {
							e.preventDefault();
							props.setShowModal(false);
						}}
					>
						<div className="form-login form-email">
							<label htmlFor="email">Adresse email</label>
							<input type="email" onChange={handleChangeEmail} />
						</div>

						<div className="form-login form-pass">
							<label htmlFor="mdp">Mot de passe</label>
							<input
								type="password"
								onChange={handleChangePassword}
							/>
						</div>

						<div className="form-login form-submit">
							<input
								type="submit"
								value="Se connecter"
								onClick={handleSubmit}
							/>
						</div>
					</form>
				</div>
				<div className="new-account">
					<h4>Vous n'avez pas de compte ?</h4>

					<Link to={"/SignUp"}>
						<input
							type="submit"
							value="Créer un compte"
							onClick={() => {
								props.setShowModal(false);
							}}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Modal;
