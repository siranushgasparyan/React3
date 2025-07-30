import style from './TodoDetailsPage.module.css'
import { useParams } from 'react-router-dom'

const TodoDetailsPage = ({todos}) => {
  const {id} = useParams()
  const todo = todos.find((todo) => todo.id === +id)

  return (
    <div className={style.container}>
        <h2>{todo.title}</h2>
        <p>UserID: {todo.userId}</p>
        <p>ID: {todo.id}</p>
        <p>Completed: {todo.completed.toString()}</p>
    </div>
  )
}

export default TodoDetailsPage