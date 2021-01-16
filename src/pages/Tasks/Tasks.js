import ListItem from "../../components/ListItem"
import { Modal } from "../../components/Modal/Modal"
import Button from "../../components/UI/Button/Button"
import classes from "./Tasks.module.scss"

const Tasks = () => {
   const cls = [classes.Tasks, "list-group-item list-group-item-action d-flex justify-content-between align-items-center"]
   const list = [
      'Пройти курс', 
      'Прочитать книгу', 
      'Полить цветы', 
      'Сделать ДЗ'
   ]
   
   return (
      <>
         <div className="d-flex justify-content-between">
            <h1>Tasks</h1>
            <Button 
               type='button'
               color='success'
               value='Create new task'
               onClick={() => console.log('Create list')}
            />
         </div>
         <Modal />
         <div className='list-group mt-5'>
            {
               list.map((item, index) => (
                  <div key={Math.random()} className="d-flex mb-1">
                     <ListItem 
                        component='div'
                        itemKey={Math.random()}
                        classStyleItem={cls.join(' ')}
                        classStyleBtn={`btn btn-danger ${classes.DeleteBtn}`}
                        data-toggle="modal" 
                        data-target="#exampleModal"
                        item={item}
                        hasCheckbox={true}
                     />
                  </div>
                  // <div key={index + Math.random()} className="d-flex mb-1">
                  //    <li
                  //       className={cls.join(' ')}
                  //    >
                  //       {item}
                  //    </li>

                  //    <div 
                  //       className={`btn btn-danger ${classes.DeleteBtn}`}
                  //       data-toggle="modal" 
                  //       data-target="#exampleModal"
                  //       onClick={() => console.log('open modal')}
                  //    >&times;</div>
                  // </div>
               ))
            }
         </div>
      </>
   )
}

export default Tasks