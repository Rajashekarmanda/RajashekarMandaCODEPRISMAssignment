import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TaskItem from '../TaskItem'

import './index.css'

class ToDoList extends Component {
  state = {
    tasksList: [],
    input: '',
    tasksListDone: [],
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
    // console.log(event.target.value)
  }

  onAddTaskItem = () => {
    const {input, tasksList} = this.state
    const newTaskItem = {
      id: uuidv4(),
      task: input,
      isShowStyle: false,
    }
    this.setState({tasksList: [...tasksList, newTaskItem], input: ''})
    // console.log('clicked Add button')
  }

  onDeleteTaskIs = id => {
    const {tasksList} = this.state
    // console.log(`${id} deleted`)
    const newList = tasksList.filter(eachTask => eachTask.id !== id)
    this.setState({tasksList: newList})
  }

  onAddStyleIs = id => {
    const {tasksList} = this.state
    console.log(`${id} styled`)
    let newListIs = tasksList.find(eachTask => eachTask.id === id)
    const filterList = tasksList.filter(each => each.id !== id)
    console.log(newListIs)
    newListIs = {...newListIs, isShowStyle: !newListIs.isShowStyle}
    console.log(newListIs)
    this.setState({tasksList: [...filterList, newListIs]})
  }

  onClearAllTasks = () => {
    this.setState({tasksList: []})
  }

  render() {
    const {tasksList, input, tasksListDone} = this.state
    return (
      <div className="app-container">
        <div className="header-container">
          <h1 className="todos-heading">To-Do List</h1>
        </div>
        <div className="create-task-container">
          <p className="create-task-heading">
            <span className="create-task-heading-spam">Create</span> Task
          </p>
          <input
            type="input"
            className="input"
            onChange={this.onChangeInput}
            placeholder="Enter Your Task Here"
            value={input}
          />
          <br />
          <button
            type="button"
            className="add-button"
            onClick={this.onAddTaskItem}
          >
            Add
          </button>
          <hr className="line" />
        </div>
        <div className="tasks-list-container">
          <p className="create-task-heading">
            <span className="create-task-heading-spam">Tasks</span> List
          </p>
          {tasksList.map(eachTask => (
            <TaskItem
              taskDetails={eachTask}
              key={eachTask.id}
              onDeleteTaskIs={this.onDeleteTaskIs}
              onAddStyleIs={this.onAddStyleIs}
            />
          ))}
          <button
            type="button"
            className="save-button"
            onClick={this.onClearAllTasks}
          >
            Clear All Tasks
          </button>
        </div>
      </div>
    )
  }
}
export default ToDoList
