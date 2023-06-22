import { createContext,useState } from "react";

const UserContext=createContext();
const UserState=(props)=>{
const[user,setUser]=useState([]);
// useEffect(()=>{
//     // console.log("Current users are :",user)
// },[user])
    return(
        <UserContext.Provider value={{user:user,setUser:setUser}}>
            {props.children}
        </UserContext.Provider>
    )

}
export {UserContext,UserState};