import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

export default function HomeList() {
	let navigate = useNavigate();
	let [user, setUser] = useState([]);
	function loadList() {
		axios.get("http://localhost:8888/users").then((res) => setUser(res.data));
	}
	useEffect(() => loadList(), []);
	return (
		<>
			<button onClick={() => navigate("/login")}>Đăng nhập</button>
			<button onClick={() => navigate("/register")}>Đăng ky</button>
			<button onClick={() => navigate("/add")}>Thêm Thành Viên</button>
			<div className="homepage">
				<div className="left">
					<h1>Danh sách thành viên</h1>
					{user.map((u) => (
						<h5>
							{u.name} - {u.department} - {u.role}-{u.performanceScore}
							<button onClick={() => navigate(`/edit/${u.id}`)}>Edit</button>
							<button onClick={() => navigate(`/view/${u.id}`)}>View</button>
						</h5>
					))}
				</div>
				<div className="right">asdfsad</div>
			</div>
		</>
	);
}
