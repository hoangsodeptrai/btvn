import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL_USERS } from "../../CONST/URL";
import Header from "../Header";
export default function ViewPage() {
	let { id } = useParams();
	let navigate = useNavigate();
	let [user, setUser] = useState([]);
	let [newReviews, setNewReviews] = useState({
		criteria: "",
		score: "",
		comment: "",
		date: "",
		reviewer: "",
	});

	function loadUser() {
		axios.get(`${URL_USERS}/${id}`).then((res) => {
			setUser(res.data);
		});
	}
	useEffect(() => {
		loadUser();
	}, [id]);
	let handleOnChange = (e) => {
		setNewReviews({
			...newReviews,
			[e.target.name]: e.target.value,
		});
	};
	let handleAddReviews = () => {
		axios.put(`${URL_USERS}/${id}`, { ...user, reviews: [...(user.reviews || []), newReviews] }).then((res) => {
			setUser(res.data);
			setNewReviews({
				criteria: "",
				score: "",
				comment: "",
				date: "",
				reviewer: "",
			});
		});
	};
	return (
		<>
			<Header></Header>
			<div className="midder">
				<button className="nut-2" onClick={() => navigate("/user")}>
					{" "}
					&lt; Quay lại{" "}
				</button>
			</div>
			<div>
				<h2>Xem thông tin chi tiết</h2>
				{user && (
					<ul>
						<li>
							<strong>Họ và tên:</strong> {user.name}
						</li>
						<li>
							<strong>Phòng ban:</strong> {user.department}
						</li>
						<li>
							<strong>Role:</strong> {user.role}
						</li>
						<li>
							<strong>PerformanceScore:</strong> {user.performanceScore}
						</li>
					</ul>
				)}
				<h3>Danh sách đánh giá</h3>
				{user.reviews && (
					<ul>
						{user.reviews.map((r) => (
							<ul>
								<li>
									{r.criteria},{r.score},{r.comment}, <strong>Ngày:</strong> {r.date}
								</li>
							</ul>
						))}
					</ul>
				)}
				<input type="text" className="login" value={newReviews.criteria} name="criteria" onChange={handleOnChange} placeholder="Nhập criteria " />{" "}
				<br />
				<input type="text" className="login" value={newReviews.score} name="score" onChange={handleOnChange} placeholder="Nhập score " /> <br />
				<input type="text" className="login" value={newReviews.comment} name="comment" onChange={handleOnChange} placeholder="Nhập comment " /> <br />
				<input type="text" className="login" value={newReviews.date} name="date" onChange={handleOnChange} placeholder="Nhập criteria " /> <br />
				<button className="search-input1" onClick={() => handleAddReviews()}>
					Thêm
				</button>
			</div>
		</>
	);
}
