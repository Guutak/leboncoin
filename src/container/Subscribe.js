import React, { useState } from "react";
import { AccessTime, Notifications, RemoveRedEye } from "@material-ui/icons";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { getThemeProps } from "@material-ui/styles";

const Subscribe = () => {
	const history = useHistory();

	const [username, setUsername] = useState("");
	const [mail, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [cgv, setCGV] = useState(false);
	//console.log("cgv is", cgv);

	let isEnabled = false;

	if (
		username !== "" &&
		mail !== "" &&
		password !== "" &&
		confirmPassword !== "" &&
		cgv === true
	) {
		isEnabled = true;
	}

	//console.log(isEnabled);

	const handleSignup = async () => {
		if (isEnabled === true) {
			const response = await axios.post(
				"https://leboncoin-api.herokuapp.com/api/user/sign_up",
				{
					username: username,
					email: mail,
					password: password
				}
			);

			Cookies.set("token", response.data.token);
			history.push("/");
		} else {
			alert("Le formulaire n'est pas valide");
		}
	};

	return (
		<div className="sub-container">
			<div className="sub-wrapper">
				<div className="sub-item-left">
					<h2>Pourquoi créer un compte</h2>

					<div className="sub-item-info">
						<AccessTime />
						<div className="sub-item--details">
							<h4>Gagnez du temps</h4>
							<p>
								Publiez vos annonces rapidement, avec vos
								informations pré-remplies chaque fois que vous
								souhaitez déposer une nouvelle annonce.
							</p>
						</div>
					</div>

					<div className="sub-item-info">
						<Notifications />
						<div className="sub-item--details">
							<h4>Soyer les premiers informés</h4>
							<p>
								Créez des alertes Immo ou Emploi et ne manquez
								jamais l’annonce qui vous intéresse.
							</p>
						</div>
					</div>

					<div className="sub-item-info">
						<RemoveRedEye />
						<div className="sub-item--details">
							<h4>Visibilité</h4>
							<p>
								Suivez les statistiques de vos annonces (nombre
								de fois où votre annonce a été vue, nombre de
								contacts reçus).
							</p>
						</div>
					</div>
				</div>

				<div className="sub-item-right">
					<h2>Créez un compte</h2>
					<span></span>

					<form
						onSubmit={async e => {
							e.preventDefault();
						}}
					>
						<div className="form-sub form-pseudo">
							<label>Pseudo*</label>
							<input
								type="text"
								onChange={e => {
									setUsername(e.target.value);
								}}
								required
							/>
						</div>

						<div className="form-sub form-email">
							<label>Adresse email*</label>
							<input
								type="email"
								onChange={e => {
									setEmail(e.target.value);
								}}
								required
							/>
						</div>

						<div className="form-pass-container">
							<div className="form-sub form-pass">
								<label>Mot de passe*</label>
								<input
									type="password"
									onChange={e => {
										setPassword(e.target.value);
									}}
									required
								/>
							</div>

							<div className="form-sub form-pass">
								<label>Confirmer le mot de passe*</label>
								<input
									type="password"
									onChange={e => {
										setConfirmPassword(e.target.value);
									}}
									required
								/>
							</div>
						</div>

						<div className="sub-checking">
							<input
								type="checkbox"
								name="scales"
								checked={cgv}
								onChange={e => {
									setCGV(e.target.checked);
								}}
								required
							/>
							<label htmlFor="scales">
								« J’accepte les Conditions Générales de Vente et
								 les Conditions Générales d’Utilisation »
							</label>
						</div>

						<div className="sub-submit">
							<input
								type="submit"
								value="Créer mon Compte Personnel"
								className={isEnabled ? "enabled" : "disabled"}
								onClick={handleSignup}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
