import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL_USER } from "../URL";

export default function EditUser() {
	let navigate = useNavigate();
	const { id } = useParams();
	let [form, setForm] = useState({
		name: "",
		username: "",
		password: "",
	});

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (!user) {
			navigate("/");
		}
		axios.get(`${URL_USER}/${id}`).then((res) => {
			setForm({
				name: res.data.name,
				username: res.data.username,
				password: res.data.password,
			});
		});
	}, [id]);
	function handleEditUser(e) {
		e.preventDefault();
		axios.put(`${URL_USER}/${id}`, form).then(() => {
			alert("Sửa thông tin thành công");
			const upUser = {
				id,
				name: form.name,
				username: form.username,
				password: form.password,
			};
            localStorage.setItem('user',JSON.stringify(upUser))
            navigate('/home')
		});
	}

	return (
		<>
			<nav className="navbar bg-body-tertiary">
				<div className="container d-flex justify-content-between align-items-center">
					<a className="navbar-brand navba " href="/home">
						<img src="https://i.pinimg.com/736x/90/19/c2/9019c2bc15185ac4be71d965696e88d3.jpg" width={30} height={24} alt="Back" /> quay lại
					</a>
				</div>
			</nav>

			<form onSubmit={handleEditUser}>
				<div>
					<div className="mb-3">
						<input
							value={form.name}
							onChange={(e) =>
								setForm({
									...form,
									name: e.target.value,
								})
							}
							placeholder="Nhập tên"
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<div id="emailHelp" className="form-text">
							Tên
						</div>
					</div>
					<div className="mb-3">
						<input
							value={form.username}
							onChange={(e) =>
								setForm({
									...form,
									username: e.target.value,
								})
							}
							placeholder="Nhập mật khẩu"
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<div id="emailHelp" className="form-text">
							Tên tài khoản
						</div>
					</div>
					<div className="mb-3">
						<input
							value={form.password}
							onChange={(e) =>
								setForm({
									...form,
									password: e.target.value,
								})
							}
							placeholder="Nhập pass"
							type="password"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<div id="emailHelp" className="form-text">
							Mật khẩu
						</div>
					</div>
					<button type="submit">Xác nhận</button>
				</div>
			</form>
		</>
	);
}
