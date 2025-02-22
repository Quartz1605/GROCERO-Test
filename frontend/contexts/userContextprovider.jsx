import UserContext from "./UserContext"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const UserProvider = ({children}) => {

  
  const savedAddress = localStorage.getItem("homeAddress") || ""
  const name = localStorage.getItem("username") || "Guest"
  const [user,setUser] = useState({homeAddress : savedAddress,username : name})  
  
  return(

      <UserContext.Provider value={{user,setUser}}>
        {children}
      </UserContext.Provider>



    );



}

export default UserProvider;

