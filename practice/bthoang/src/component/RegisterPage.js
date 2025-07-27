import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import axios  from "axios";

export default function RegisterPage() {
	let [form, setForm] = useState({
		name: "",
		username: "",
		password: "",
		department: "",
		role: "",
		performanceScore: "",
	});
	let navigate = useNavigate();

	let handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
	let handleSumit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:8888/users", form).then(() => {
			navigate("/login");
		});
	};
	let handleReset = () => {
		localStorage.clear("user");
	};
	return (
		<>
			<form onSubmit={handleSumit}>
				<input name="name" value={form.name} onChange={handleChange} placeholder="Tên" />
				<input name="username" value={form.username} onChange={handleChange} placeholder="Tên tài khoản" />
				<input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Mật khẩu" />
				<input name="department" value={form.department} onChange={handleChange} placeholder="Department" />
				<input name="role" value={form.role} onChange={handleChange} placeholder="Role" />
				<input name="performanceScore" value={form.performanceScore} onChange={handleChange} placeholder="Performance Score" />
				<button type="submit">Đăng ký</button>
			</form>
		</>
	);
}
