import { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import { URL_PRODCUTS } from "../../CONST/URL";
import { useNavigate } from "react-router-dom";

export default function ListProducts() {
	let [product, setProduct] = useState([]);
	let [category, setCategory] = useState([]);
	let [filterProduct, setFilterProduct] = useState([]);
	let [search, setSearch] = useState("");
	let navigate = useNavigate();
	function loadProduct() {
		axios.get(URL_PRODCUTS).then((res) => {
			setProduct(res.data);
			setFilterProduct(res.data);
			let uniqueCategory = [...new Set(res.data.map((p) => p.category))];
			setCategory(uniqueCategory);
		});
	}
	useEffect(() => {
		loadProduct();
	}, []);
	let handleSearch = () => {
		const filterCategory = product.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
		setFilterProduct(filterCategory);
	};
	let handleDelete = (id) => {
		axios.delete(`${URL_PRODCUTS}/${id}`).then(() => {
			loadProduct();
		});
	};
	return (
		<>
			<Header></Header>
			<div className="user">
				<div className="left-1">
					{category.map((c) => (
						<li>{c}</li>
					))}
				</div>
				<div className="right-1">
					<h3>Danh sách sản phẩm</h3>
					<button className="add-user" onClick={() => navigate("/add-product")}>
						Thêm sản phẩm
					</button>{" "}
					<br />
					<input className="search-input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Nhập tên cần tìm" />
					<button className="search-input1" onClick={() => handleSearch()}>
						Tìm theo tên
					</button>
					{filterProduct.map((p) => (
						<ul>
							<li>
								{p.name} | {p.category} | {p.price}
								<button onClick={() => handleDelete(p.id)}>xoá</button>
								<button onClick={() => navigate(`/edit-product/${p.id}`)}>edit</button>
								<button onClick={() => navigate(`/view-product/${p.id}`)}>view</button>
							</li>
						</ul>
					))}
				</div>
			</div>
		</>
	);
}
