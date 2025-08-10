import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_POST } from "../URL";
import Header from "../Header";

export default function AddPage() {
	let navigate = useNavigate();
	let [title, setTitle] = useState("");
	let [content, setContent] = useState("");
	let [authorId, setAuthorId] = useState(null);
	let [imageURL, setImageURL] = useState("");
	let [visibility, setVisibility] = useState("public");
	let [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect((e) => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user && user.id) {
			setAuthorId(user.id);
			setIsAuthenticated(true);
		} else {
			alert("Bạn cần đăng nhập để thêm bài viết");
			navigate("/");
		}
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		const newPost = {
			title,
			content,
			imageURL,
			visibility,
			authorId,
		};
		axios.post(URL_POST, newPost).then(() => {
			alert("Thêm bài viết thành công");
			navigate("/home");
		});
	};
	return (
		<>
			{isAuthenticated && (
				<>
					<nav className="navbar bg-body-tertiary">
						<div className="container">
							<a className="navbar-brand" href="/home">
								<img src="https://i.pinimg.com/736x/90/19/c2/9019c2bc15185ac4be71d965696e88d3.jpg" width={30} height={24} /> quay lai
							</a>
						</div>
					</nav>
					<div>
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="exampleFormControlInput1" className="form-label">
									Tiêu Đề
								</label>
								<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleFormControlInput1" />
							</div>
							<div className="mb-3">
								<label htmlFor="exampleFormControlTextarea1" className="form-label">
									Nội Dung
								</label>
								<textarea
									value={content}
									onChange={(e) => setContent(e.target.value)}
									className="form-control"
									id="exampleFormControlTextarea1"
									rows={3}
									defaultValue={""}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="formGroupExampleInput" className="form-label">
									Thêm Địa Chỉ Hình Ảnh
								</label>
								<input
									type="text"
									value={imageURL}
									onChange={(e) => setImageURL(e.target.value)}
									className="form-control"
									id="formGroupExampleInput"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Chế độ hiển thị</label>
								<select className="form-select" value={visibility} onChange={(e) => setVisibility(e.target.value)}>
									<option value="public">Công khai</option>
									<option value="private">Riêng tư</option>
								</select>
							</div>
							<button type="submit" class="btn btn-info">
								Thêm Bài Viết
							</button>
						</form>
					</div>
				</>
			)}
		</>
	);
}
