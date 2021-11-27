import React, {useState} from 'react';
import { Route, Routes } from 'react-router';
import EditPage from './components/EditPage';
import FirstPage from './components/FirstPage';

function App() {
  return (
    <div className="wrapper">
      <header>•Todo App•</header>
      <Routes>
        <Route path='/' element={<FirstPage/>} />
        <Route path='/edit-tasks' element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;