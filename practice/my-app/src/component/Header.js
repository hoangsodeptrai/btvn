import { useNavigate } from "react-router-dom";
export default function Header() {
	let navigate = useNavigate();
	return (
		<>
			<div className="header">
				<div className="left">
					<button className="nut" onClick={() => navigate("/")}>
						Home |
					</button>
					<button className="nut" onClick={()=>navigate('/user')} >Quản lý người dùng |</button>
					<button className="nut">Quản lý sản phẩm |</button>
					<button className="nut">Quản Lý khách hàng |</button>
				</div>
				<div className="right">
					<button className="nut-1" onClick={()=>navigate('/login')} >LogOut</button>
				</div>
			</div>
		</>
	);
}
