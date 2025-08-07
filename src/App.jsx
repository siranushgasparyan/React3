import  { PostsPage, PostDetailsPage, UsersPage, UserDetailsPage, AlbomsPage, AlbomDetailsPage, NotFound, Layout, Home, CommentDetailsPage, CommentsPage, TodoDetailsPage, TodosPage} from './components/index'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App({ navLinks }) {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout navLinks={navLinks}/>}>
          <Route index element={<Home />}/>
          <Route path='/comments' element={<CommentsPage />}/>
          <Route path='/comments/:id' element={<CommentDetailsPage />}/>
          <Route path='/todos/' element={<TodosPage />}/>
          <Route path='/todos/:id' element={<TodoDetailsPage />}/>
          <Route path='/posts' element= {<PostsPage />}/>
          <Route path='/posts/:id' element= {<PostDetailsPage />}/>
          <Route path='/users' element={<UsersPage />}/>
          <Route path='/users/:id' element={<UserDetailsPage />}/>
          <Route path='/albums' element={<AlbomsPage />}/>
          <Route path='/albums/:id' element={<AlbomDetailsPage />}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

