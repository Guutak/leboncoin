import React, { useState, useEffect } from "react";
import axios from "axios";

import Subheader from "../component/Subheader";
import Cards from "../component/Cards";

const Offers = () => {
	const [offers, setOffers] = useState([]);

	const fetchData = async () => {
		const response = await axios.get(
			"https://leboncoin-api.herokuapp.com/api/offer/with-count/"
		);

		setOffers(response.data.offers);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Subheader />

			<div className="card-wrapper">
				{offers.map((offer, index) => {
					return (
						<Cards
							key={index}
							image={offer.pictures}
							title={offer.title}
							price={offer.price}
							currency="€"
							created={offer.created}
							offer={offer}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Offers;
