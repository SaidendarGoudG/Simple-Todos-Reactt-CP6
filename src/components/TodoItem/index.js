// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodoItem} = props
  const {id, title} = todoDetails

  const deleteTodo = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="todo-item-container">
      <p className="todo-title">{title}</p>
      <button className="button" onClick={deleteTodo} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
