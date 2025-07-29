import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { navLinks, posts, users, todos, comments, alboms } from './db/db.js'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App navLinks={navLinks} posts={posts} users={users} todos={todos} comments={comments} alboms={alboms}/>
    </BrowserRouter>
)
