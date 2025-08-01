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
import ListProducts from "./component/Products/ListProducts";
import AddProduct from "./component/Products/AddProduct";
import EditProduct from "./component/Products/EditProduct";
import ViewProduct from "./component/Products/ViewProduct";
import CustumerList from "./component/Customer/CustumerList";
import AddCustumer from "./component/Customer/AddCustumer";
import EditCustumer from "./component/Customer/EditCustumer";
import ViewCustumer from "./component/Customer/ViewCustumer";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Header />}></Route>
			<Route path="/add" element={<AddPage />}></Route>
			<Route path="/edit/:id" element={<EditPage />}></Route>
			<Route path="/view/:id" element={<ViewPage />}></Route>
			<Route path="/user" element={<UserList />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/register" element={<Register />}></Route>
			<Route path="/product" element={<ListProducts />}></Route>
			<Route path="/add-product" element={<AddProduct />}></Route>
			<Route path="/edit-product/:id" element={<EditProduct />}></Route>
			<Route path="/view-product/:id" element={<ViewProduct />}></Route>
			<Route path="/cus" element={<CustumerList />}></Route>
			<Route path="/add-cus" element={<AddCustumer />}></Route>
			<Route path="/edit-cus/:id" element={<EditCustumer />}></Route>
			<Route path="/view-cus/:id" element={<ViewCustumer />}></Route>
		</Routes>
	);
}

export default App;
