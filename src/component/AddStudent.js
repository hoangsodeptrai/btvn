import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddStudent() {
	let [newStudent, setNewStudent] = useState("");
	let navigate = useNavigate();
	function handleOnChange(e) {
		const { name, value } = e.target;
		setNewStudent((prev) => ({
			...prev,
			[name]: value,
		}));
	}
	function addStudent() {
		axios.post("http://localhost:8888/students", newStudent).then(
			setNewStudent({
				name: "",
				class: "",
				gpa: "",
			})
		);

		navigate("/");
	}
	return (
		<>
			<input type="text" name="name" value={newStudent.name} onChange={handleOnChange} placeholder="them ten" />
			<input type="text" name="class" value={newStudent.class} onChange={handleOnChange} placeholder="them lop" />
			<input type="text" name="gpa" value={newStudent.gpa} onChange={handleOnChange} placeholder="them gpa" />
			<button onClick={addStudent}>ThÊM</button>
		</>
	);
}
