import { Link } from '../NavLink/NavLink'
import style from './Header.module.css'

const Header = ({navLinks}) => {
  return (
    <div className={style.container}>
        {
            navLinks.map((link) => 
             <Link to={link}
               navLinks={navLinks} 
               key={link}>
                  {link}
              </Link>
            )
        }
    </div>
  )
}

export default Header