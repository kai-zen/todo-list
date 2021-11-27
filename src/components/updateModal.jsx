import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/todoSlice';

const UpdateModal = ({setShowEditModal, id}) => {
    const [editingText, setEditingText] = useState('');
    const dispatch = useDispatch();
    return ( 
        <div className='updateModal'>
            <h2>Edit your task:</h2>
            <input type="text" onChange={(e)=>setEditingText(e.target.value)}/>
            <button className='submitButton' onClick={()=>{
                setShowEditModal(false);
                dispatch(updateTodo({id, editingText}));
            }}>Edit</button>
            <span className='closeIcon' onClick={()=>setShowEditModal(false)}><i className='fa fa-times'></i></span>
        </div>
     );
}
 
export default UpdateModal;