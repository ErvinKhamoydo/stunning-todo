import {NavLink} from 'react-router-dom';

export const Navbar = () => (
   <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <div className="container">
         <div className="row row-cols-3 w-100">
            <div className="navbar-brand mr-10 col-xl-2">
               Todo: Let's do it!
            </div>

            <ul className="navbar-nav col-xl-6 offset-xl-2 d-flex justify-content-between">
               <li className="nav-item">
                  <NavLink to="/1" exact className="nav-link">All tasks</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink to="/about" className="nav-link">About project</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink to="/auth" className="btn btn-info mr-1">SignIn</NavLink>
                  <NavLink to="/auth" className="btn btn-info ml-1">SignUp</NavLink>
               </li>
            </ul>
         </div>
      </div>
   </nav>
)