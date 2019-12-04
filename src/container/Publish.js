import React, { useState } from "react";
import axios from "axios";

const Publish = () => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [price, setPrice] = useState("");
	const [file, setFile] = useState("");

	return (
		<div className="publish-container">
			<div className="publish-item">
				<h2>Déposer une annonce</h2>
				<span></span>

				<form
					onSubmit={async e => {
						e.preventDefault();
					}}
				>
					<div className="publish-title">
						<label>Titre de l'annonce*</label>
						<input
							type="text"
							onChange={e => {
								setTitle(e.target.value);
							}}
							required
						/>
					</div>

					<div className="publish-text">
						<label>Texte de l'annonce*</label>
						<input
							type="text"
							onChange={e => {
								setText(e.target.value);
							}}
							required
						/>
					</div>

					<div className="publish-price">
						<label>Prix*</label>
						<input
							type="number"
							onChange={e => {
								setPrice(e.target.value);
							}}
							required
						/>
					</div>

					<div className="publish-file">
						<label>Photo*</label>
						<input type="file" />
					</div>

					<div className="publish-submit">
						<input type="submit" value="Valider" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Publish;
