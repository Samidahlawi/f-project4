import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss';

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
   {/* new */}
  
  </React.Fragment>
)



const alwaysOptions = (
  <React.Fragment>
      <Link to ='/about'>About</Link>
      <Link to ="/works">How it works</Link>
      <Link to="/">Home</Link>
  
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
  
    <Link to="/events"> Events</Link>
    <Link to="/sign-in">Sign In</Link>
    <Link to="/sign-up">Sign Up</Link>
  </React.Fragment>
)
const checkAdminOrNot = (user) => {
  console.log(user)
  // if(user.admin){
  //   return <Link to="/events/create"> create </Link> 
  // }else{
  //   return ""
  // }
}
const Header = ({ user }) => (
  <header className="Nav">
    <div className="topnav">
      <nav className="nav1">
        <div> 
        <h1 className="ln">xHunts</h1>
        </div>
       
         <div>
         { user && <span>Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
        {user ? 
       
        user.admin ? <Link to="/events/create/event"> create </Link> :""
     
        : ""}
        { alwaysOptions }
         </div>
        
      </nav>
    </div>
  </header>
)

export default Header;