import { useContext } from 'react';
import {NavLink } from 'react-router-dom';
import { AuthContext } from '../redux/Auth/authContext';
import Logout from './Logout';

const Navbar = (props) => {
   const {isAuthenticated} = useContext(AuthContext);
   // const [state, dispatch] = useReducer(authReducer);

   return (
      <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
         <div className="container">
            <div className="row row-cols-3 w-100">
               <div className="navbar-brand mr-10 col-xl-2">
                  Todo: Let's do it!
               </div>

               <ul className="navbar-nav col-xl-6 offset-xl-2 d-flex justify-content-between">
                  {
                     console.log('SSSSSisAuthenticated', isAuthenticated)}
                  {
                     localStorage.getItem('token')
                     ? (
                        <>
                           <li className="nav-item">
                              <NavLink to="/1" exact className="nav-link">All tasks</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink to="/about" className="nav-link">About project</NavLink>
                           </li>
                           <li>
                              <Logout />
                           </li>
                        </>
                     )
                     : (
                        <>
                           <li className="nav-item">
                              <NavLink to="/about" className="nav-link">About project</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink to="/auth" className="btn btn-info mr-1">SignIn/SignUp</NavLink>
                           </li>
                        </>
                     )
                  }

                  

               </ul>
            </div>
         </div>
      </nav>
   )
}

export default Navbar