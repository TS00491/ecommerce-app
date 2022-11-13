import React, {useState} from "react";

export default function ShoeCarousel() {
	const [shoes, setShoe] = useState([
		{
			shoeImg:
				"https://www.converse.com/on/demandware.static/-/Library-Sites-ConverseEU01SharedLibrary/default/dwace17310/firstspirit/converse-uk/media/homepage_1/2022_holiday_1/desktop_20/D-WE-HP-New-Arrivals-Image-1.jpg",
			shoeType: "High Tops",
		},
		{
			shoeImg:
				"https://www.converse.com/on/demandware.static/-/Library-Sites-ConverseEU01SharedLibrary/default/dw050c2f7e/firstspirit/converse-uk/media/homepage_1/2022_holiday_1/desktop_20/D-WE-HP-New-Arrivals-Image-2.jpg",
			shoeType: "Low Tops",
		}, {
			shoeImg: "https://www.converse.com/dw/image/v2/BJJF_PRD/on/demandware.static/-/Sites-cnv-master-catalog-we/default/dw9c7fbf5a/images/a_107/A00868C_A_107X1.jpg?sw=964", 
			shoeType: "Platforms"
		}, {
			shoeImg:
			"https://www.converse.com/dw/image/v2/BJJF_PRD/on/demandware.static/-/Sites-cnv-master-catalog-we/default/dwe985b88b/images/a_08/CTAS_Lift_Hi_converse_pink_pair_08X1.jpg",
			shoeType: "High Tops",
		}
	]);
	const shoeList = shoes.map((shoe, index) => <div className="shoe-item-container" key={index}>  <p>{shoe.shoeType}</p><img className="shoe-item-mapped" src={shoe.shoeImg}></img> </div>);
	return <div className="shoe-mapping">
		{shoeList}
		</div>;
}
