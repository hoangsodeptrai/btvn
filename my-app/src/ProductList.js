import { use, useState } from "react";

export default function ProductList() {
	let [products, setProducts] = useState([
		{ name: "C2", prices: 10000, volume: 1 },
		{ name: "Bò húc", prices: 12000, volume: 1 },
	]);
	let [sort, setSort] = useState("");
	let handleSort = (order) => {
		let sorted = [...products].sort((a, b) => {
			if (a == "up") {
				return a.prices - b.prices;
			} else {
				return b.prices - a.prices;
			}
		});
		setProducts(sorted);
		setSort(order);
	};
	return (
		<>
			<button onClick={handleSort("up")}> Giá tăng dần </button>
			<button onClick={handleSort("down")}> Giá giảm dần </button>
            <h1>{products.map((product)=>(
                <span>{product.name},{product.prices},{product.volume}</span>
            ))}</h1>
		</>
	);
}
