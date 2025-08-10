import { useEffect, useState } from "react";
import axios from "axios";
import { URL_USER } from "../URL";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

export default function LoginPage() {
	let [form, setForm] = useState({
		username: "",
		password: "",
	});
	let navigate = useNavigate();
	let [list, setList] = useState([]);
	useEffect(() => {
		axios.get(URL_USER).then((res) => {
			setList(res.data);
		});
	});
	let handleOnChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	function handleLogin() {
		const userCheck = list.find((item) => item.username === form.username && item.password === form.password);
		if (userCheck) {
			localStorage.setItem("user", JSON.stringify(userCheck));
			alert("Đăng nhập thành công");
			navigate("/home");
		} else {
			alert("Sai tài khoản hoặc mật khẩu");
			setForm({
				...form,
				password: "",
			});
		}
	}
	return (
		<>
			<Header></Header>
			<div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput" className="form-label">
						Tên tài khoản
					</label>
					<input
						type="text"
						name="username"
						value={form.username}
						onChange={handleOnChange}
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Nhập tên tài khoản"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput2" className="form-label">
						Mật Khẩu
					</label>
					<input
						type="password"
						name="password"
						value={form.password}
						onChange={handleOnChange}
						className="form-control"
						id="formGroupExampleInput2"
						placeholder="Nhập mật khẩu"
					/>
				</div>
				<button type="button" onClick={handleLogin} class="btn btn-info">
					Đăng nhập
				</button>
				<button className="login-button" type="button" onClick={() => navigate("/register")} class="btn btn-info">
					Đăng Ký
				</button>
			</div>
		</>
	);
}
