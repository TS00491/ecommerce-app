import React from "react";
import ShopNowButton from "./ShopNowButton";

export default function HomepageDisplay() {
	return (
		<div className="homepage-spotlight">
			{/* <button>Shop Now!</button> */}
			{/* <a
				href="https://www.converse.com/on/demandware.static/-/Library-Sites-ConverseEU01SharedLibrary/default/dw5f229c7b/firstspirit/converse-uk/media/homepage_1/2022_holiday_1/desktop_20/D-WE-HP-P1-Cozy-Utility.jpg"
				className="cosy-shoe-div"
			> */}
			<img
				className="cosy-shoe"
				alt=""
				src="https://www.converse.com/on/demandware.static/-/Library-Sites-ConverseEU01SharedLibrary/default/dw5f229c7b/firstspirit/converse-uk/media/homepage_1/2022_holiday_1/desktop_20/D-WE-HP-P1-Cozy-Utility.jpg"
			></img>
			{/* </a> */}
			<div className="promo-spotlight">
				<h2 className="shoe-headline-top">Stay Cosy,</h2> <br></br>
				<h2 className="shoe-headline-bottom">Stay Chic</h2>
				<p className="shoe-headline-subtext1">
					The season's comfiest plaforms also bring high style, in winter-ready
					looks like fuzzy sherpa and suede.
				</p>
				<ShopNowButton />
			</div>
		</div>
	);
}
