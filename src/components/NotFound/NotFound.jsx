import style from './NotFound.module.css'
import notFoundImg from '../../assets/404.avif'

const NotFound = () => {
  return (
    <div className={style.container}>
        <img src={notFoundImg} alt='Not found'/>
    </div>
  )
}

export default NotFound