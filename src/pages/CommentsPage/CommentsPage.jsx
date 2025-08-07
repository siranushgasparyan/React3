import { useEffect, useState } from 'react'
import { Comment } from '../../components/Comment/Comment'
import { baseURL } from '../../db/db'

import style from './CommentsPage.module.css'

const CommentsPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${baseURL}/comments`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className={style.container}>
        {data.map(({postId, id, email, body, name}) =>(
            <Comment key={id} id={id} postId={postId} body={body} email={email} name={name} />
        ))}
    </div>
  )
}

export default CommentsPage
