import axios from "axios";
import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL_POST, URL_USER } from "../URL";
import Header from "../Header";

export default function DetailPage() {
	const { id } = useParams();
	const [imformation, setImformation] = useState(null);
	const [authorId, setAuthorId] = useState(null);
	let [autherName, setAutherName] = useState("");
	let [newComment, setNewComment] = useState({
		content: "",
		userId: "",
	});
	let [strUser, setStrUser] = useState(null);
	const [commentUser, setCommentUser] = useState({});
	let navigate = useNavigate();
	useEffect(() => {
		axios.get(`${URL_POST}/${id}`).then((res) => {
			setImformation(res.data);
			axios.get(`${URL_USER}/${res.data.authorId}`).then((nameAuthor) => {
				setAutherName(nameAuthor.data);
			});
			const comment = res.data.comments || [];
			const uniqueUser = [...new Set(comment.map((cmt) => cmt.userId))];
			Promise.all(
				uniqueUser.map((userId) =>
					axios.get(`${URL_USER}/${userId}`).then((res) => ({
						userId,
						name: res.data.name,
					}))
				)
			).then((users) => {
				const userMap = {};
				users.forEach((u) => {
					userMap[u.userId] = u.name;
				});
				setCommentUser(userMap);
			});
		});
	}, [id]);
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user && user.id) {
			setAuthorId(user.id);
			setStrUser(user.id);
		}
	}, []);
	if (!imformation) return <p>Đang tải</p>;
	const { title, content, imageURL, comments = [] } = imformation;
	function handleBack() {
		if (strUser && strUser.id) {
			navigate("/home");
		} else {
			navigate("/");
		}
	}
	function handleDelete(id) {
		axios.delete(`${URL_POST}/${id}`).then(() => {
			navigate("/home");
		});
	}
	function handleAddComment() {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			const upComment = {
				userId: user.id,
				content: newComment.content,
			};
			const updateComment = [...(imformation.comments || []), upComment];
			axios.patch(`${URL_POST}/${id}`, { comments: updateComment }).then(() => {
				setImformation((prev) => ({
					...prev,
					comments: updateComment,
				}));
			});
			setNewComment({
				...upComment,
				content: "",
			});
		} else {
			alert("Cần đăng nhập để bình luận");
		}
	}
	function handleDeleteComment(indexToDelete) {
		const updatedComments = imformation.comments.filter((_, index) => index !== indexToDelete);

		axios.patch(`${URL_POST}/${id}`, { comments: updatedComments }).then(() => {
			setImformation((prev) => ({
				...prev,
				comments: updatedComments,
			}));
		});
	}

	return (
		<>
			<nav className="navbar bg-body-tertiary">
				<div className="container d-flex justify-content-between align-items-center">
					<button className="navbar-brand navba " onClick={handleBack}>
						<img src="https://i.pinimg.com/736x/90/19/c2/9019c2bc15185ac4be71d965696e88d3.jpg" width={30} height={24} alt="Back" /> quay lại
					</button>

					{/* ICON bên phải */}
					{authorId === imformation.authorId && (
						<div>
							<div className="dropdown">
								{/* Nút icon (ví dụ icon người dùng) */}
								<button className="btn dropdown-toggle border-0 bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<img src="https://i.pinimg.com/736x/90/19/c2/9019c2bc15185ac4be71d965696e88d3.jpg" width={30} height={24} alt="Back" />
								</button>

								{/* Menu khi click vào icon */}

								<ul className="dropdown-menu dropdown-menu-end">
									<li>
										<button onClick={() => navigate(`/edit-post/${id}`)} className="dropdown-item" type="button">
											Sửa
										</button>
									</li>
									<li>
										<button className="dropdown-item" onClick={() => handleDelete(id)} type="button">
											Delete
										</button>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</nav>
			<div className="container mt-4">
				<h2>{title}</h2>
				<img src={imageURL} style={{ width: "286px", height: "286px" }} alt={title} className="img-fluid my-3" />
				<p>{content}</p>
				<p>
					{" "}
					<strong>Tác giả:</strong> {autherName.name}
				</p>

				<hr />
				<h4>Bình luận</h4>
				<form onSubmit={handleAddComment}>
					<div class="mb-3">
						<textarea
							value={newComment.content}
							onChange={(e) =>
								setNewComment({
									...newComment,
									content: e.target.value,
								})
							}
							onKeyDown={(e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									handleAddComment(e);
								}
							}}
							class="form-control"
							placeholder="Bình Luận"
							id="exampleFormControlTextarea1"
							rows="3"
						></textarea>
					</div>
				</form>

				{comments.length === 0 ? (
					<p>Không có bình luận nào</p>
				) : (
					<ul className="list-group">
						{comments.map((cmt, index) => (
							<li key={index} className="list-group-item d-flex justify-content-between">
								<span>{cmt.content}</span>
								<span className="text-muted" style={{ fontSize: "0.875rem" }}>
									{commentUser[cmt.userId] || "Ẩn danh"}
								</span>
								{strUser === cmt.userId && (
									<button onClick={() => handleDeleteComment(index)} className="btn btn-sm btn-danger">
										Xoá
									</button>
								)}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
}
