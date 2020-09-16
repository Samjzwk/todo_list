import React, { useState } from 'react';
import Task from '../Task/Task';
import './TaskList.scss';
import Modal from 'react-modal';

const Tasklist = () => {
    const [todos, setTodo] = useState([{ text: "Faire la léssive", status: "done" }, { text: "Faire le ménage", status: "todo" }, { text: "Préparer la formation", status: "todo" }])
    const [newTask, setNewTask] = useState("");
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const deleteFunction = (index) => {
        const newTodoList = [...todos];
        newTodoList.splice(index, 1);
        setTodo(newTodoList);
    }

    const changeStatus = (index) => {
        const newTodoList = [...todos];
        newTodoList[index].status = newTodoList[index].status === 'todo' ? 'done' : 'todo';
        setTodo(newTodoList);
    }

    const addTask = (event) => {
        event.preventDefault();
        if(newTask !== ""){
            setTodo([...todos,{text:newTask, status: "todo"}])
        }
        setNewTask("");
        closeModal();
    }

    const tasks = todos.map((task, index) =>
        <li className="todo__task" key={index}>
            <Task text={task.text} status={task.status} index={index} changeStatus={changeStatus} deleteFunction={deleteFunction} />
        </li>)

    return (
        <div className="todo__container" id="todo">
            <div className="todo__header">
                <span>Que dois-je faire ?</span>
            </div>
            <ul className="todo__list">
                {tasks}
            </ul>
            <button className="todo__btn" onClick={openModal}>+ Nouvelle tache</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <span>Quel est la nouvelle tâche ?</span>
                <input type="text" value={newTask} onChange={e=>setNewTask(e.target.value)} placeholder="tâches" />
                <button type="submit" className="submit" onClick={(e)=>addTask(e)}>Ajouter</button>
                <button onClick={closeModal} className="close">X</button>
            </Modal>
        </div>
    )
}

export default Tasklist;
