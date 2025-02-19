import UserContext from "./UserContext"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const UserProvider = ({children}) => {

  const [user,setUser] = useState({homeAddress : "",username : "Guest"})  
  
  return(

      <UserContext.Provider value={{user,setUser}}>
        {children}
      </UserContext.Provider>



    );



}

export default UserProvider;

