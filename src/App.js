import React from 'react';
import TaskList from './components/TaskList/Tasklist'
import Modal from 'react-modal';
import './App.scss';

Modal.setAppElement('#root')

function App() {
  return (
    <div className="App">
      <TaskList />
    </div>
  );
}

export default App;
