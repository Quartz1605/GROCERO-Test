import { useContext } from "react"
import UserContext from "../../contexts/UserContext"

function Profile(){
  
  const { user } = useContext(UserContext)
  
  
  return(
    <div className="flex flex-col items-center justify-center h-screen">
      <h4 className="block">Welcome <b className="text-xl">{user.username}</b> to your profile.</h4>
      
      
      <div className="text-black">
        Address: {user ? user.homeAddress : "Failed to Fetch address"} 
        </div>
    </div>
  )
    
}

export default Profile