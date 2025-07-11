import { use, useState } from "react";

export default function ListProduct() {
	let [products, setProducts] = useState([
		{ name: "iphone1", price: 100, quantity: 10 },
		{ name: "iphone2", price: 105, quantity: 15 },
		{ name: "iphone3", price: 140, quantity: 13 },
	]);
	let [name, setName] = useState("");
	let [price, setPrice] = useState("");
	let [quantity, setQuantity] = useState("");
	function addProduct() {
		setProducts([...products, { name, price, quantity }]);
		setName("");
		setPrice(0);
		setQuantity(0);
	}

	return (
		<>
			{products.map((products) => (
				<h3>
					{products.name},{products.price},{products.quantity}
				</h3>
			))}
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
			<input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
			<button onClick={addProduct}>them</button>
		</>
	);
}
