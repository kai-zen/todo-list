import React, {Fragment} from 'react';
import AddInput from './AddInput';
import Tasks from './Tasks';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditPage = ({setDoneTasks, doneTasks}) => {
    const tasksList = useSelector(state => state.tasksList)
    return (
        <Fragment>
            <AddInput/>
            <Tasks tasksList={tasksList} inFirstPage={false} setDoneTasks={setDoneTasks} doneTasks={doneTasks}/>
            <div className="footer">
                <Link to='/'><button>Done editing!</button></Link>
            </div>
        </Fragment>
     );
}
 
export default EditPage;