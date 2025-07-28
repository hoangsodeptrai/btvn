import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { URL_USERS } from "../../CONST/URL";
export default function Register() {
	let navigate = useNavigate();
	let [newUser, setNewUser] = useState({
		name: "",
		username: "",
		password: "",
	});
	let handleOnChange = (e) =>
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		});
	function handleRegister() {
		axios.post(URL_USERS, newUser).then(() => {
			alert("Đăng ký thành công rực rỡ");
			navigate("/login");
		});
	}
	return (
		<>
			<div className="register-page">
				<h3>Register</h3>
				<input type="text" className="register" name="name" value={newUser.name} onChange={handleOnChange} placeholder="Tên" /> <br />
				<input type="text" className="register" name="username" value={newUser.username} onChange={handleOnChange} placeholder="Tên tk" /> <br />
				<input type="password" className="register" name="password" value={newUser.password} onChange={handleOnChange} placeholder="mk" /> <br />
				<button className="register-1" onClick={() => handleRegister()}>
					Register
				</button>{" "}
				<br />
				<button className="register-1" onClick={() => navigate("/login")}>
					Login
				</button>
			</div>
		</>
	);
}
