import { NavLink } from 'react-router-dom'
import style from './User.module.css'

const User = ({name, email ,id, address}) => {

  return (
    <NavLink className={style.container} to={`/users/${id}`}>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>Address: {address.street} / {address.suite}</p>
        <p>ID: {id}</p>
    </NavLink>
  )
}

export { User }
