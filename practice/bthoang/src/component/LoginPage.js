import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function LoginPage() {
	let navigate = useNavigate();
	let [form, setForm] = useState({
		username: "",
		password: "",
	});
	let [error, setError] = useState("");
	let handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.get("http://localhost:8888/users").then((res) => {
			const user = res.data.find((u) => u.username === form.username && u.password === form.password);
			if (user) {
				setError("");
				navigate("/"); // hoặc trang dashboard
			} else {
				setError("Tên tài khoản hoặc mật khẩu không đúng");
			}
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
			<input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
			<button type="submit">Đăng nhập</button>
			{error && <p style={{ color: "red" }}>{error}</p>}
		</form>
	);
}
