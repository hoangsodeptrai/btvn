import { useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_PRODCUTS } from "../../CONST/URL";

export default function AddProduct() {
	let [newProduct, setNewProduct] = useState({
		name: "",
		category: "",
		price: "",
		stock: 0,
	});
	let navigate = useNavigate();
	let handleOnChange = (e) => {
		const { name, value } = e.target;

		setNewProduct({
			...newProduct,
			[name]: name === "stock" || name === "price" ? Number(value) : value,
		});
	};
	let handleAddProduct = () => {
		axios.post(URL_PRODCUTS, newProduct).then(() => {
			setNewProduct({
				name: "",
				category: "",
				price: "",
				stock: 0,
			});
			navigate("/product");
		});
	};
	return (
		<>
			<Header></Header>
			<div className="midder">
				<button className="nut-2" onClick={() => navigate("/product")}>
					{" "}
					&lt; Quay lại{" "}
				</button>
			</div>
			<div className="midder-1">
				<div className="login-page">
					<h3>Thêm mới product</h3>
					<input type="text" className="login" value={newProduct.name} name="name" onChange={handleOnChange} placeholder="Nhập tên" /> <br />
					<input
						type="text"
						className="login"
						value={newProduct.category}
						name="category"
						onChange={handleOnChange}
						placeholder="Nhập category "
					/>{" "}
					<br />
					<input type="text" className="login" value={newProduct.price} name="price" onChange={handleOnChange} placeholder="Nhập gia" /> <br />
					<input type="number" className="login" value={newProduct.stock} name="stock" onChange={handleOnChange} placeholder="Nhập so luong" /> <br />
					<button className="login-1" onClick={handleAddProduct}>
						Tạo
					</button>{" "}
					<br />
				</div>
			</div>
		</>
	);
}
