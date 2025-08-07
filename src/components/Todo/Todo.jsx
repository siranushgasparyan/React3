import style from './Todo.module.css'
import { NavLink } from 'react-router-dom'

const Todo = ({userId, id, title, completed}) => {
  return (
    <NavLink className={style.container} to={`/todos/${id}`}>
        <h2>{title}</h2>
        <p>UserID: {userId}</p>
        <p>ID: {id}</p>
        <p>Completed: {completed.toString()}</p>
    </NavLink>
  )
}

export { Todo }
