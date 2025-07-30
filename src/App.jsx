import  { PostsList, UsersList, AlbomsList, NotFound, Layout, Home, CommentDetailsPage, CommentsPage, TodoDetailsPage, TodosPage} from './components/index'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App({ navLinks, comments, todos, posts, users, alboms }) {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout navLinks={navLinks}/>}>
          <Route index element={<Home />}/>
          <Route path='/comments' element={<CommentsPage comments={comments}/>}/>
          <Route path='/comments/:id' element={<CommentDetailsPage comments={comments} />}/>
          <Route path='/todos/' element={<TodosPage todos={todos} />}/>
          <Route path='/todos/:id' element={<TodoDetailsPage todos={todos} />}/>
          <Route path='/posts' element= {<PostsList posts={posts}/>}/>
          <Route path='/users' element={<UsersList users={users}/>}/>
          <Route path='/alboms' element={<AlbomsList alboms={alboms}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

