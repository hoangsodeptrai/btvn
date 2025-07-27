import axios from "axios";
import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ViewPage() {
	let [user, setUser] = useState([]);
	let [newReviews, setNewReviews] = useState({
		criteria: "",
		score: "",
		comment: "",
		date: "",
		reviewer: "",
	});
	let navigate = useNavigate();
	let { id } = useParams();
	function loadUser() {
		axios.get(`http://localhost:8888/users/${id}`).then((res) => setUser(res.data));
	}
	useEffect(() => loadUser(), [id]);
	let handleOnChange = (e) => setNewReviews({ ...newReviews, [e.target.name]: e.target.value });

	let handleAddReviews = () => {
		axios
			.put(`http://localhost:8888/users/${user.id}`, { ...user, reviews: [...(user.reviews || []), { ...newReviews, id: Date.now() }] })
			.then((res) => {
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
            <button onClick={()=>navigate('/')} >quay lại</button>
			<h2>Danh sách đánh giá</h2>

			<h5>
				{user.name} - {user.department} - {user.role}-{user.performanceScore}
			</h5>
			{user.reviews && (
				<div>
					<h2>Đánh giá</h2>

					{user.reviews.map((re) => (
						<h4>
							{re.criteria} - {re.score} - {re.comment} - {re.date} - {re.reviewer}
						</h4>
					))}
				</div>
			)}
			<input type="text" name="criteria" value={newReviews.criteria} onChange={handleOnChange} placeholder="Nhập c" />
			<input type="text" name="score" value={newReviews.score} onChange={handleOnChange} placeholder="Nhập c" />
			<input type="text" name="comment" value={newReviews.comment} onChange={handleOnChange} placeholder="Nhập c" />
			<input type="text" name="date" value={newReviews.date} onChange={handleOnChange} placeholder="Nhập c" />
			<input type="text" name="reviewer" value={newReviews.reviewer} onChange={handleOnChange} placeholder="Nhập c" />
			<button onClick={handleAddReviews}>add</button>
		</>
	);
}
