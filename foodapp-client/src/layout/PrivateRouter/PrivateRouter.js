import React, { Children, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner';
import { Navigate } from 'react-router-dom';


const PrivateRouter = ({children}) => {
    const{user,createUser,loading} =useContext(AuthContext);
    const location=useLocation();
   if(loading){
    return <LoadingSpinner/>
   }
   if(user){
    return Children;
   }

  return (
   <Navigate to="/signup" state={{from:location}} replace></Navigate>
  )
}

export default PrivateRouter