import React, {useState} from 'react';
import { Route, Routes } from 'react-router';
import EditPage from './components/EditPage';
import FirstPage from './components/FirstPage';

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const handleDeleteTask = (id) => {
    let copyTasksList = [...tasksList];
    copyTasksList = copyTasksList.filter(task => task.id !== id);
    setTasksList(copyTasksList);
    let currentDoneTasks = [...doneTasks];
    currentDoneTasks = currentDoneTasks.filter(task=>task.id !== id);
    setDoneTasks(currentDoneTasks);
  }

  const handleAddTask = (taskContent) => {
    let copyTasksList = [...tasksList];
    let newId = 0;
    if(copyTasksList.length > 0){
      let lastIndex = parseInt(copyTasksList.length)-1;
      newId = copyTasksList[lastIndex].id+1;
    }
    
    let newTask = {
      id : newId,
      content : taskContent,
    }
    copyTasksList.push(newTask);
    setTasksList(copyTasksList);
  }

  const handleEditTask = (id, contentText) => {
    let copyTasksList = [...tasksList];
    let i = 0;
    while(true){
      if(copyTasksList[i].id == id){
        break;
      }
      ++i;
    }
    copyTasksList[i].content = contentText;
    setTasksList(copyTasksList);
  }

  return (
    <div className="wrapper">
      <header>•Todo App•</header>
      <Routes>
        <Route path='/' element={<FirstPage tasksList={tasksList} handleDeleteTask={handleDeleteTask} setDoneTasks={setDoneTasks} doneTasks={doneTasks} handleEditTask={handleEditTask}/>} />
        <Route path='/edit-tasks' element={<EditPage tasksList={tasksList} handleDeleteTask={handleDeleteTask} handleAddTask={handleAddTask} setDoneTasks={setDoneTasks} doneTasks={doneTasks} handleEditTask={handleEditTask}/>}/>
      </Routes>
    </div>
  );
}

export default App;