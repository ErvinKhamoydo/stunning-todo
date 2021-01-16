import classes from './Input.module.scss'

function isInvalid({valid, touched, shouldValidate}) {
   return !valid && shouldValidate && touched
}

const Input = props => {
   const inputType = props.type || 'text';
   const cls = [classes.Input, 'form-group'];
   const htmlFor = `${inputType}-${Math.random()}`

   if (isInvalid(props)) {
      cls.push(classes.invalid)
   }

   return (
      <div className={cls.join(' ')}>
         <label htmlFor={htmlFor}>{props.label}</label>
         <input 
            type={inputType}
            className="form-control"
            id={htmlFor}
            onChange={props.onChange}
            autoComplete='true'
         />

         {  
            props.discr
               ? (
                  isInvalid(props)
                     ? <small>{props.errorMessage || 'You entered an invalid value'}</small>
                     : <small>We'll never share your {props.type} with anyone else.</small>
               )
               : null
         }
      </div>
   )
}

export default Input