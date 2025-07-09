import { use, useState } from "react";

export default function ListProduct() {
	const [products, setProducts] = useState([
		{ name: "C2", prices: 10000, volume: 1 },
		{ name: "Bò húc", prices: 12000, volume: 1 },
	]);
	const [sort, setSort] = useState("");
	const [search, setSearch] = useState("");
	const [filteredProduct, setFilteredProduct] = useState(products);

	const handleSort = (order) => {
		let sorted = [...filteredProduct].sort((a, b) => {
			return order === "up" ? a.prices - b.prices : b.prices - a.prices;
		});
		setFilteredProduct(sorted);
		setSort(order);
	};
	const handldeSearch = () => {
		const result = products.filter((item)=>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredProduct(result);
	};
	return (
		<> 
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Nhập đồ cần tìm" ></input> <hr></hr>
            <button onClick={()=>handldeSearch()}>Tìm</button>
			<button onClick={() => handleSort("up")}> Giá tăng dần </button>
			<button onClick={() => handleSort("down")}> Giá giảm dần </button>
            <ul>{filteredProduct.map((product)=>(
                    <li>
                        {product.name} - {product.prices} - {product.volume}
                    </li>
            ))}</ul>

		</>
	);
}
