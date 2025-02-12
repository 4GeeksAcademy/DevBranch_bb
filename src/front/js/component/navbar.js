import React, { useContext, } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import burgerbitelogo from "../../img/burgerbitelogo.jpg"



export const Navbar = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">					
					{!store.token ?
						<>
							<img src={burgerbitelogo} alt="BurgerBite Logo" style={{ height: "75px" }} />
							{/* <h4>BurgerBite<br></br>Logo</h4> */}
							{/* <Link to="/login">
								<button className="btn btn-primary me-1">Login</button>
							</Link>
							<Link to="/signup">
								<button className="btn btn-primary">Signup</button>
							</Link> */}
						</>
						:
						<>
							<Link to="/private">
								<button className="btn btn-primary me-1">Account Profile</button>
							</Link>
							<Link to="/menu">
								<button className="btn btn-primary me-1">Menu</button>
							</Link>
							<Link to="/shoppingcart">
								<button className="btn btn-primary me-1">Shop Cart</button>
							</Link>
							<Link to="/checkout">
								<button className="btn btn-primary me-1">Checkout</button>
							</Link>
							<Link to="/favoriteburgers">
								<button className="btn btn-primary me-1">Favorites</button>
							</Link>
							<Link to="/editfavorites">
								<button className="btn btn-primary me-1">Edit Favs.</button>
							</Link>
							<Link to="/orderhistory">
								<button className="btn btn-primary me-1">Order Hist.</button>
							</Link>
							<button className="btn btn-primary" onClick={() => actions.logout(navigate)}>Log out</button>
							
						</>
					}										
				</div>
			</div>
		</nav>
	);
};
