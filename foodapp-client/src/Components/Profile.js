import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

const Profile = ({user}) => {
 
  const {logout}=useContext(AuthContext);


  // logout
  const handleLogout = () => {
    logout().then((result)=>{
    alert("logout");
    })
  };

  return (
    <div className="drawer drawer-end z-index-1">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Page content here */}
      <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle avatar">  <div className="w-10 rounded-full">
        {
            user.photoURL ?     <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL} /> : <img src='data:image/jpeg;base64,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' alt=''/>
        }
      

        </div></label>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <li><a href='/update-profile'>Profile</a></li>
        <li><a>Orders</a></li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Profile