import { useContext, useState } from 'react';
import Button from '../components/UI/Button/Button'
import Input from '../components/UI/Input/Input'
import { AuthContext } from '../redux/Auth/authContext';

function validateEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

const Auth = () => {
   const {auth} = useContext(AuthContext);
   const [isFormValid, setIsFormValid] = useState(false);
   const [formEmail, setFormEmail] = useState({
         value: '',
         type: 'email',
         label: 'Email',
         errorMassage: 'Введите корректный email',
         valid: false,
         touched: false,
         validation: {
            required: true,
            email: true
         }
      }
   )
   const [formPassword, setFormPassword] = useState({
         value: '',
         type: 'password',
         label: 'Password',
         errorMassage: 'Введите корректный password',
         valid: false,
         touched: false,
         validation: {
            required: true,
            minLength: 8
         }
      })

   const loginHandler = () => {
      auth(
         formEmail.value,
         formPassword.value,
         true
      )
   }

   const registerHandler = () => {
      auth(
         formEmail.value,
         formPassword.value,
         false
      )
   }

   const submitHandler = event => {
      event.preventDefault();
   }

   const validateControl = (value, validation) => {
      if (!validation) {
         return true
      }

      let isValid = true;

      if (validation.required) {
         isValid = value.trim() !== '' && isValid
      }

      if (validation.email) {
         isValid = validateEmail(value) && isValid
      }

      if (validation.minLength) {
         isValid = value.length >= validation.minLength && isValid
      }

      return isValid
   }

   const onChangeHandler = (event, controlSetStateName) => {
      const value = event.target.value;

      let isFormValid = true;
      isFormValid = formEmail.valid && formPassword.valid && isFormValid;

      setIsFormValid(isFormValid)

      controlSetStateName(prev => {
         return {
            ...prev,
            value,
            touched: true,
            valid: validateControl(value, prev.validation)
         }
      })
   } 

   return (
      <>
         <h1 className='mb-4'>Authorization</h1>
         <form onSubmit={submitHandler}>
            <Input 
               type='email'
               label='Email'
               onChange={(event) => onChangeHandler(event, setFormEmail)}
               errorMessage='You entered an invalid email'
               discr={true}
               shouldValidate={!!formEmail.validation}
               touched={formEmail.touched}
               valid={formEmail.valid}
               require
            />
            <Input 
               type='password'
               label='Password'
               onChange={(event) => onChangeHandler(event, setFormPassword)}
               errorMessage='You entered an invalid password'
               shouldValidate={!!formPassword.validation}
               touched={formPassword.touched}
               valid={formPassword.valid}
               discr={true}
               require
            />

            <Button 
               type='submit'
               color='primary'
               disabled={!isFormValid}
               value='SignIn'
               onClick={loginHandler}
            />
            &nbsp;
            <Button
               type='submit'
               color='success'
               disabled={!isFormValid}
               value='SignUp'
               onClick={registerHandler}
            />
         </form>
      </>
   )
}

export default Auth