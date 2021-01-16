import classes from './Checkbox.module.scss'

const Checkbox = (props) => (
   <div className={classes.Checkbox}>
      <input type="checkbox" id="todo" name="todo" value="todo" />
      <label htmlFor="todo" data-content={props.value}>{props.value}</label>
   </div>
)
export default Checkbox