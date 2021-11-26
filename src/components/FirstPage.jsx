import React from 'react';
import { Link } from 'react-router-dom';
import Tasks from './Tasks';
import Remained from './Remained';

const FirstPage = ({tasksList, handleDeleteTask, setDoneTasks, doneTasks, handleEditTask}) => {
    return ( 
        <div className='firstPage'>
            <Tasks tasksList={tasksList} inFirstPage={true} handleDeleteTask={handleDeleteTask} setDoneTasks={setDoneTasks} doneTasks={doneTasks} handleEditTask={handleEditTask}/> 
            <div className="footer">
                <Remained length={tasksList.length} />
                <Link to='/edit-tasks'><button>Edit tasks</button></Link>
            </div>
        </div>
     );
}
 
export default FirstPage;