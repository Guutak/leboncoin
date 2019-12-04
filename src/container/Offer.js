import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Offer = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [offer, setOffer] = useState({})

	let { id } = useParams()

	const fetchData = async () => {
		const response = await axios.get(
			"https://leboncoin-api.herokuapp.com/api/offer/" + id
		)

		setOffer(response.data)
		setIsLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<section className="offer-wrapper">
			{isLoading ? (
				<p>Chargement...</p>
			) : (
				<div className="offer-container">
					<div className="offer-container-items">
						<div className="offer-items">
							<div className="offer-items-img">
								<img src={offer.pictures} alt="" />
							</div>

							<div className="offer-item-info">
								<h3>{offer.title}</h3>
								<span>{offer.price}</span>
								<span>€</span>

								<p>{offer.created}</p>
							</div>
						</div>

						<div className="offer-seller-infos">
							<h3>{offer.creator.account.username}</h3>
							<button className="left-offer offer-card">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="none"
										stroke="#fff"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
									>
										<circle
											cx="10"
											cy="20.5"
											r="1"
										></circle>
										<circle
											cx="18"
											cy="20.5"
											r="1"
										></circle>
										<path d="M2.5 2.5h3l2.7 12.4a2 2 0 002 1.6h7.7a2 2 0 002-1.6l1.6-8.4H7.1"></path>
									</svg>
								</span>
								<span>Acheter</span>
							</button>
						</div>
					</div>

					<div className="offer-item-description">
						<h5>Description</h5>
						<p>{offer.description}</p>
					</div>
				</div>
			)}
		</section>
	)
}

export default Offer
