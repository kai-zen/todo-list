import React from 'react';
import { Link } from 'react-router-dom';
import Tasks from './Tasks';
import Remained from './Remained';
import { useSelector } from 'react-redux';
import { selectTasksList } from '../redux/todoSlice';

const FirstPage = ({setDoneTasks, doneTasks}) => {
    const tasksList = useSelector(selectTasksList);

    return ( 
        <div className='firstPage'>
            <Tasks inFirstPage={true} setDoneTasks={setDoneTasks} doneTasks={doneTasks}/> 
            <div className="footer">
                <Remained length={tasksList.length} />
                <Link to='/edit-tasks'><button>Edit tasks</button></Link>
            </div>
        </div>
     );
}
 
export default FirstPage;