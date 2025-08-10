import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
	let navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");
	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`/home?search=${encodeURIComponent(searchTerm)}`);
	};
	return (
		<>
			<nav class="navbar navbar-expand-lg bg-light custom-navbar ">
				<div class="container-fluid">
					<a class="navbar-brand" href="/">
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
								<a class="nav-link active" aria-current="page" href="/login">
									Đăng Nhập
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/register">
									Đăng Ký
								</a>
							</li>
						</ul>
						<form class="d-flex" role="search">
							<input
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>

							<button class="btn btn-outline-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
}
