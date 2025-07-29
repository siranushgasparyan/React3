import style from './Todo.module.css'

const Todo = ({userId, id, title, completed}) => {
  return (
    <div className={style.container}>
        <h2>{title}</h2>
        <p>UserID: {userId}</p>
        <p>ID: {id}</p>
        <p>Completed: {completed.toString()}</p>
    </div>
  )
}

export { Todo }