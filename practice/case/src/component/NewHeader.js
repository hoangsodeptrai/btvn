import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewHeader() {
	let navigate = useNavigate();
	let [crrUser, setCrrUser] = useState(null);
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		setCrrUser(user);
	}, []);
	function handleLogOut() {
		localStorage.removeItem("user");
		navigate("/");
		alert("đã đăng xuất");
	}
	return (
		<>
			<nav class="navbar navbar-expand-lg bg-light custom-navbar ">
				<div class="container-fluid">
					<a class="navbar-brand" href="/home">
						Blog
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#"></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#"></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/add-post">
									Thêm bài viết
								</a>
							</li>
						</ul>
						<form class="d-flex" role="search">
							<div className="dropdown">
								{/* Nút icon (ví dụ icon người dùng) */}
								<button className="btn dropdown-toggle border-0 bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<img src="https://i.pinimg.com/736x/90/19/c2/9019c2bc15185ac4be71d965696e88d3.jpg" width={30} height={24} alt="Back" />
									{crrUser?.name}
								</button>

								{/* Menu khi click vào icon */}

								<ul className="dropdown-menu dropdown-menu-end">
									<li>
										<button onClick={() => navigate(`/edit-user/${crrUser?.id}`)} className="dropdown-item" type="button">
											Sửa
										</button>
									</li>
								</ul>
							</div>
							<button class="btn btn-outline-success" onClick={handleLogOut} type="button">
								LogOut
							</button>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
}
