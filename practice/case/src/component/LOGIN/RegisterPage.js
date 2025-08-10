import { useState } from "react";
import axios from "axios";
import { URL_USER } from "../URL";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

export default function RegisterPage() {
	let [form, setForm] = useState({
		name: "",
		username: "",
		password: "",
	});
	let navigate = useNavigate();

	let handleOnChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	function handleRegister() {
		axios.post(URL_USER, form).then(() => {
			alert("Đăng ký thành công");
			navigate("/login");
		});
	}
	return (
		<>
			<Header></Header>
			<div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput" className="form-label">
						Tên Người Dùng
					</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Nhập Tên Người Dùng"
						name="name"
						value={form.name}
						onChange={handleOnChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput2" className="form-label">
						Tên Tài Khoản
					</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput2"
						placeholder="Nhập Tên Tài Khoản"
						name="username"
						value={form.username}
						onChange={handleOnChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput2" className="form-label">
						Mật khẩu
					</label>
					<input
						type="password"
						name="password"
						value={form.password}
						onChange={handleOnChange}
						className="form-control"
						id="formGroupExampleInput2"
						placeholder="Nhập Mật Khẩu"
					/>
				</div>
				<button type="button" onClick={handleRegister} class="btn btn-info">
					Đăng Ký
				</button>
				<button type="button" onClick={() => navigate("/login")} class="btn btn-info">
					Đăng Nhập
				</button>
			</div>
		</>
	);
}
