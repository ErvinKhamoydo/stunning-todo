const Button = props => (
   <button
      type={props.type} 
      className={`btn btn-${props.color}`}
      onClick={props.onClick}
      disabled={props.disabled}
   >
      {props.value}
   </button>
)

export default Button