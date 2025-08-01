import axios from "axios";
import { useEffect, useState } from "react";
import { URL_CUSTOMERS } from "../../CONST/URL";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

export default function CustumerList() {
	let [customers, setCustumers] = useState([]);
	let [search, setSearch] = useState("");
	let [filterCus, setFilterCus] = useState([]);
	let navigate = useNavigate();
	function loadCustumer() {
		axios.get(URL_CUSTOMERS).then((res) => {
			setCustumers(res.data);
			setFilterCus(res.data);
		});
	}
	useEffect(() => {
		loadCustumer();
	}, []);
	function handleSearch() {
		let filterCustumer = customers.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
		setFilterCus(filterCustumer);
	}
	function handleDelete(id) {
		axios.delete(`${URL_CUSTOMERS}/${id}`).then(() => {
			loadCustumer();
		});
	}
	return (
		<>
			<Header></Header>
			<input className="search-input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Nhập tên cần tìm" />
			<button onClick={handleSearch}>Tìm</button>
			<button onClick={() => navigate("/add-cus")}>Thêm khách</button>
			<h2>Danh sách khách</h2>
			{filterCus.map((cus) => (
				<ul>
					<li>
						{cus.name}
						<button onClick={() => handleDelete(cus.id)}>Xoá</button>
                        <button onClick={() => navigate(`/edit-cus/${cus.id}`)}>Edit</button>
                        <button onClick={() => navigate(`/view-cus/${cus.id}`)}>View</button>
					</li>
				</ul>
			))}
		</>
	);
}
