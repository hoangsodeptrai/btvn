import { use, useState } from "react";

export default function ListClass() {
	let [category, setCategory] = useState(["Lớp 1", "Lớp 2"]);
	let [newCategory, setNewCategory] = useState("");
	let [student, setStudent] = useState([
		{
			name: "Tên",
			age: 20,
			lop: "CH9D",
			point: 100,
		},
	]);
	let [newStudent, setNewStudent] = useState({
		name: "",
		age: "",
		lop: "",
		point: "",
	});
	let [topscore, setTopScore] = useState([]);
	let [sort, setSort] = useState("desc");
	let handldeSortByPoint = () => {
		let sorted = [...student].filter((s) => !isNaN(Number(s.point))).sort((a, b) => (sort === "tang" ? a.point - b.point : b.point - a.point));
		setStudent(sorted);
		setSort(sort === "tang" ? "desc" : "tang");
	};

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
	let handldeShowTop3 = () => {
		let sorted = [...student]
			.filter((s) => !isNaN(Number(s.point)))
			.sort((a, b) => b.point - a.point)
			.slice(0, 3);
		setTopScore(sorted);
	};
	let handle;

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
			<h5>Top 3 học sinh</h5>
			<button onClick={() => handldeShowTop3()}>Top3 nè</button>
			<ul>
				{topscore.map((s, index) => (
					<li>
						{index + 1}-{s.name}-{s.age}-{s.lop}-{s.point}
					</li>
				))}
			</ul>

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
			<button onClick={()=>handldeSortByPoint()}>Sắp xếp theo điểm </button>
		</>
	);
}
