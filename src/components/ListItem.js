import { Link } from "react-router-dom"
import Button from "../components/UI/Button/Button"
import Checkbox from "./UI/Checkbox/Checkbox"

const ListItem = props => (
   <>  
      <props.component
         to={props.component === Link ? '/tasks' : null}
         className={props.classStyleItem}
      >
         {
            props.hasCheckbox
            ? <Checkbox value={props.item} />
            : props.item
         }
      </props.component>

      <Button
         value='&times;'
         color='danger'
         onClick={() => console.log('close itemlist')}
      />
   </>
)

export default ListItem