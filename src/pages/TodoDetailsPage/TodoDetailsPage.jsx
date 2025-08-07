import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { baseURL } from '../../db/db';

import style from './TodoDetailsPage.module.css'

const TodoDetailsPage = () => {
  const {id} = useParams();
  const [todo, setTodo] = useState([])

  useEffect(() => {
    fetch(`${baseURL}/posts/${id}`)
      .then((res) => res.json())
      .then((todo) => setTodo(todo))
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div className={style.container}>
        <h2>{todo.title}</h2>
        <p>UserID: {todo.userId}</p>
        <p>ID: {todo.id}</p>
        {/* <p>Completed: {todo.completed.toString()}</p> */}
    </div>
  )
}

export default TodoDetailsPage
