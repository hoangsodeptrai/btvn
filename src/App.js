import logo from "./logo.svg";
import "./App.css";
import StudentList from "./component/StudentList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./component/AddStudent";

function App() {
	return (
		<Routes>
			<Route path="/" element={<StudentList />} />
      <Route path="/add" element={<AddStudent/>} />
		</Routes>
	);
}

export default App;
