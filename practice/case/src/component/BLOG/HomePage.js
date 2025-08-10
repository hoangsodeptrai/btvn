import { useEffect, useState } from "react";
import Header from "../Header";
import { URL_POST } from "../URL";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function HomePage() {
	let [blog, setBlog] = useState([]);
	let [userId, setUserId] = useState(null);
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const searchTerm = searchParams.get("search")?.toLowerCase() || "";
	let navigate = useNavigate();
	function loadPost() {
		axios.get(URL_POST).then((res) => {
			setBlog(res.data);
		});
	}
	useEffect(() => {
		loadPost();
	}, []);
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			setUserId(user.id);
			navigate("/home");
		}
	}, []);
	const filterBlog = blog.filter((post) => {
		const isVisible = post.visibility === "public" || post.authorId === userId;
		const matchSearch = post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm);
		return isVisible && matchSearch;
	});

	return (
		<>
			<Header></Header>
			<div className="big-div">
				<div className="midder">
					{filterBlog.map((p) => (
						<div className="card" style={{ width: "18rem" }}>
							<img style={{ height: "286px" }} src={p.imageURL} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{p.title}</h5>
								<p style={{ height: "48px" }} className="card-text">
									{p.content}
								</p>
								<Link to={`/view-post/${p.id}`} className="btn btn-primary">
									Thông Tin
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
