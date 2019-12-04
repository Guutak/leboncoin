import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Cookies from "js-cookie"

import Header from "./component/Header"
import Modal from "./component/Modal"

import Offers from "./container/Offers"
import Offer from "./container/Offer"
import Subscribe from "./container/Subscribe"
import Publish from "./container/Publish"

import "./App.css"

const App = () => {
	let token = Cookies.get("token")
	const [showModal, setShowModal] = useState(false)
	const [user, setUser] = useState(token)

	const onConnect = token => {
		Cookies.set("token", token)
		setUser(token)
	}

	return (
		<Router>
			<>
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

				<Switch>
					<Route exact path="/">
						<Offers />
					</Route>

					<Route path="/Offer/:id">
						<Offer />
					</Route>

					<Route path="/SignUp">
						<Subscribe setUser={setUser} />
					</Route>

					<Route path="/Publish">
						<Publish />
					</Route>
				</Switch>
				{showModal && (
					<Modal
						showModal={showModal}
						setShowModal={setShowModal}
						onConnect={onConnect}
						user={user}
					/>
				)}
			</>
		</Router>
	)
}

export default App
