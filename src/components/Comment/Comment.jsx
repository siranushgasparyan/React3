import { NavLink } from 'react-router-dom'
import style from './Comment.module.css'

const Comment = ({postId, id, email, body, name}) => {
  return (
    <NavLink className={style.container} to={`/comments/${id}`}>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <p>{body}</p>
        <p>PostID: {postId}</p>
        <p>ID: {id}</p>
    </NavLink>
  )
}

export { Comment }