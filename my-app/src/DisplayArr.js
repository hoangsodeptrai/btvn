import { useState } from "react";

export default function DisplayArr() {
  let [user,setUser]=useState();
  let [pass,setPass]=useState();
  

 return(
    <>
    <input type="text" value={user} onChange={e =>{
        setUser(e.target.value)
    }}/>
    <input type="text" value={pass} onChange={e=>{
        setPass(e.target.value)
    }}/>
    <button onClick={()=>{
        if (user==0,pass==0) {
            console.log("không đăng nhập đc")
        } else {
            console.log('xin chao admin')
        }
    }}></button>
    
    </>
 )
console.log(user)
}