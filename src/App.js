import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./component/Header";
import Modal from "./component/Modal";

import Offers from "./container/Offers";
import Offer from "./container/Offer";
import "./App.css";

const App = () => {
	let token = Cookies.get("token");
	const [showModal, setShowModal] = useState(false);
	const [user, setUser] = useState(token);

	const cookie = token => {
		Cookies.set("token", token);
	};

	return (
		<Router>
			<>
				{showModal && (
					<Modal
						showModal={showModal}
						setShowModal={setShowModal}
						cookie={cookie}
					/>
				)}

				<Header
					altImg="Logo Leboncoin"
					offer="Déposer une annonce"
					search="Rechercher"
					myResearch="Mes recherches"
					favorites="Favoris"
					messages="Messages"
					showModal={showModal}
					setShowModal={setShowModal}
					setUser={setUser}
					user={user}
				/>

				{/* {console.log("token is ", token)}
				{console.log("user is ", user)} */}

				<Switch>
					<Route exact path="/">
						<Offers />
					</Route>

					<Route path="/Offer/:id">
						<Offer />
					</Route>
				</Switch>
			</>
		</Router>
	);
};

export default App;
