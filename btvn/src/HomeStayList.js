import { use, useState } from "react";
import "./styles.css";

export default function HomeStayList() {
	let [owner, setOwner] = useState([
		{
			name: "Hoàng",
			phone: "09818402812",
			email: "hhoanghoang@gmail.com",
		},
	]);
	let [newOwner, setNewOwner] = useState({
		name: "",
		phone: "",
		email: "",
	});
	let [homestayList, setHomestayList] = useState([
		{
			namehs: "Tên",
			price: "Giá",
			address: "Địa chỉ",
			room: "Phòng",
			owner: "Chủ sở hữu",
			hire: "Lượt thuê",
		},
	]);
	let [newHomeStay, setNewHomeStay] = useState({
		namehs: "",
		price: "",
		address: "",
		room: "",
		owner: "",
		hire: 0,
	});
	let [search, setSearch] = useState("");
	let [sort, setSort] = useState("");
    let handldeUpHire =(index)=>{
        let updateList = homestayList.map((h,i)=>{
            if(i===index){
                return {...h,hire:h.hire+1}
            }
            return h
        })
        setHomestayList(updateList)
    }
	let handleSort = (order) => {
		let sorted = [...homestayList].sort((a, b) => {
			return order === "up" ? Number(a.price) - Number(b.price) : Number(b.price) - Number(a.price);
		});
		setHomestayList(sorted);
		setSort(order);
	};
	let handleSearchByName = () => {
		let filteredSearchByName = homestayList.filter((n) => n.namehs.toLowerCase().includes(search.toLowerCase()));
		setHomestayList(filteredSearchByName);
	};
	let handleAddOwner = () => {
		if (newOwner && !owner.includes(setNewOwner)) {
			setOwner([...owner, newOwner]);
			setNewOwner("");
		}
	};
	let handleAddHomeStay = () => {
		setHomestayList([...homestayList, newHomeStay]);
		setNewHomeStay({ namehs: "", price: "", address: "", room: "", owner: "", hire: 0 });
	};
	let handleDeleteName = (nameToDelete) => {
		setOwner(owner.filter((o) => o.name !== nameToDelete));
	};

	return (
		<>
			<div className="content">
				<div className="Owner">
					<h2>Thông tin chủ phòng</h2>
					<input
						type="text"
						placeholder="Thêm tên chủ homestay"
						value={newOwner.name}
						onChange={(e) => setNewOwner({ ...newOwner, name: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Thêm sđt chủ homestay"
						value={newOwner.phone}
						onChange={(e) => setNewOwner({ ...newOwner, phone: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Thêm email chủ homestay"
						value={newOwner.email}
						onChange={(e) => setNewOwner({ ...newOwner, email: e.target.value })}
					/>
					<button onClick={() => handleAddOwner()}>Thêm chủ homestay</button>

					<h5 className="yo">
						{owner.map((o, index) => (
							<li>
								{index + 1} {" - "}
								{o.name}
								{" - "}
								{o.phone}
								{" - "}
								{o.email}
								<button onClick={() => handleDeleteName(o.name)}>Xoá</button>
							</li>
						))}
					</h5>
				</div>
			</div>
			<div className="Homestay">
				<div>
					<h2>HomeStay information</h2>
				</div>
				<div>
					<input
						type="text"
						value={newHomeStay.namehs}
						placeholder="Nhập tên homestay"
						onChange={(e) => setNewHomeStay({ ...newHomeStay, namehs: e.target.value })}
					/>
					<input
						type="text"
						value={newHomeStay.price}
						placeholder="Nhập giá homestay"
						onChange={(e) => setNewHomeStay({ ...newHomeStay, price: e.target.value })}
					/>
					<input
						type="text"
						value={newHomeStay.address}
						placeholder="Nhập địa chỉ homestay"
						onChange={(e) => setNewHomeStay({ ...newHomeStay, address: e.target.value })}
					/>
					<input
						type="text"
						value={newHomeStay.room}
						placeholder="Nhập phòng homestay"
						onChange={(e) => setNewHomeStay({ ...newHomeStay, room: e.target.value })}
					/>
					<select value={newHomeStay.owner} onChange={(e) => setNewHomeStay({ ...newHomeStay, owner: e.target.value })}>
						<option value="">Chủ sở hữu</option>
						{owner.map((o, idx) => (
							<option key={idx} value={JSON.stringify(o)}>
								{o.name} - {o.phone} - {o.email}
							</option>
						))}
					</select>{" "}
					<button onClick={() => handleAddHomeStay()}>Thêm</button>
					
					<input type="text" placeholder="Tìm theo tên" value={search} onChange={(e) => setSearch(e.target.value)} />
					<button onClick={() => handleSearchByName()}>Tìm theo tên</button> 
					<button onClick={() => handleSort("up")}>Giá tăng dần</button>
					<button onClick={() => handleSort("down")}>Giá tăng dần</button>
					<h5>
						{homestayList.map((h, index) => (
							<li>
								{h.namehs} - {h.price} - {h.address} - {h.room} - {h.owner} - {h.hire}
                                <button onClick={()=>handldeUpHire(index)}>Thêm lượt thuê</button>
							</li>
						))}
					</h5>
				</div>
			</div>
		</>
	);
}
