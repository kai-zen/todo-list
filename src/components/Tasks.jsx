import React, {Fragment, useEffect, useState} from 'react';
import NoTasks from './NoTasks';
import { Modal } from 'react-bootstrap';
import UpdateModal from './updateModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasksList, selectDoneTasks, deleteTodo, RemoveFromDone, AddToDone} from '../redux/todoSlice';

const Tasks = ({inFirstPage}) => {
    const tasksList = useSelector(selectTasksList);
    const doneList = useSelector(selectDoneTasks);
    const dispatch = useDispatch();

    const [showEditModal, setShowEditModal] = useState(false);
    const [clickedTask, setClickedTask] = useState(0);
    const whatToRender = () => {
        if(tasksList.length === 0 || tasksList.length === '0'){
            return <NoTasks/>
        }else{
            return (
                <ul className="todoList">
                    {tasksList.map(task => {
                        return(
                        <li key={task.id} id={task.id}>{task.content}
                            <span className='checkSpan'>
                                {inFirstPage ?
                                <i className='fas fa-check' onClick={()=>setColor(task.id)}></i> :
                                <i className='fas fa-edit' onClick={()=>{
                                    setClickedTask(task.id);
                                    setShowEditModal(true)}}></i>}
                            </span>
                            <span onClick={()=>{dispatch(deleteTodo(task.id));
                            dispatch(RemoveFromDone(task.id));
                            }}>
                                <i className='fas fa-trash'></i>
                            </span>
                        </li>)
                    })}
                </ul>
            )
        }
    }
    const setColor = (id) => {
        if(document.getElementById(id).classList.contains('active')){
            document.getElementById(id).classList.remove('active');
            dispatch(RemoveFromDone(id));
        }else{
            document.getElementById(id).classList.add('active');
            dispatch(AddToDone(id)) 
        }
    }
    useEffect(()=>{
        doneList.map(task => {
            if(document.getElementById(task)){
                document.getElementById(task).classList.add('active');
            }   
        })
    });
    return (
        <Fragment>
           {whatToRender()}
           <Modal show={showEditModal}>
               <UpdateModal setShowEditModal={setShowEditModal} id={clickedTask}/>
            </Modal> 
        </Fragment>
     );
}
 
export default Tasks;