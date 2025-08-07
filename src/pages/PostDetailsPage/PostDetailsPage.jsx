import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { baseURL } from '../../db/db';

import style from './PostDetailsPage.module.css'

const PostDetailsPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState([])

    useEffect(() => {
      fetch(`${baseURL}/posts/${id}`)
        .then((res) => res.json())
        .then((post) => setPost(post))
    }, [id])

  return (
    <div className={style.container}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>UserID: {post.userId}</p>
        <p>ID: {post.id}</p>
    </div>
  )
}

export default PostDetailsPage