import { AUTH_LOGOUT, AUTH_SUCCESS } from "../actionsType";

const handlers = {
   [AUTH_SUCCESS]: (state, {token}) => {
      return {
         ...state,
         token,
         isAuthenticated: true
      }
   },
   [AUTH_LOGOUT]: (state) => {
      return {
         ...state,
         token: null,
         isAuthenticated: false
      }
   },
   DEFAULT: state => {
      console.log('STATE def', state);
      return state}
}


export const authReducer = (state, action) => {
   const handler = handlers[action.type] || handlers.DEFAULT;
   return handler(state, action)
}