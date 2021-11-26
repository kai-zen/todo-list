import React, {Fragment} from 'react';
import AddInput from './AddInput';
import Tasks from './Tasks';
import { Link } from 'react-router-dom';

const EditPage = ({tasksList, handleDeleteTask, handleAddTask, setDoneTasks, doneTasks, handleEditTask}) => {
    return (
        <Fragment>
            <AddInput handleAddTask={handleAddTask}/>
            <Tasks tasksList={tasksList} inFirstPage={false} handleDeleteTask={handleDeleteTask} setDoneTasks={setDoneTasks} doneTasks={doneTasks} handleEditTask={handleEditTask}/>
            <div className="footer">
                <Link to='/'><button>Done editing!</button></Link>
            </div>
        </Fragment>
     );
}
 
export default EditPage;