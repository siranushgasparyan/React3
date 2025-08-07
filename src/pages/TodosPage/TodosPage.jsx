import { Todo } from '../../components/Todo/Todo'
import { useEffect, useState } from 'react'
import {baseURL} from '../../db/db'

import style from './TodosPage.module.css'

const TodosPage = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${baseURL}/todos`)
      .then((res) => res.json())
      .then((data) => setData(data))
}, [])

  return (
    <div className={style.container}>
        {data.map(({id, userId, title, completed}) => (
            <Todo key={id} id={id} userId={userId} title={title} completed={completed}/>
        ))}
    </div>
  )
}

export default TodosPage
