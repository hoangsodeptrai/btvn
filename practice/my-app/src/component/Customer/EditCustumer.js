import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_CUSTOMERS, URL_PRODCUTS, URL_USERS } from "../../CONST/URL";
export default function EditCustumer() {
	let navigate = useNavigate();

	let { id } = useParams();
	let [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		createdAt: "",
	});
	useEffect(() => {
		axios.get(`${URL_CUSTOMERS}/${id}`).then((res) => {
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
		axios.put(`${URL_CUSTOMERS}/${id}`, form).then(() => {
			alert("Edit thành công");
			navigate("/cus");
		});
	};
	return (
		<>
			<Header></Header>
			<div className="midder">
				<button className="nut-2" onClick={() => navigate("/cus")}>
					{" "}
					&lt; Quay lại{" "}
				</button>
			</div>
			<div className="midder-1">
				<div className="login-page">
					<h3>Sửa thông tin</h3>
					<input type="text" className="login" value={form.name} name="name" onChange={handleOnChange} placeholder="Nhập tên" /> <br />
					<input type="text" className="login" value={form.email} name="email" onChange={handleOnChange} placeholder="Nhập email " /> <br />
					<input type="text" className="login" value={form.phone} name="phone" onChange={handleOnChange} placeholder="Nhập phone" /> <br />
					<input type="text" className="login" value={form.address} name="address" onChange={handleOnChange} placeholder="Nhập dia chir" /> <br />
					<input type="number" className="login" value={form.createdAt} name="createdAt" onChange={handleOnChange} placeholder="Nhập date" /> <br />
					<button className="login-1" onClick={handleEdit}>
						Tạo
					</button>{" "}
					<br />
				</div>
			</div>
		</>
	);
}
