import { useEffect, useState } from "react";
import HomeList from "../Header";
import axios from "axios";
import { URL_USERS } from "../../CONST/URL";
import { useNavigate } from "react-router-dom";
export default function UserList() {
	let [user, setUser] = useState([]);
	let [search, setSearch] = useState("");
	let [filter, setFilter] = useState([]);
	let [department, setDepartment] = useState([]);
	let navigate = useNavigate();
	function loadUser() {
		axios.get(URL_USERS).then((res) => {
			setUser(res.data);
			setFilter(res.data);
			let uniqueDepartment = [...new Set(res.data.map((user) => user.department))];
			setDepartment(uniqueDepartment);
		});
	}
	useEffect(() => {
		loadUser();
	}, []);
	let handleSearch = () => {
		let filterUser = user.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
		setFilter(filterUser);
	};
	let handleDelete = (id) => {
		axios.delete(`${URL_USERS}/${id}`).then(() => loadUser());
	};
	return (
		<>
			<HomeList></HomeList>
			<div></div>
			<div className="user">
				<div className="left-1">
					{department.map((de) => (
						<li>{de}</li>
					))}
				</div>
				<div className="right-1">
					<button className="add-user" onClick={() => navigate("/add")}>
						Thêm người dùng
					</button>{" "}
					<br />
					<input className="search-input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Nhập tên cần tìm" />
					<button className="search-input1" onClick={() => handleSearch()}>
						Tìm
					</button>
					{filter.map((u) => (
						<li>
							{u.name} | {u.department} | {u.role} | {u.performanceScore}
							<button className="edit-button" onClick={() => navigate(`/edit/${u.id}`)}>
								Edit
							</button>
							<button className="edit-button" onClick={() => navigate(`/view/${u.id}`)}>
								Detail
							</button>
							<button className="edit-button" onClick={() => handleDelete(u.id)}>
								Xoá
							</button>
						</li>
					))}
				</div>
			</div>
		</>
	);
}
