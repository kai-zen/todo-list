import React, {Fragment, useEffect, useState} from 'react';
import NoTasks from './NoTasks';
import { Modal } from 'react-bootstrap';
import UpdateModal from './updateModal';

const Tasks = ({tasksList, inFirstPage, handleDeleteTask, setDoneTasks, doneTasks, handleEditTask}) => {
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
                                <span onClick={()=>handleDeleteTask(task.id)}>
                                    <i className='fas fa-trash'></i>
                                </span>
                            </li>)
                    })}
                </ul>
            )
        }
    }
    const setColor = (id) => {
        let currentDoneTasks = [...doneTasks];
        if(document.getElementById(id).classList.contains('active')){
            document.getElementById(id).classList.remove('active');
            currentDoneTasks = currentDoneTasks.filter(task=>task.id === id);
        }else{
            document.getElementById(id).classList.add('active');
            currentDoneTasks.push(id); 
        }
        setDoneTasks(currentDoneTasks);
    }
    useEffect(()=>{
        doneTasks.map(task => {
            if(document.getElementById(task)){
                document.getElementById(task).classList.add('active');
            }   
        })
    });
    return (
        <Fragment>
           {whatToRender()}
           <Modal show={showEditModal}>
               <UpdateModal setShowEditModal={setShowEditModal} handleEditTask={handleEditTask} id={clickedTask}/>
            </Modal> 
        </Fragment>
     );
}
 
export default Tasks;