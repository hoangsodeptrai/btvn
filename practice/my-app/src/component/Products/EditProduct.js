import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_PRODCUTS, URL_USERS } from "../../CONST/URL";
export default function EditProduct() {
	let navigate = useNavigate();

	let { id } = useParams();
	let [form, setForm] = useState({
		name: "",
		category: "",
		price: "",
	});
	useEffect(() => {
		axios.get(`${URL_PRODCUTS}/${id}`).then((res) => {
			setForm(res.data);
		});
	}, [id]);
	let handleOnChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	let handleEdit = () => {
		axios.put(`${URL_PRODCUTS}/${id}`, form).then(() => {
			alert("Edit thành công");
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
					<h3>Sửa thông tin</h3>
					<input type="text" name="name" value={form.name} onChange={handleOnChange} className="login" /> <br />
					<input type="text" name="category" onChange={handleOnChange} value={form.category} className="login" /> <br />
					<input type="text" name="price" value={form.price} onChange={handleOnChange} className="login" /> <br />
					<button className="login-1" onClick={handleEdit}>
						Tạo
					</button>{" "}
					<br />
				</div>
			</div>
		</>
	);
}
