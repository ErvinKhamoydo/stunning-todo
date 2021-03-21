import axios from "axios";
import { useReducer } from "react";
import { AUTH_LOGOUT, AUTH_SUCCESS } from "../actionsType";
import { AuthContext } from "./authContext";
import { authReducer } from "./authReducer";

export const AuthState = ({children}) => {
   const initialState = {
      token: null,
      isAuthenticated: false
   };

   // const [initialState, setInitialState] = useState({
   //    token: null,
   //    isAuthenticated: false
   // })

   const [state, dispatch] = useReducer(authReducer, initialState);

   const auth = async (email, password, isLogin) => {
      const authData = {
         email,
         password,
         returnSecureToken: true
      }

      let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbKhe7jLW8UC35kHdXn40zec-R7IzOPZg';

      if (isLogin) {
         // linkn to sign in
         url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbKhe7jLW8UC35kHdXn40zec-R7IzOPZg'
      }

      const response = await axios.post(url, authData);
      const data = response.data;

      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

      localStorage.setItem('token', data.idToken);
      localStorage.setItem('userId', data.localId);
      localStorage.setItem('expirationDate', expirationDate);

      dispatch(authSuccess(data.idToken));
      dispatch(autoLogout(data.expiresIn))
   }

   const authSuccess = (token) => {
      return {
         type: AUTH_SUCCESS,
         token
      }
   }

   const autoLogout = time => {
      return dispatch => {
         setTimeout(() => {
            dispatch(logout())
         }, time * 1000)
      }
   }

   const logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('expirationDate');
      return {
         type: AUTH_LOGOUT
      }
   }

   const autoLogin = () => {
      return dispatch => {
         const token = localStorage.getItem('token');

         if (!token) {
            dispatch(logout())
         } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));

            if (expirationDate <= new Date()) {
               dispatch(logout())
            } else {
               dispatch(authSuccess(token));
               dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
         }
      }
   }
   const {isAuthenticated} = state;

   console.log('state', isAuthenticated);
   return (
      <AuthContext.Provider value={{
         auth,
         authSuccess,
         autoLogin,
         logout,
         isAuthenticated
      }}>
         {children}
      </AuthContext.Provider>
   )
}