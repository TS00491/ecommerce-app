import React from "react";
import "./App.css";
import Products from "./Homepage/Products";
import HomepageDisplay from "./Homepage/HomepageDisplay";
// import ShopNowButton from "./Homepage/ShopNowButton";
import ProductCarousel from "./Homepage/ProductCarousel";
import ShoeCarousel from "./Homepage/ShoeCarousel";

function App() {
	
	return (
		<div className="App">
			<Products />
			<HomepageDisplay />
			<ProductCarousel />
			<ShoeCarousel />
		</div>
	);
}

export default App;
