import axios from "axios";
import { useState } from "react";
import { URL_CUSTOMERS, URL_PRODCUTS } from "../../CONST/URL";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

export default function AddCustumer() {
	let navigate = useNavigate();
	let [newCus, setNewCus] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		createdAt: "",
	});

	let handleOnChange = (e) => {
		setNewCus({
			...newCus,
			[e.target.name]: e.target.value,
		});
	};
	function handleAdd() {
		axios.post(URL_CUSTOMERS, newCus).then(() => {
			setNewCus({
				name: "",
				email: "",
				phone: "",
				address: "",
				createdAt: "",
			});
            navigate('/cus')
		});
	}
    
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
					<h3>Thêm mới product</h3>
					<input type="text" className="login" value={newCus.name} name="name" onChange={handleOnChange} placeholder="Nhập tên" /> <br />
					<input type="text" className="login" value={newCus.email} name="email" onChange={handleOnChange} placeholder="Nhập email " /> <br />
					<input type="text" className="login" value={newCus.phone} name="phone" onChange={handleOnChange} placeholder="Nhập phone" /> <br />
					<input type="number" className="login" value={newCus.address} name="address" onChange={handleOnChange} placeholder="Nhập dia chir" /> <br />
					<input type="number" className="login" value={newCus.createdAt} name="createdAt" onChange={handleOnChange} placeholder="Nhập date" /> <br />
					<button className="login-1" onClick={handleAdd}>
						Tạo
					</button>{" "}
					<br />
				</div>
			</div>
		</>
	);
}
