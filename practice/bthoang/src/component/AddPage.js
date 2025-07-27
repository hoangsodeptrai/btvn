import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
	let [newUser, setNewUser] = useState([]);
	let navigate = useNavigate();
	let handleOnChange = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};
	function handleAddUsers() {
		axios.post("http://localhost:8888/users", newUser).then(() =>
			setNewUser({
				name: "",
				username: "",
				password: "",
				department: "",
				role: "",
				performanceScore: "",
			})
		);
		navigate("/");
	}
	return (
		<>
			<input type="text" name="name" value={newUser.name} onChange={handleOnChange} placeholder="Nhập tên" />
			<input type="text" name="username" value={newUser.username} onChange={handleOnChange} placeholder="Nhập Tên tai khoản" />
			<input type="text" name="password" value={newUser.password} onChange={handleOnChange} placeholder=" nhap mat khau" />
			<input type="text" name="department" value={newUser.department} onChange={handleOnChange} placeholder="nhap department" />
			<input type="text" name="role" value={newUser.role} onChange={handleOnChange} placeholder="nhap role" />
			<input type="text" name="performanceScore" value={newUser.performanceScore} onChange={handleOnChange} placeholder="nhap diem" />
			<button onClick={handleAddUsers}>Thêm</button>
		</>
	);
}
