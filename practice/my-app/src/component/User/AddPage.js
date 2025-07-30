import { useNavigate } from "react-router-dom";
import HomeList from "../Header";
import { useState } from "react";
import axios from "axios";
import { URL_USERS } from "../../CONST/URL";
export default function AddPage() {
	let navigate = useNavigate();
	let [newUser, setNewUser] = useState({
		name: "",
		department: "",
		role: "",
		performanceScore: "",
	});
	let handleOnChange = (e) =>
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		});
	function handleAddUser() {
		axios.post(URL_USERS, newUser).then(
			setNewUser({
				name: "",
				department: "",
				role: "",
				performanceScore: "",
			})
		);
		navigate("/user");
	}
	return (
		<>
			<HomeList></HomeList>
			<div className="midder">
				<button className="nut-2" onClick={() => navigate("/user")}>
					{" "}
					&lt; Quay lại{" "}
				</button>
			</div>
			<div className="midder-1">
				<div className="login-page">
					<h3>Thêm mới người dùng</h3>
					<input type="text" className="login" value={newUser.name} name="name" onChange={handleOnChange} placeholder="Nhập tên" /> <br />
					<input
						type="text"
						className="login"
						value={newUser.department}
						name="department"
						onChange={handleOnChange}
						placeholder="Nhập phòng ban "
					/>{" "}
					<br />
					<input type="text" className="login" value={newUser.role} name="role" onChange={handleOnChange} placeholder="Nhập role" /> <br />
					<input
						type="text"
						className="login"
						value={newUser.performanceScore}
						name="performanceScore"
						onChange={handleOnChange}
						placeholder="Nhập điểm"
					/>{" "}
					<br />
					<button className="login-1" onClick={handleAddUser}>
						Tạo
					</button>{" "}
					<br />
				</div>
			</div>
		</>
	);
}
