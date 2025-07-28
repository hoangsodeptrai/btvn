import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_USERS } from "../../CONST/URL";
export default function Login() {
	let navigate = useNavigate();
	let [newUser, setNewUser] = useState({
		username: "",
		password: "",
	});
	let [list, setList] = useState([]);
	let handleOnChange = (e) =>
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		});
	useEffect(() => {
		axios.get(URL_USERS).then((res) => {
			setList(res.data);
		});
	}, []);
	function handleLogin() {
		const userCheck = list.find((item) => item.username === newUser.username && item.password === newUser.password);
		if (userCheck) {
			alert("Đăng nhập thành công");
			navigate("/");
		} else {
			alert("Bạn sai tài khoản hoặc mật khẩu rồi");
		}
	}

	return (
		<>
			<div className="login-page">
				<h1>Login</h1>
				<input type="text" name="username" value={newUser.username} className="login" onChange={handleOnChange} /> <br />
				<input type="password" name="password" value={newUser.password} className="login" onChange={handleOnChange} /> <br />
				<button className="login-1" onClick={() => handleLogin()}>
					Login
				</button>{" "}
				<br />
				<button className="login-1" onClick={() => navigate("/register")}>
					Register
				</button>
			</div>
		</>
	);
}
