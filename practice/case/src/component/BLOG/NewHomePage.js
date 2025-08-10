import { useEffect, useState } from "react";
import Header from "../Header";
import { URL_POST } from "../URL";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NewHeader from "../NewHeader";

export default function NewHomePage() {
	let [blog, setBlog] = useState([]);
	let [userId, setUserId] = useState(null);
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
		
		}
	}, []);
	const filterBlog = blog.filter((post) => {
		return post.visibility === "public" || post.authorId === userId;
	});

	return (
		<>
			<NewHeader></NewHeader>
			<div className="big-div">
				<div className="midder">
					{filterBlog.map((p,index) => (
						<div key={index} className="card" style={{ width: "18rem" }}>
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
