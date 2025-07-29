import style from './NavLink.module.css'
import { NavLink } from 'react-router-dom'

const Link = ({ to, children }) => {
  return (
    <div className={style.container}>
      <NavLink
        to={to}
        className={({ isActive }) => isActive ? style.active : ''}
      >
        {children}
      </NavLink>
    </div>
  )
}

export { Link }
