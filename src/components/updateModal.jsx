import React, {useState} from 'react';

const UpdateModal = ({setShowEditModal, handleEditTask, id}) => {
    const [editingText, setEditingText] = useState('');
    return ( 
        <div className='updateModal'>
            <h2>Edit your task:</h2>
            <input type="text" onChange={(e)=>setEditingText(e.target.value)}/>
            <button className='submitButton' onClick={()=>{
                setShowEditModal(false);
                handleEditTask(id, editingText);
            }}>Edit</button>
            <span className='closeIcon' onClick={()=>setShowEditModal(false)}><i className='fa fa-times'></i></span>
        </div>
     );
}
 
export default UpdateModal;