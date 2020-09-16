import React, { Component } from 'react';
import Task from '../Task/Task';
import './TaskList.scss';
import Modal from 'react-modal';


class Tasklist extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [{ text: "Faire la léssive", status: "done" }, { text: "Faire le ménage", status: "todo" }, { text: "Préparer la formation", status: "todo" }],
            newTask: "",
            modalIsOpen: false
        }
    }

    openModal = () => this.setState({modalIsOpen: true});
    closeModal = () => this.setState({modalIsOpen: false});

    deleteFunction = (index) => {
        const newTodoList = [...this.state.todos];
        newTodoList.splice(index, 1);
        this.setState({todos:newTodoList});
    }

    changeStatus = (index) =>{
        const newTodoList = [...this.state.todos];
        newTodoList[index].status = newTodoList[index].status === 'todo' ? 'done' : 'todo';
        this.setState({todos:newTodoList});
    }

    addTask = (e) =>{
        e.preventDefault();
        if(this.state.newTask !== ""){
            this.setState({todos:[...this.state.todos,{text:this.state.newTask, status: "todo"}]})
        }
        this.setState({newTask: ""});
        this.closeModal();
    }


    render() {
        const tasks = this.state.todos.map((task, index) =>
        <li className="todo__task" key={index}>
            <Task text={task.text} status={task.status} index={index} changeStatus={this.changeStatus} deleteFunction={this.deleteFunction} />
        </li>)

        return (
            <div className="todo__container" id="todo">
            <div className="todo__header">
                <span>Que dois-je faire ?</span>
            </div>
            <ul className="todo__list">
                {tasks}
            </ul>
            <button className="todo__btn" onClick={()=> this.openModal()}>+ Nouvelle tache</button>
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={() => this.closeModal()}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <span>Quel est la nouvelle tâche ?</span>
                <input type="text" value={this.state.newTask} onChange={e=>this.setState({newTask: e.target.value})} placeholder="tâches" />
                <button type="submit" className="submit" onClick={(e)=>this.addTask(e)}>Ajouter</button>
                <button onClick={() => this.closeModal()} className="close">X</button>
            </Modal>
        </div>
        );
    }
}

export default Tasklist;
