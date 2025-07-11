import { useState } from "react";

export default function ListNumber() {
	let [arr, setArr] = useState([1, 2]);
	let [a, setA] = useState(0);
	let total = arr.reduce((sum, crr) => sum + crr, 0);

	return (
		<>
			<h1>
				{arr.map((i) => (
					<>{i},</>
				))}
			</h1>
			<input
				type="text"
				value={a}
				onChange={(e) => {
					setA(+e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setArr([...arr, a]);
				}}
			>
				Thêm
			</button>
			<span>Tong ={total}</span>
		</>
	);
}
