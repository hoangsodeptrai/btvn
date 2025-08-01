import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL_PRODCUTS, URL_USERS } from "../../CONST/URL";
import Header from "../Header";

export default function ViewProduct() {
	let { id } = useParams();
	let [stocks, setStocks] = useState([]);
	let navigate = useNavigate();

	useEffect(() => {
		axios.get(`${URL_PRODCUTS}/${id}`).then((res) => {
			setStocks(res.data);
		});
	}, [id]);
	let updateStock = (nut) => {
		const updated = { ...stocks, stock: stocks.stock + nut };
		axios.put(`${URL_PRODCUTS}/${id}`, updated).then(() => {
			setStocks(updated);
		});
	};

	return (
		<>
			<Header></Header>
			<div className="midder">
				<button className="nut-2" onClick={() => navigate("/product")}>
					{" "}
					&lt; Quay lại{" "}
				</button>
			</div>
			<div>
				<h2>Xem thông tin chi tiết</h2>
				<strong>Còn</strong> : {stocks.stock} sản phẩm | {stocks.createdAt}
                <button onClick={()=>updateStock(1)} >Tăng</button>
                <button onClick={()=>updateStock(-1)} >Giảm</button>
			</div>
		</>
	);
}
