import './index.css'

const TaskItem = props => {
  const {taskDetails, onDeleteTaskIs, onAddStyleIs} = props
  const {task, id, isShowStyle} = taskDetails

  const onClickMarkButton = () => {
    console.log(`${id} this style`)
    onAddStyleIs(id)
  }

  const onDeleteTask = () => {
    // console.log(`${id} delete this`)
    onDeleteTaskIs(id)
  }

  const style = isShowStyle ? 'strike-of' : ''

  return (
    <div className="task-container">
      <input type="checkbox" onClick={onClickMarkButton} />
      <div className="content-container">
        <p className={`task-name ${style}`}>{task}</p>
        <button type="button" className="delete-button" onClick={onDeleteTask}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            className="delete-logo"
            alt="delete"
          />
        </button>
      </div>
      {style && <p className="done">Task Done</p>}
    </div>
  )
}
export default TaskItem
