import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
export default function Header() {
	let navigate = useNavigate();
	let [crrUsername, setCrrUsername] = useState(null);
	useEffect(() => {
		let strUser = localStorage.getItem("crrUsername");
		if (strUser) {
			setCrrUsername(JSON.parse(strUser));
			console.log(strUser);
		} else {
			navigate("/login");
		}
	}, []);
	function handleLogOut() {
		localStorage.removeItem("crrUsername");
		navigate("/login");
	}

	return (
		<>
			<div className="header">
				<div className="left">
					<button className="nut" onClick={() => navigate("/")}>
						Home |
					</button>
					<button className="nut" onClick={() => navigate("/user")}>
						Quản lý người dùng |
					</button>
					<button className="nut" onClick={() => navigate("/product")}>
						Quản lý sản phẩm |
					</button>
					<button className="nut" onClick={() => navigate("/cus")}>
						Quản Lý khách hàng |
					</button>
				</div>
				<div className="right">
					<button className="nut-1" onClick={handleLogOut}>
						LogOut ({crrUsername && <>{crrUsername.name}</>})
					</button>
				</div>
			</div>{" "}
		</>
	);
}
