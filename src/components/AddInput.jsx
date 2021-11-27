import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  return ( 
      <div className="inputField">
        <input id='addInput' type="text" placeholder='Add you new task' onChange={(e)=>{
          setTaskText(e.target.value);
        }}/>
        <button onClick={()=>{
            dispatch(addTodo(taskText));
            document.getElementById('addInput').value='';
            setTaskText('');
          }}>
          <i className='fas fa-plus'></i>
        </button>
      </div>
    );
}
 
export default AddInput;