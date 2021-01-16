import { Modal } from "../../components/Modal/Modal";
import Button from "../../components/UI/Button/Button"
import classes from "./TodoLists.module.scss"
import ListItem from "../../components/ListItem"
import { Link } from "react-router-dom";

const TodoList = () => {
   const cls = [classes.TodoList, "list-group-item list-group-item-action d-flex justify-content-between align-items-center"];
   const list = [
      'Учёба', 
      'Спорт', 
      'Работа', 
      'Дом'
   ];
   
   return (
      <>
         <div className="d-flex justify-content-between">
            <h1>All Lists</h1>
            <Button 
               type='button'
               color='success'
               value='Create new list'
               onClick={() => console.log('Create list')}
            />
         </div>
         <Modal />
         <div className='list-group mt-5'>
            {
               list.map((item) => (
                  <div key={Math.random()} className="d-flex mb-1">
                     <ListItem 
                        component={Link}
                        itemKey={Math.random()}
                        classStyleItem={cls.join(' ')}
                        classStyleBtn={`btn btn-danger ${classes.DeleteBtn}`}
                        data-toggle="modal" 
                        data-target="#exampleModal"
                        item={item}
                        hasCheckbox={false}
                     />
                  </div>
               ))
            }
         </div>
      </>
   )
}

export default TodoList