import style from './Post.module.css'

import { NavLink } from 'react-router-dom'

const Post = ({userId, id, title, body}) => {
  return (
    <>
      <NavLink className={style.container} to={`/posts/${id}`}>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>User ID: {userId}</p>
        <p>ID: {id}</p>
    </NavLink>
    </>
  )
}

export default Post