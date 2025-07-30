import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = ({navLinks}) => {
  return (
    <div>
        <Header navLinks={navLinks}/>
        <Outlet />
    </div>
  )
}

export default Layout