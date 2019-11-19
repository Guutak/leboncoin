import React from "react";
import { Link } from "react-router-dom";

const Cards = props => {
	return (
		<div className="card-container">
			<Link to={"/offer/" + props.offer._id}>
				<div className="card-item">
					<div className="card-item-picture">
						<img src={props.image} alt="" />
					</div>

					<div className="card-item-infos">
						<div className="card-item-top">
							<h3>{props.title}</h3>
							<span>{props.price}</span>
							<span>{props.currency}</span>
						</div>

						<p>{props.created}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Cards;
