import Post from "../../components/Post/Post";
import { baseURL } from "../../db/db";
import { useEffect, useState } from "react";

import style from './PostsPage.module.css';

const PostsPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${baseURL}/posts`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className={style.container}>
      {data.map(({ userId, id, title, body }) => (
        <Post
          key={id}
          id={id}
          userId={userId}
          title={title}
          body={body}
        />
      ))}
    </div>
  );
}

export default PostsPage;
