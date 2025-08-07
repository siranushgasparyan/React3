import { useParams } from 'react-router-dom'
import { baseURL } from '../../db/db'
import { useState, useEffect } from 'react'

import style from './CommentDetailsPage.module.css'

const CommentDetailsPage = () => {
  const [comment, setComment] = useState([])
  const {id} = useParams()

  useEffect(() => {
     fetch(`${baseURL}/comments/${id}`)
      .then((res) => res.json())
      .then((data) => setComment(data))
      .catch((err) => console.log(err))
  }, [id])
 
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
