import { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../redux/Auth/authContext";

const Logout = (props) => {
   const {logout} = useContext(AuthContext);

   useEffect(() => { 
      console.log('logout magic');
   })


   return (
      <Link 
         to="/auth"
         className='btn btn-danger'
         onClick={() => logout()}
      >Logout</Link>
   )
}

export default Logout