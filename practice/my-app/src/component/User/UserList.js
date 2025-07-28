import { useEffect, useState } from "react";
import HomeList from "../Header";
import axios from "axios";
import { URL_USERS } from "../../CONST/URL";
export default function UserList() {
	let [user, setUser] = useState([]);
	useEffect(() => {
		axios.get(URL_USERS).then((res) => setUser(res.data));
	});

	return (
		<>
			<HomeList></HomeList>
			<div className="user">
				<div className="left-1"></div>
				<div className="right-1">
                    {user.map((u)=>(
                        <li>
                            {u.name}-{u.department}
                        </li>
                    ))}
                </div>
			</div>
		</>
	);
}
