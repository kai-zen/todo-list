import React, {useState} from 'react';

const AddInput = ({handleAddTask}) => {
  const [taskText, setTaskText] = useState('')
    return ( 
        <div className="inputField">
          <input id='addInput' type="text" placeholder='Add you new task' onChange={(e)=>{
            setTaskText(e.target.value);
          }}/>
          <button onClick={()=>{
              handleAddTask(taskText);
              document.getElementById('addInput').value='';
              setTaskText('');
            }}>
            <i className='fas fa-plus'></i>
          </button>
        </div>
     );
}
 
export default AddInput;