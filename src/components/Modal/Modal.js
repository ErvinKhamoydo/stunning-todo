import Checkbox from "../UI/Checkbox/Checkbox";
import Button from "../UI/Button/Button";

export const Modal = () => (
   <div className="modal" id="exampleModal" tabIndex="2" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
         <div className="modal-content">
            <div className="modal-header">
               <h5 className="modal-title">Deleting a to-do list</h5>
               <Button 
                  type="button"
                  color="primary"
                  value="&times;"
                  onClick={() => console.log('Close modal')}
               />
            </div>
            <div className="modal-body">
               <p>Are you sure, that you want to delete list with tasks?</p>
               <p>The sheet will be deleted permanently. This action cannot be undone.</p>
            </div>
            <div className="modal-footer">
               <Checkbox label="Don't ask me again" />
               <Button 
                  type="button"
                  color="secondary"
                  value="Cancel"
                  onClick={() => console.log('Close modal')}
                  data-dismiss="modal"
               />
               <Button 
                  type="button"
                  color="primary"
                  value="Delete"
                  onClick={() => console.log('Close modal')}
               />
            </div>
         </div>
      </div>
   </div>
)