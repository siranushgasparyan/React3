import { Route, Routes } from 'react-router-dom'
import  { Header, Home, PostsList, TodosList, CommentsList, UsersList, AlbomsList, NotFound} from './components/index'
import './App.css'

function App({ navLinks, posts, users, todos, comments, alboms }) {

  return (
    <>
      <Header navLinks={navLinks}/>
      <Routes>
        <Route  path='/home' element = {<Home />}/>
        <Route path='/posts' element= {<PostsList posts={posts}/>}/>
        <Route path='/todos' element={<TodosList todos={todos}/>}/>
        <Route path='/comments' element={<CommentsList comments={comments}/>}/>
        <Route path='/users' element={<UsersList users={users}/>}/>
        <Route path='/alboms' element={<AlbomsList alboms={alboms}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
