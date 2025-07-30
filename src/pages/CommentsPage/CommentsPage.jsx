import { Comment } from '../../components/Comment/Comment'

import style from './CommentsPage.module.css'

const CommentsPage = ({comments}) => {
  return (
    <div className={style.container}>
        {comments.map(({postId, id, email, body, name}) =>(
            <Comment key={id} id={id} postId={postId} body={body} email={email} name={name} />
        ))}
    </div>
  )
}

export default CommentsPage