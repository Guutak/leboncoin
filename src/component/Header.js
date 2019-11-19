import React from "react";
import Logo from "../img/leboncoin-logo.png";

import Cookies from "js-cookie";

const Header = props => {
	// let cookie = Cookies.get("token");
	// console.log("ddfdggghhhh", cookie);
	console.log("props de user is ", props.user);

	return (
		<header>
			<nav className="header-content flex-item">
				<div className="header-left-nav flex-item">
					<img
						className="header-logo header-item"
						src={Logo}
						alt={props.altImg}
					/>

					<a className="left-offer header-item" href="#">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="#F56B29"
								stroke="#FFF"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path d="M3 3h18v18H3zm9 5v8m-4-4h8"></path>
							</svg>
						</span>
						<span>{props.offer}</span>
					</a>
					<a className="left-search header-item flex-item" href="#">
						<div className="search flex-item">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								stroke="#000"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
							>
								<circle cx="11" cy="11" r="8"></circle>
								<path d="M21 21L16.65 16.65"></path>
							</svg>
							<div className="search-text">
								<h4>{props.search}</h4>
							</div>
						</div>
					</a>
				</div>

				<div className="header-right-nav flex-item">
					<div className="header-right-item">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								stroke="#000"
								viewBox="0 0 24 24"
							>
								<path d="M22 17H2a3 3 0 003-3V9a7 7 0 0114 0v5a3 3 0 003 3zm-8.27 4a2 2 0 01-3.46 0"></path>
							</svg>
						</span>

						<h6>{props.myResearch}</h6>
					</div>

					<div className="header-right-item">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								stroke="#000"
								viewBox="0 0 24 24"
							>
								<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
							</svg>
						</span>

						<h6>{props.favorites}</h6>
					</div>

					<div className="header-right-item">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								stroke="#000"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
							>
								<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
							</svg>
						</span>

						<h6>{props.messages}</h6>
					</div>

					{props && props.user ? (
						<div
							className="header-right-item"
							onClick={() => {
								console.log("LABIBIDIBOBIDIBOU");
								props.setUser({});
								Cookies.remove("token");
							}}
						>
							{console.log("LAMANCHIKABOU")}
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									stroke="#000"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</span>

							<h6>Se Déconnecter</h6>
						</div>
					) : (
						<div
							className="header-right-item"
							onClick={() => {
								console.log("SALAGADOU");
								props.setShowModal(true);
							}}
						>
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									stroke="#000"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</span>

							<h6>Se connecter</h6>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
