import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL_CUSTOMERS, URL_PRODCUTS, URL_USERS } from "../../CONST/URL";
import Header from "../Header";

export default function ViewCustumer() {
	let { id } = useParams();
	let [imformation, setImformation] = useState([]);
	let navigate = useNavigate();

	useEffect(() => {
		axios.get(`${URL_CUSTOMERS}/${id}`).then((res) => {
			setImformation(res.data);
		});
	}, [id]);

	return (
		<>
			<Header></Header>
			<div className="midder">
				<button className="nut-2" onClick={() => navigate("/cus")}>
					{" "}
					&lt; Quay lại{" "}
				</button>
			</div>
			<div>
				<h2>Xem thông tin chi tiết</h2>
				{imformation.email} | {imformation.phone} | {imformation.address} | {imformation.createdAt}
			</div>
		</>
	);
}
