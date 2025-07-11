import { useState } from "react";

export default function ListClass() {
	let [category, setCategory] = useState(["Lớp 1", "Lớp 2"]);
	let [newCategory, setNewCategory] = useState("");
	let [student, setStudent] = useState([
		{
			name: "Tên",
			age: "Tuổi",
			lop: "Lớp",
			point: "Điểm",
		},
	]);
	let [newStudent, setNewStudent] = useState({
		name: "",
		age: "",
		lop: "",
		point: "",
	});

	let handldeAddClass = () => {
		if (newCategory && !category.includes(newCategory)) {
			setCategory([...category, newCategory]);
			setNewCategory("");
		}
	};
	let handleDelete = (className) => {
		setCategory(category.filter((c) => c !== className));
	};
	let handldeAddStudent = () => {
		setStudent([...student, newStudent]);
		setNewStudent({ name: "", age: "", class: "", point: "" });
	};
	let handldeDeleteStudent = (students) => {
		setStudent(student.filter((s) => s !== students));
	};

	return (
		<>
			<h1>Dánh sách lớp học</h1>
			<input type="text" value={newCategory} placeholder="Thêm lớp" onChange={(e) => setNewCategory(e.target.value)} />
			<button onClick={() => handldeAddClass()}>Thêm lớp</button>
			<h2>
				<ul>
					{category.map((cl) => (
						<li>
							{cl} <button onClick={() => handleDelete(cl)}>Xoá</button>
						</li>
					))}
				</ul>
			</h2>
			<h1>Danh sách học viên</h1>
			<input type="text" value={newStudent.name} placeholder="Thêm tên" onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} />
			<input type="text" value={newStudent.age} placeholder="Thêm tuổi" onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })} />
			<select value={newStudent.lop} onChange={(e) => setNewStudent({ ...newStudent, lop: e.target.value })}>
				<option value="">--Chọn lớp--</option>
				{category.map((cl, idx) => (
					<option key={idx} value={cl}>
						{cl}
					</option>
				))}
			</select>
			<input type="text" value={newStudent.point} placeholder="Thêm điểm" onChange={(e) => setNewStudent({ ...newStudent, point: e.target.value })} />
			<button onClick={() => handldeAddStudent()}>Thêm học viên</button>
			<h2>
				<ul>
					{student.map((st) => (
						<li>
							{st.name} - {st.age} - {st.lop} - {st.point}
							<button onClick={() => handldeDeleteStudent(st)}>Xoa</button>
						</li>
					))}
				</ul>
			</h2>
		</>
	);
}
