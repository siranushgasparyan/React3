import style from './Post.module.css'

const Post = ({userId, id, title, body}) => {
    
  return (
    <>
      <div className={style.container}>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>User ID: {userId}</p>
        <p>ID: {id}</p>
    </div>
    </>
  )
}

export default Post