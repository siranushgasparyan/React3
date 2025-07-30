import style from './CommentDetailsPage.module.css'
import { useParams } from 'react-router-dom'

const CommentDetailsPage = ({comments}) => {
  const {id} = useParams()
  const comment = comments.find((comment) => comment.id === +id)
  
  return (
    <div className={style.container}>
        <h2>{comment.name}</h2>
        <p>ID: {comment.id}</p>
        <p>PostID: {comment.postId}</p>
        <p>Email: {comment.email}</p>
        <p>{comment.body}</p>
    </div>
  )
}

export default CommentDetailsPage