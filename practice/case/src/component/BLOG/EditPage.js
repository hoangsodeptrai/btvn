import axios from "axios";
import { use, useEffect, useState } from "react";
import { URL_POST } from "../URL";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPage() {
	const [newImformation, setNewImformation] = useState({
		title: "",
		content: "",
		imageURL: "",
		visibility: "",
		authorId: "",
	});
	const navigate = useNavigate();
	const { id } = useParams();
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		axios.get(`${URL_POST}/${id}`).then((res) => {
			setNewImformation({ ...res.data, authorId: user.id || "" });
		});
	}, [id]);
	function handleEdit(e) {
		e.preventDefault();
		axios.put(`${URL_POST}/${id}`, newImformation).then(() => {
			setNewImformation({
				title: "",
				content: "",
				imageURL: "",
				visibility: "",
			});
		});
		navigate(`/view-post/${id}`);
	}

	return (
		<>
			<nav className="navbar bg-body-tertiary">
				<div className="container d-flex justify-content-between align-items-center">
					<a className="navbar-brand navba " href={`/view-post/${id}`}>
						<img src="https://i.pinimg.com/736x/90/19/c2/9019c2bc15185ac4be71d965696e88d3.jpg" width={30} height={24} alt="Back" /> quay lại
					</a>
				</div>
			</nav>
			{/*dfkjdfklkldffd*/}
			<form onSubmit={handleEdit}>
				<div>
					<div className="mb-3">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Nội dung
						</label>
						<input
							type="text"
							value={newImformation.title}
							onChange={(e) =>
								setNewImformation({
									...newImformation,
									title: e.target.value,
								})
							}
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="name@example.com"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleFormControlTextarea1" className="form-label">
							Giới thiệu
						</label>
						<textarea
							value={newImformation.content}
							onChange={(e) =>
								setNewImformation({
									...newImformation,
									content: e.target.value,
								})
							}
							className="form-control"
							id="exampleFormControlTextarea1"
							rows={3}
							defaultValue={""}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Ảnh
						</label>
						<input
							type="text"
							value={newImformation.imageURL}
							onChange={(e) =>
								setNewImformation({
									...newImformation,
									imageURL: e.target.value,
								})
							}
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="name@example.com"
						/>
					</div>
					<select
						value={newImformation.visibility}
						onChange={(e) =>
							setNewImformation({
								...newImformation,
								visibility: e.target.value,
							})
						}
						class="form-select"
						aria-label="Default select example"
					>
						<option value="public">public</option>
						<option value="private">private</option>
					</select>
				</div>
				<div className="edit-button">
					<button type="submit" class="btn btn-outline-success">
						Xác Nhận
					</button>
				</div>
			</form>
		</>
	);
}
