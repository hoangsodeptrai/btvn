import { useNavigate } from "react-router-dom";
import HomeList from "../Header";
export default function EditPage() {
	let navigate=useNavigate()
	return (
		<>
			<HomeList></HomeList>
			<div className="midder">
				<button className="nut-2" onClick={()=>navigate('/')} > &lt; Quay lại </button>
			</div>
			<div className="midder-1">
				<div className="login-page">
					<h3>Thêm mới người dùng</h3>
					<input type="text" className="login" /> <br />
					<input type="text" className="login" /> <br />
					<input type="text" className="login" /> <br />
					<button className="login-1" onClick={() => navigate("/")}>
						Tạo
					</button>{" "}
					<br />
				</div>
			</div>
		</>
	);
}
