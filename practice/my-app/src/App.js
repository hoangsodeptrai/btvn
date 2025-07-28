import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./component/Header";
import AddPage from "./component/User/AddPage";
import EditPage from "./component/User/EditPage";
import ViewPage from "./component/User/ViewPage";
import Register from "./component/Login/Register";
import Login from "./component/Login/Login";
import "./list.css";
import UserList from "./component/User/UserList";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Header />}></Route>
			<Route path="/add" element={<AddPage />}></Route>
			<Route path="/edit/:id" element={<EditPage />}></Route>
			<Route path="/view/:id" element={<ViewPage />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/register" element={<Register />}></Route>
			<Route path="/user" element={<UserList />}></Route>
		</Routes>
	);
}

export default App;
