import { Link, useNavigate } from 'react-router-dom'; 
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

function Home(){

  const {user} = useContext(UserContext)
  
  
  return(
    <>
    
    <h1>Welcome {user.username} !</h1>
    
    
    
    </>
  )



}

export default Home