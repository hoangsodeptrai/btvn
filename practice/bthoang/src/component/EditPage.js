import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPage() {
	let { id } = useParams();
	let navigate = useNavigate();
	let [user, setUser] = useState({ name: "", username: "", password: "", department: "", role: "", performanceScore: "" });

	function loadUser() {
		axios.get(`http://localhost:8888/users/${id}`).then((res) => {
			setUser(res.data);
		});
	}
	useEffect(() => loadUser(), [id]);

	let handleOnChange = (e) =>
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});

	let handleUpdate = () => {
		axios.put(`http://localhost:8888/users/${id}`, user).then(() => {
			navigate("/");
		});
	};

	return (
		<>
			<input type="text" name="name" value={user.name} onChange={handleOnChange} placeholder="Nhập tên" />
			<input type="text" name="username" value={user.username} onChange={handleOnChange} placeholder="Nhập Tên tai khoản" />
			<input type="text" name="password" value={user.password} onChange={handleOnChange} placeholder=" nhap mat khau" />
			<input type="text" name="department" value={user.department} onChange={handleOnChange} placeholder="nhap department" />
			<input type="text" name="role" value={user.role} onChange={handleOnChange} placeholder="nhap role" />
			<input type="text" name="performanceScore" value={user.performanceScore} onChange={handleOnChange} placeholder="nhap diem" />
			<button onClick={handleUpdate}>Thêm</button>
		</>
	);
}
