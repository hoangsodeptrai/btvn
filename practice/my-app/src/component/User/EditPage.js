import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_USERS } from "../../CONST/URL";
export default function EditPage() {
	let navigate = useNavigate();
	let { id } = useParams();
	let [form, setForm] = useState({
		name: "",
		department: "",
		role: "",
		performanceScore: "",
	});
	useEffect(() => {
		axios.get(`${URL_USERS}/${id}`).then((res) => {
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
		axios.put(`${URL_USERS}/${id}`, form).then(() => {
			alert("Edit thành công");
			navigate("/user");
		});
	};
	return (
		<>
			<Header></Header>
			<div className="midder">
				<button className="nut-2" onClick={() => navigate("/user")}>
					{" "}
					&lt; Quay lại{" "}
				</button>
			</div>
			<div className="midder-1">
				<div className="login-page">
					<h3>Sửa thông tin</h3>
					<input type="text" name="name" value={form.name} onChange={handleOnChange} className="login" /> <br />
					<input type="text" name="department" onChange={handleOnChange} value={form.department} className="login" /> <br />
					<input type="text" name="role" value={form.role} onChange={handleOnChange} className="login" /> <br />
					<input type="text" name="performanceScore" onChange={handleOnChange} value={form.performanceScore} className="login" /> <br />
					<button className="login-1" onClick={handleEdit}>
						Tạo
					</button>{" "}
					<br />
				</div>
			</div>
		</>
	);
}
