import style from './TodosPage.module.css'
import { Todo } from '../../components/Todo/Todo'

const TodosPage = ({todos}) => {
  return (
    <div className={style.container}>
        {todos.map(({id, userId, title, completed}) => (
            <Todo key={id} id={id} userId={userId} title={title} completed={completed}/>
        ))}
    </div>
  )
}

export default TodosPage