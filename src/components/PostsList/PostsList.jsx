import Post from "../Post/Post";
import style from './PostsList.module.css'

const PostsList = ({ posts }) => (
  <div className={style.container}>
    {posts.map(({ userId, id, title, body }) => (
      <Post key={id} 
        id={id} 
        userId={userId} 
        title={title} 
        body={body} />
    ))}
  </div>
);

export default PostsList;
