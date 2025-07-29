import style from './COmment.module.css'

const Comment = ({postId, id, email, body, name}) => {
  return (
    <div className={style.container}>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <p>{body}</p>
        <p>PostID: {postId}</p>
        <p>ID: {id}</p>
    </div>
  )
}

export { Comment }