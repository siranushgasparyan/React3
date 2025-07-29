import style from './TodosList.module.css'
import { Todo } from '../Todo/Todo'

const TodosList = ({todos}) => {
  return (
    <div className={style.container}>
        {todos.map(({id, userId, title, completed}) => (
            <Todo key={id} id={id} userId={userId} title={title} completed={completed}/>
        ))}
    </div>
  )
}

export default TodosList