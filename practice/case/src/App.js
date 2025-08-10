import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./component/BLOG/HomePage";
import "./blog.css";
import RegisterPage from "./component/LOGIN/RegisterPage";
import LoginPage from "./component/LOGIN/LoginPage";
import AddPage from "./component/BLOG/AddPage";
import DetailPage from "./component/BLOG/DetailPage";
import NewHomePage from "./component/BLOG/NewHomePage";
import EditPage from "./component/BLOG/EditPage";
import EditUser from "./component/LOGIN/EditUser";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />}></Route>
			<Route path="/home" element={<NewHomePage />}></Route>
			<Route path="/register" element={<RegisterPage />}></Route>
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/add-post" element={<AddPage></AddPage>}></Route>
			<Route path="/view-post/:id" element={<DetailPage></DetailPage>}></Route>
			<Route path="/edit-post/:id" element={<EditPage></EditPage>}></Route>
			<Route path="/edit-user/:id" element={<EditUser></EditUser>}></Route>
		</Routes>
	);
}

export default App;
