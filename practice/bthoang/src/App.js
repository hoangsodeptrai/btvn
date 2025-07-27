import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import HomeList from "./component/HomeList";
import LoginPage from "./component/LoginPage";
import RegisterPage from "./component/RegisterPage";
import AddPage from "./component/AddPage";
import EditPage from "./component/EditPage";
import ViewPage from "./component/ViewPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomeList />}></Route>
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/register" element={<RegisterPage />}></Route>
			<Route path="/add" element={<AddPage />}></Route>
			<Route path="/edit/:id" element={<EditPage />}></Route>
			<Route path="/view/:id" element={<ViewPage />}></Route>
		</Routes>
	);
}

export default App;
