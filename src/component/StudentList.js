import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StudentList() {
	let [student, setStudent] = useState([]);
	let navigate = useNavigate();

	function loadStudent() {
		axios.get("http://localhost:8888/students").then((respone) => setStudent(respone.data));
	}
	useEffect(() => loadStudent(), []);
	console.log(student);
	function handleDelete(id) {
		const isConfirm = window.confirm("Bạn có chắc muốn xóa sinh viên này không?");
		if (!isConfirm) return;
		axios.delete(`http://localhost:8888/students/${id}`).then(() => loadStudent());
	}
	return (
		<>
			<h1>List Student</h1>
			<button onClick={() => navigate("/add")}>Tạo mới</button>
			{student.map((st) => (
				<h4>
					{st.name}-{st.class}-{st.gpa}
					<button onClick={()=>handleDelete(st.id)} >Xoá</button>
				</h4>
			))}
		</>
	);
}
