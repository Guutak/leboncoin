import React from "react";

const Subheader = () => {
	return (
		<div className="hero-container">
			<div className="hero-content">
				<div className="hero-item"></div>
			</div>

			<div className="hero-research">
				<div className="hero-research-item flex-item">
					<input
						type="text"
						name="Recherche"
						placeholder="Que recherchez-vous"
					/>
					<button>Rechercher</button>
				</div>
			</div>
		</div>
	);
};

export default Subheader;
