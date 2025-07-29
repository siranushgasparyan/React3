import { Comment } from '../Comment/Comment'

import style from './CommentsList.module.css'

const CommentsList = ({comments}) => {
  return (
    <div className={style.container}>
        {comments.map(({postId, id, email, body, name}) =>(
            <Comment key={id} id={id} postId={postId} body={body} email={email} name={name} />
        ))}
    </div>
  )
}

export default CommentsList