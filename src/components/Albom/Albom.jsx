import style from './Albom.module.css'
import { NavLink } from 'react-router-dom'

const Albom = ({userId, id, title}) => {
  return (
    <NavLink className={style.container} to={`/albums/${id}`}>
        <h2>{title}</h2>
        <p>ID: {id}</p>
        <p>UserID: {userId}</p>
    </NavLink>
  )
}

export { Albom }